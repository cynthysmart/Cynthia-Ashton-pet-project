const express = require("express");
const app = express();
const JiraApi = require("jira-client");

const jira = new JiraApi({
  protocol: "https",
  host: "jira.somehost.com",
  username: process.env.usernam,
  password: process.env.password,
  apiVersion: "2",
  strictSSL: true,
});
console.log(process.env.usernam)
// TODO: Add dotenv package
// TODO: Add Password and user name as env in .env file
// TODO: read the env in your application

app.get("/", (req, res) => {
  res.json("GOOD");
});

app.listen(3000, () => console.log("App started"));
