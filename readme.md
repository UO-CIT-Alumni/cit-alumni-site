# Getting started

### Clone this repo
HTTPS: `$ git clone https://github.com/uo-cit-alumni/cit-alumni-site`

or SSH: `$ git clone git@github.com:uo-cit-alumni/cit-alumni-site`

then `$ cd cit-alumni-site`

### Install dependencies
You should have yarn, an npm wrapper: `$ npm i -g yarn`.

In the project directory, run `$ yarn install`.

### Start database
Install MySQL: https://dev.mysql.com/doc/mysql-getting-started/en/

Check the status to make sure it's running, if not then `start` it:

`$ sudo service mysql [start | stop | restart | status]`

#### Set up database
From root of project:

`$ mysql -u root -p < "db-model/setup-db.sql"`

#### Create citadmin user
`$ mysql -u root -p`

`mysql> CREATE USER 'citadmin'@'localhost' IDENTIFIED BY '<password>';`

`mysql> GRANT ALL PRIVILEGES ON *.* TO 'citadmin'@'localhost';`

`mysql> FLUSH PRIVILEGES;`

#### Database connection file
Create a file `secret/db.js` that looks like:

```
exports = {
  host: 'localhost',
  user: 'citadmin',
  password: '<password>',
  database: 'citalum'
};
```

### Start server

There are two servers: the one that came with create-react-app which we can use
for development, and the express server found in server.js, where our API is
served from.

For developing, use `$ yarn dev`. This will start both the development server
and the API server.

For production, run `$ yarn build` then `$ yarn start` to serve bundled files
along with the API.

`$ yarn dev` - Starts development server that came with create-react-app.

`$ yarn build` - Bundles files into `build/`.

`$ yarn start` - Starts our express server (must build first).
