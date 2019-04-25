# Call center

**Call center full stack challenge - API**

## Technology
* [Node.js](https://nodejs.org/en/)
* [Postgresql](https://www.postgresql.org/)

## Requirements
* [Docker](https://docs.docker.com/install/#server) **Linux only**
* [Docker Compose](https://docs.docker.com/compose/install/)

## Getting started

### Development
To start the development process is necessary to run the solution locally following the steps below:
* Clone the repository.

* Run `docker-compose up` to run the database and API
* Run `yarn install` to install all the necessary dependecies.
* The API services will be available at localhost:4000

**The first time running the project will be necessary run the migration and database seed**
* After run docker containers use `yarn docker:migrate` and `yarn docker:seed`

### Scripts

This project requires [Node.js](http://nodejs.org/) (>= v8) and [npm](https://npmjs.org/) (comes with Node).

After installing dependencies using `yarn install` the following scripts are available:

`npm run ...` | Description
---|---
`yarn lint` | Run lint rules all over the project.
`yarn test` | Runs project tests.
`start` | Serves api on [`http://localhost:4000`](http://localhost:4000).
`start:dev` | Serves api using nodemon to hot reload on [`http://localhost:4000`](http://localhost:4000).
`migration:create` | Create db migration.
`db:migrate` | Run db migration.
`docker:migrate` | Run db migration on docker container.
`db:seed` | Add seed data to db.
`docker:seed` | Add seed data to db on docker container.
