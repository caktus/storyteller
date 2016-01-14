## React App ES6/Less Boilerplate

Start developing React JS applications easily with the included tooling. Using gulp with browserify and jasmine for testing. Implements a sample ReactJS application, "Reactive Notes", as examples of
the setup. Included in the setup:

- Browserify for Module unpacking
- Less compilation
- Live reloading on changes for development
- ES6 transpilation via Babel
- React and Flux layout example including components, actions, store, and dispatcher modules

Still planned:

- Example tests covering the new example app
- Documenting example React application
- Removing build/dist from repository

Based on [React App Boilerplate](https://github.com/christianalfoni/react-app-boilerplate)

Read more about how it works at: [React JS workflow, part 2](http://christianalfoni.github.io/javascript/2014/10/30/react-js-workflow-part2.html)

### Notes
The boilerplate is minimalistic, meaning you have to expand on the current workflow for handling static assets etc.

### Install

* Clone the repo
* Run `npm install`

### Changes

**1.0**

Built from existing React boilerplate and added ES6, Less, and an example application.

### Development
* Run `NODE_ENV=development gulp`
* Go to `localhost:8889` to display the app
* Go to `localhost:8889/testrunner.html` to see your tests
* Any changes to `app` or `styles` folder will automatically rebuild to `build` folder
* Both tests and application changes will refresh automatically in the browser
* Run `gulp test` to run all tests with phantomJS and produce XML reports

### Minify the code, ready for production
* Run `NODE_ENV=production gulp deploy`

### Directory
* **build/**: Where your automatically builds to. This is where you launch your app in development
* **dist/**: Where the deployed code exists, ready for production
* **styles/**: Where you put your css files
* **specs/**: Where you put your test files
* **gulpfile**: Gulp configuration
