# Streaming TV Service Guide — directv interface

This project is an angular web interface for a streaming directtv service.


## Getting Started

To get you started you can simply clone the repository:
git clone ssh://git@stash:7999/kap/kap_sts_guide.git

### Prerequisites

We also use a number of node.js tools to initialize and test this project. You must have node.js and
its package manager (npm) installed.  You can get the node installer here: S:\ScottBrown\projects\node_and_angular-seed.  The packages needed are bundled with the project.

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000'.



## Directory Layout

```
sts-app/              --> all of the source files for the application  
    components/           --> all app specific components
        channels/              --> guide view template and logic
            *.html                --> the partial html template
            channel.directive.js  --> directive for the component
            channel_test.js       --> jasmine tests for the component
        etc/              --> other app specific components
    shared/             --> area for non app-specific components
    assets/             --> scss, css, images, etc for the application
    sts-app.module.js   --> main application module
index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
node_modules/         --> normally not source controlled but keeping for net restriction reasons
js/                   --> 3rd party libraries
```

## Testing

There are two kinds of tests in the application: Unit tests and End to End tests.

### Running Unit Tests

The app has unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

### End to end testing

The angular-seed app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

You can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend serving the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.


## Style
Recommend referencing (https://github.com/johnpapa/angular-styleguide) for angular coding style guidelines.