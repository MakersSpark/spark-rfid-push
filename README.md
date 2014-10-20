# Spark Printer Push Server

A barebones node.js app that listens for Spark Printer RFID scans and pushes them to Spark Printer Server.

When Spark Printer scans a compatible MIFARE Classic RFID card (inexpensive and widely-available), it sends a notice through `Spark.publish` the Spark Cloud. This server listens out for those calls and forwards them on as a POST request to a server of your choice.

See [this readme](https://github.com/MakersSpark/Maker-Spark-Server/blob/master/README.md) for more information.

## Configuration

You'll need to edit `index.js` – specifically, change the variable `url` to the URL you want to listen to Spark.publish events from, and the argument that `unirest.post` accepts to the URL you wish to push the POST request to.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ cd spark-rfid-push
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
