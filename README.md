# Airlines price offers

# Getting Started

### Prerequisites

You'll need [Node](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/en/).

## Run the app

```sh
cd app
yarn install
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## Build the app

```sh
yarn build
```

## Run unit test

```sh
yarn test
```

### Technology stack

  1. React is used to build the UI
  2. React Query is used to fetch the data
  3. react-router
  4. emotion and tailwindcss is used to build design system
  5. Jest is used for unit testing
  6. MSW is used for to mock the api data
  
  
# Airlines price offers - Testing Suite

This directory contains e2e test suite based on [Cypress](https://www.cypress.io/), that can be used to verify basic scenarios of Airlines price offers App.

## Prerequisites

- Node >= 12.x
- Before launching this suite, make sure that your app is live, running at `http://localhost:8080

## Setup

1. Run `cd tests`
2. Run `nvm use` to use the proper Node.js version
3. Run `yarn install` to install required dependencies
4. Run `yarn test` to start Cypress and verify prepared scenarios

## Test Scenarios

### App

Spec file - `tests/cypress/integration/app.cy.js`

1. The app should be available at desired URL

- Open `http://localhost:8080`
- Verify if served document contains an element marked as app container

### List

Spec file - `tests/cypress/integration/list.cy.js`

1. The app should display price offers list

- Open `http://localhost:8080`
- Verify if price offers list elements are available within desired timespan
- Verify if price offers list elements contain origin and destination
- Verify if price offers list elements contain price
- Verify if price offers list elements contain seat
- Verify if price offers list elements contain departure date and return date
