NODE_ENV?=development
NODE_OPTIONS?=''
APP_ENV?=development
HOST?=$(shell ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | awk '{print $1}')
PORT?=3000
APP_OPTIONS?=
SUBDOMAIN?=reaktor
TAG?=
SERVER=$(shell curl ipecho.net/plain)
APP_NAME=reaktor
PROJECT_DIR=$(shell pwd)

start:
	NODE_OPTIONS=$(NODE_OPTIONS) \
	HOST=$(HOST) \
	PORT=$(PORT) \
	meteor -p $(PORT) --settings ./config/$(APP_ENV)/settings.json --mobile-server $(HOST):$(PORT) $(APP_OPTIONS)

debug:
	NODE_OPTIONS='--debug' \
	HOST=$(HOST) \
	PORT=$(PORT) \
	meteor debug -p $(PORT) --settings ./config/$(APP_ENV)/settings.json

ios:
	NODE_OPTIONS=$(NODE_OPTIONS) \
	HOST=$(HOST) \
	PORT=$(PORT) \
	meteor run --settings ./config/$(APP_ENV)/settings.json ios -p $(PORT) $(APP_OPTIONS)

ios-device:
	NODE_OPTIONS=$(NODE_OPTIONS) \
	HOST=$(hostname) \
	PORT=$(PORT) \
	meteor run --settings ./config/$(APP_ENV)/settings.json ios-device -p $(PORT) --mobile-server $(HOST):$(PORT) $(APP_OPTIONS)

android:
	NODE_OPTIONS=$(NODE_OPTIONS) \
	HOST=$(HOST) \
	PORT=$(PORT) \
	meteor run --settings ./config/$(APP_ENV)/settings.json android -p $(PORT) $(APP_OPTIONS)

android-device:
	NODE_OPTIONS=$(NODE_OPTIONS) \
	HOST=$(HOST) \
	PORT=$(PORT) \
	meteor run --settings ./config/$(APP_ENV)/settings.json android-device -p $(PORT) --mobile-server $(HOST):$(PORT) $(APP_OPTIONS)

# builds ios app and android app
# ios needs to be completed manually at this point,
# android has a few extra steps that are completed automatically/manually
#  - replace webview with crosswalk webview
#     - https://meteor.hackpad.com/Building-Meteor-app-with-Crosswalk-kHKh4DzGxFQ
#	VERSION=0.1 make build add-crosswalk
build:
	# remove old builds
	rm -rf ~/cordova-builds/$(APP_NAME)/$(VERSION)/$(APP_ENV)/
	# set environment variables
	APP_ENV=$(APP_ENV) \
	VERSION=$(VERSION) \
	APP_NAME=$(APP_NAME) \
	#build to ~/cordova-builds
	meteor build ~/cordova-builds/$(APP_NAME)/$(VERSION)/$(APP_ENV)/ --server=https://$(APP_NAME).meteor.com

add-crosswalk:
	# add crosswalk
	cd ~/cordova-builds/$(APP_NAME)/$(VERSION)/$(APP_ENV)/android/project && \
	rm -rf CordovaLib/* && \
	cp -R $(PROJECT_DIR)/private/crosswalk/x86/framework/ CordovaLib/ && \
	cp -R $(PROJECT_DIR)/private/crosswalk/arm/framework/xwalk_core_library/libs/armeabi-v7a CordovaLib/xwalk_core_library/libs/ && \
	cp $(PROJECT_DIR)/private/crosswalk/arm/VERSION VERSION && \
	sublime AndroidManifest.xml
	# <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
	# <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
	# VERSION=$(VERSION) make build-crosswalk prepare-apk

# NOTE: After running build-step1, Edit the AndroidManifest to add the permissions for WiFi state and network (you probably need to add only the first one):
# <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
# <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

# VERSION=0.1 make build-crosswalk prepare-apk
build-crosswalk:
	cd ~/cordova-builds/$(APP_NAME)/$(VERSION)/$(APP_ENV)/android/project/CordovaLib && \
	android update project --subprojects --path . --target "android-19" && \
	ant debug
	cd ~/cordova-builds/$(APP_NAME)/$(VERSION)/$(APP_ENV)/android/project && \
	ant clean && \
	ant release

#  - signs jar
#  - optimizes jar
#  - final version copied to Box for easy sharing
#  APP_ENV=development SUBDOMAIN=www VERSION=0.1 make build-step2
prepare-apk:
	jarsigner -digestalg SHA1 ~/cordova-builds/$(APP_ENV)/android/unaligned.apk $(SUBDOMAIN)
	~/.meteor/android_bundle/android-sdk/build-tools/20.0.0/zipalign 4 ~/cordova-builds/$(APP_NAME)/$(VERSION)/$(APP_ENV)/android/unaligned.apk ~/cordova-builds/$(APP_NAME)/$(VERSION)/$(APP_ENV)/android/$(SUBDOMAIN)-$(VERSION).apk
	cp -f ~/cordova-builds/$(APP_NAME)/$(VERSION)/$(APP_ENV)/android/$(SUBDOMAIN)-$(VERSION).apk /Users/pat/Box\ Sync/Plus\ More/For\ Pat

# test on web, and an android and ios device
start-all-platforms:
	NODE_OPTIONS=$(NODE_OPTIONS) \
	MONGO_URL=$(MONGO_URL) \
	MONGO_OPLOG_URL=$(MONGO_OPLOG_URL) \
	CLUSTER_DISCOVERY_URL=$(CLUSTER_DISCOVERY_URL) \
	CLUSTER_SERVICE=$(CLUSTER_SERVICE) \
	CLUSTER_PUBLIC_SERVICES=$(CLUSTER_PUBLIC_SERVICES) \
	meteor run --settings ./config/$(APP_ENV)/settings.json ios-device android-device -p $(PORT) --mobile-server $(HOST):$(PORT) $(APP_OPTIONS)

# runs code concat, minification, etc.
start-prod:
	NODE_OPTIONS=$(NODE_OPTIONS) \
	HOST=$(HOST) \
	PORT=$(PORT) \
	meteor -p $(PORT) --production --settings ./config/$(APP_ENV)/settings.json

tag:
	git tag -a $(TAG) -m 'tagging release'
	git push origin $(TAG)
