# MAC0218

[![Build Status](https://travis-ci.com/billkondo/MAC0218.svg?branch=master)](https://travis-ci.com/billkondo/MAC0218)

### This project is currently deployed in heroku on [simula-prova.herokuapp.com](https://simula-prova.herokuapp.com/)!

This project is being developed during the discipline MAC0218 from University of São Paulo. The goal of doing this project is to develop a site that students and teachers can help each other during their preparation for the university entry exams. The main functionalities of this platform is to create and share problems, create and do practice tests, and create study groups. Additional features include: message exchange and recomendation problems system.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

The following technologies need to be installed in order to run this project:

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)
- [Ruby on Rails](https://guides.rubyonrails.org/getting_started.html)
- [PostgreSQL](https://www.postgresql.org/)

### Installing

Get the repository by cloning it:

```
git clone git@github.com:billkondo/MAC0218.git     (using SSH)
git clone https://github.com/billkondo/MAC0218.git (using HTTPS)
```

Install ruby dependencies:

```
bundle install
```

Install webpacker and configure it to accept React:

```
rails webpacker:install
rails webpacker:install:react
```

Install node dependencies

```
yarn install
```

Configure the /config/database.yml file by changing the username fields. Write the username from the operating system you are using and select a name for development / test databases. The following blockquote is the database.yml file:

```
development: &default
  adapter: postgresql
  host: localhost
  username: your_username
  database: choose_name
  pool: 5
  timeout: 5000

test:
  <<: *default
  adapter: postgresql
  username: your_usename
  database: choose_name

```

Create / update database schema:

```
rails db:migrate
```

Start PostgreSQL Server. Check this [tutorial](https://tableplus.io/blog/2018/10/how-to-start-stop-restart-postgresql-server.html):

Start rails server:

```
rails s
```

For development, start also the webpacker dev server (faster reinitialization):

```
./bin/webpack-dev-server
```

## Running the tests

To run all tests, simply execute `rspec` on the project root folder:

In order to execute a specific test run:

```
rspec path/to/spec/file.rb
```

## Deployment

TODO

## Wiki

Check the [wiki](https://github.com/billkondo/MAC0218/wiki) in order to know more about this project.

## Built With

- [React](https://reactjs.org/) - The front-end library
- [Yarn](https://yarnpkg.com/en/) - Dependency Management
- [Ruby on Rails](https://rubyonrails.org/) - Backend framework
- [PostgreSQL](https://www.postgresql.org/) - Database

## Authors

- **Gabriel Oliveira** - [gafeol](https://github.com/gafeol)
- **Jiang Zhi** - [kokosha](https://github.com/kokosha)
- **Pedro Sousa** - [pedroteosousa](https://github.com/pedroteosousa)
- **William Kondo** - [billkondo](https://github.com/billkondo)
