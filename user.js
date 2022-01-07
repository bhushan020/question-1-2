const mysql = require ("mysql")
const promise = require("bluebird");
const Connection=require("mysql/lib/Connection");
const { response } = require("express");
const {append}=require("express/lib/response");
promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host:"localhost",
    user:"root",
    password:"cdac",
    database: "react",

};
const ConnectionCheck = async() =>{
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();

console.log("Connection Fine");
await connection.endAsync();
};



const showMessage = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let showquery = 'select * from MESSAGE';
    let list = await connection.queryAsync(showquery);
    console.log(list);
    await connection.endAsync();
    return list;
};
showMessage();

