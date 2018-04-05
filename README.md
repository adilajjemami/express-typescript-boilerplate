Express Typescript Boilerplate
===
[![Build Status](https://travis-ci.org/adilajjemami/express-typescript-boilerplate.svg?branch=master)](https://travis-ci.org/adilajjemami/express-typescript-boilerplate)
[![codecov](https://codecov.io/gh/adilajjemami/express-typescript-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/adilajjemami/express-typescript-boilerplate)


## Table of Contents

<!-- toc -->
- [Installation](#installation)
- [Introduction](#introduction)
    - [Project Structure](#project-structure)
    - [Server](#server)
- [NPM Scripts](#npm-scripts)
    - [Code Linting](#code-linting)
    - [Code Testing](#code-testing)
    - [Check Security](#check-security)
    - [Build Project](#build-project)
    - [Serve Dev](#serve-dev)

<!-- tocstop -->

# Installation

```sh
git clone https://github.com/adilajjemami/express-typescript-boilerplate.git
cd express-typescript-boilerplate
yarn install
```
> 
> Long live to [Expressjs](http://expressjs.com/), [Typescript](http://www.typescriptlang.org/) and [Yarn](https://yarnpkg.com/lang/en/) :metal:



# Introduction

Like most starter-kits and boilerplate projects, this project has a simple philosophy in other words : *Be simple !*


## Project Structure


```
project 
│
└───src
│   │   Server.ts
│   │   index.ts
│   │
│   └───Controller
│   |   │   BaseController.ts // Abstr  ct controller
│   |   │   HelloController.ts // Controller example
|   |
│   └───Core
│   |   │   Core.ts // Application Core
│   |   │   DependencyInjection.ts // Injection / import utility
|   |
│   └───Middlewares
│   |   │   ErrorMiddleware.ts // Expressjs middleware that return json response when an exception is thrown
|   |
│   └───Services
│   |   │   FakeService.ts // Service example
│   |   │   HelloService.ts // Service example
|   |
│   └───Utils
│   |   │   ApiError.ts // Custom Error class
│   |   │   GlobalMessage.ts // Get error object based on an errorCode
|   |   
│   └───config
│       │   config.ts // Global/shared configuration
│       │   configDev.ts // Development configuration. NODE_ENV=dev
│       │   configDev.ts // Production configuration. NODE_ENV=prod
│       │   configTest.ts // Production configuration. NODE_ENV=test
│       │   middlewares.ts // Middlewares configuration
│       │   parameters.ts // Application parameters
│       │   routing.ts // Apllication routing
│       │   services.ts // Services configuration
│   
└───Resources
|   │   errors.json // Global error messages
|
└───test // Unitests
└───dist // Dist files
```


## Server


```ts
import http from 'http';
import { Server } from './Server';

Server.boostrap()
    .then((server) => {
        // Create server
        const httpServer = http.createServer(app);

        // Start listening on port 3000
        // You can override port by using NODE_PORT=8080
        httpServer.listen(server.getPort());
    });
```

If you prefer **async**/**await**:


```ts
import http from 'http';
import { Server } from './Server';

...

const server = await Server.bootstrap();

// Create server
const httpServer = http.createServer(app);

// Start listening on port 3000
// You can override port by using NODE_PORT=8080
httpServer.listen(server.getPort());
```

## NPM Scripts

## Code Linting

To lint the source code (tsLint):

```sh
npm run lint
```

## Code Testing

To test the source code (mocha/chai):

```sh
npm run test
```

## Check Security

To dependencies check security issues (retirejs):

```sh
npm run security-checker
```

## Build Project

To build the project:

```sh
npm run build
```

## Serve Dev

You can run the server (dev):

```sh
npm run serve-dev
```
