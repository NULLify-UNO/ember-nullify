# Ember-nullify
http://nullify.uno

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## How to create project
1. Open directory and type: `sudo npm install -g ember-cli`
2. After installation, create the project with the command: `ember new ember-PROJECTNAME`.  Typically I append `ember` on the front of each project because many times it's not the only utility in the project itself.  For example you could easily also have `django-PROJECTNAME` as a backend to your ember project.
3. Browse to you new project directory, and type: `ember s`  (short for `ember serve`, both will work).
4. Open your favorite browser and go to localhost:4200/, you've just created your first ember project.
5. Side note: if you're doing test-driven development or plan to write unit tests, also try to check out your stubbed out tests at localhost:4200/tests.  Ember has built-in unit testing functionality.

## Generating your first route
1. Use the command: `ember g route calender` to create a calendar route.  Note this takes the form of `ember g(generate) route(type of file generating) calendar(name of file)`.
2. This will add the following files:
  * /app/routes/calendar.js
  * /app/templates/calendar.hbs
  * /test/unit/routes/calendar-test.js
3. It also edits the /app/router.js to include the new route you just created.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


