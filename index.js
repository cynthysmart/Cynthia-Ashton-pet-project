const http = require('http');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const express = require('express');
const { application } = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');
const { v4:uuidv4 } = require('uuid');

const router = require('./router');
const app = express();
const fetch = require('node-fetch'); 



const port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

//load static assets
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

app.use(session({
  secret: uuidv4(),
  resave: false,
  saveUninitialized: true
}));
 
app.use('/route', router); 


//home route
app.get('/', (req, res) => {
  res.render('base', {title: "Login System"});
}) 

app.listen(port, () => {console.log("Listening to the server on http://locahost:3000")});



/*const bodyData = `{
  "update": {},
  "fields": {
    "summary": "Main order flow broken",
    "parent": {
      "key": "DEV"
    },
    "issuetype": {
      "id": "10000"
    },
    "components": [
      {
        "id": "10000"
      }
    ],
    "customfield_20000": "06/Jul/19 3:25 PM",
    "customfield_40000": {
      "type": "doc",
      "version": 1,
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "text": "Occurs on all orders",
              "type": "text"
            }
          ]
        }
      ]
    },
    "customfield_70000": [
      "jira-administrators",
      "jira-software-users"
    ],
    "project": {
      "id": "10000"
    },
    "description": {
      "type": "doc",
      "version": 1,
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "text": "Order entry fails when selecting supplier.",
              "type": "text"
            }
          ]
        }
      ]
    },
    "reporter": {
      "id": "5b10a2844c20165700ede21g"
    },
    "fixVersions": [
      {
        "id": "10001"
      }
    ],
    "customfield_10000": "09/Jun/19",
    "priority": {
      "id": "20000"
    },
    "labels": [
      "bugfix",
      "blitz_test"
    ],
    "timetracking": {
      "remainingEstimate": "5",
      "originalEstimate": "10"
    },
    "customfield_30000": [
      "10000",
      "10002"
    ],
    "customfield_80000": {
      "value": "red"
    },
    "security": {
      "id": "10000"
    },
    "environment": {
      "type": "doc",
      "version": 1,
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "text": "UAT",
              "type": "text"
            }
          ]
        }
      ]
    },
    "versions": [
      {
        "id": "10000"
      }
    ],
    "duedate": "2019-05-11",
    "customfield_60000": "jira-software-users",
    "customfield_50000": {
      "type": "doc",
      "version": 1,
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "text": "Could impact day-to-day work.",
              "type": "text"
            }
          ]
        }
      ]
    },
    "assignee": {
      "id": "5b109f2e9729b51b54dc274d"
    }
  }
}`;

fetch('https://strataconsulting.atlassian.net/jira/software/c/projects/DEV/issues', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'cynthia@strataconsulting.com:45qfzDIaDs7A5KPzJZ0FE211'
    ).toString('base64')}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: bodyData
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));



app.listen(8000, () => console.log("Listening on port 8000")); */
