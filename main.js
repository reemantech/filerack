#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let types = require("./utilities").types
let helpObj = require("./commands/help");
let organizedObj = require("./commands/organized");
let treeObj = require("./commands/tree");
// console.log(inputArr);

let errorHandler = require("./errorHandler");

// node main.js tree "directoryPath"
// node main.js organise "directoryPath"
// node main.js help

let command = inputArr[0];
let dirPath = inputArr[1];

switch (command) {
  case "tree":
    treeObj.treeKey(dirPath);
    break;
  case "organize":
    organizedObj.organizedKey(dirPath);
    break;
  case "help":
    helpObj.helpKey();
    break;
  default:
    errorHandler.help();
    break;
}
