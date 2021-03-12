var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();

app.use(cors());
app.options('*', cors())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
