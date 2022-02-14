# mern-basic-app
mern-basic-app

## Installation

#### Node installtion 
Install node from site and check node version on window command prompt.

```bash
  node -v 
  npm -v 
```
#### Express Installation
Create directory for new application and navigate into it.
use window or IDE terminal to create this.
```bash
  mkdir appname     
  cd appname 
```
Install app depedencies usign npm init as starting point of file. It will create the json file.
```bash
  npm init     
```

Install Express and package.json file look like this

```bash
  npm init express 

  Json files will have following depedencies    

  {
  "name": "exapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.2"
  }
}

```
#### First express APP 
Follow the above command before express app genration.
First Install express app genration.
```bash
  npm install express-generator -g
```
To genrate express with pug view run following commands
  ```bash
express appname --view=pug
cd appname 
npm install 
npm start 
```
To save time to start the server again for ever 
changes install this command in your project it 
will automatcally run the server when you save the file

  ```bash
npm i -g nodemon
```
#### MongoDB Installation 
Go to mongodb website and create free cluster there. 
Install the mongodb compass and copy the url from mongodb cluster and paste 
into mongodb compass.
mongodb+srv://username:<password>@mycluster.o07mo.mongodb.net/dataabasename

To install mongoose 
  ```bash
npm i mongoose 
```
Connectivity with MongoDB place the following code in app.js file under express require fucntion

  ```bash
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://mehakdb:mehakdb1@mycluster.o07mo.mongodb.net/local_lib';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

```
