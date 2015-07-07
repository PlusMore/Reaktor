NODE_ENV?=development
NODE_OPTIONS?=''
APP_ENV?=development
HOST?=$(shell ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | awk '{print $1}')
PORT?=3000
APP_OPTIONS?=
SUBDOMAIN?=reaktor
TAG?=

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

# builds ios app, and builds and signs apks
build:
	rm -rf ~/cordova-builds/$(APP_ENV)
	APP_ENV=$(APP_ENV) \
	SUBDOMAIN=$(SUBDOMAIN) \
	VERSION=$(VERSION) \
	meteor build ~/cordova-builds/$(APP_ENV) --server=https://$(SUBDOMAIN).reaktor.com
	cd ~/cordova-builds/$(APP_ENV)/android/
	jarsigner -digestalg SHA1 ~/cordova-builds/$(APP_ENV)/android/unaligned.apk $(SUBDOMAIN)
	~/.meteor/android_bundle/android-sdk/build-tools/20.0.0/zipalign 4 ~/cordova-builds/$(APP_ENV)/android/unaligned.apk ~/cordova-builds/$(APP_ENV)/android/$(SUBDOMAIN)-$(VERSION).apk
	cp -f ~/cordova-builds/$(APP_ENV)/android/$(SUBDOMAIN)-$(VERSION).apk /Users/pat/Box\ Sync/Plus\ More/For\ Pat

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
