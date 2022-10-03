# Airlines price offers - Testing Suite

This directory contains e2e test suite based on [Cypress](https://www.cypress.io/), that can be used to verify basic scenarios of Airlines price offers App.

## Prerequisites

- Node >= 12.x
- Before launching this suite, make sure that your app is live, running at `http://localhost:8080

## Setup

1. Run `nvm use` to use the proper Node.js version
2. Run `yarn install` to install required dependencies
3. Run `yarn test` to start Cypress and verify prepared scenarios

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
