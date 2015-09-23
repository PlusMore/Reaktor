# Reaktor

## Running

A make file is provided for ease of use. Simply install meteor, and then run the following command.

    make start

### Permission issues?

Running with sudo shouldn't be necessary.

    cd ~
    sudo chown -R $(whoami) .

## Additional Setup (Optional)

### Port forwarding for testing facebook on cordova locally

[See Gist by jamilob](https://gist.github.com/jamielob/881e0fe059c0ef0eb36d)

### Setting up MongoDb for cluster

Open two terminal windows.
In the first window run:

    make mongod

In the second window run:

    mongo
    > var config = {_id: "meteor", members: [{_id: 0, host: "127.0.0.1:27017"}]}
    > rs.initiate(config)

This command initializes the replica set. The replica set uses a log of operations, named the ```oplog``` to pass changes to other replicas. Meteor also tails this log to get instant changes across multiple applications. Seems how we are using a microservice architecture, the database for each application will be generated, however, cluster still needs this shared database to be set up for service registration and discovery.

## Building app

    make build


## Page Layout
```
    {{#Layout template="Page"}}
        {{#contentFor "header"}}
          <h1>Page Title</h1>
        {{/contentFor}}

        {{#contentFor "breadcrumb"}}
            <li>
                <a href="{{pathFor 'Dashboard'}}">Dashboard</a>
            </li>
            <li>Section</li>
            <li class="active">Page Title</li>
        {{/contentFor}}

        <!-- page content -->

        <!-- page content end -->

    {{/Layout}}
```

## Updating packages

    meteor update

Note: Updating Bootstrap theme can be a bit tricky as the file ```lib/less/vendor/bootstrap/custom.bootstrap.import.less``` may need to be manually deleted so it can be regenerated with new variables requires by a newer version of bootstrap. The easiest way IMO, is to just delete the file, let it regenerate, and then look at the diff to find any changes you made previously that may have been lost. To mitigate this, put variables in ```lib/less/bootstrap-theme/variables.less``` when possible.
