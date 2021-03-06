# sails-hook-sanqb

  [![Build Status](https://travis-ci.org/sanjorgek/sails-hook-sanqb.svg?branch=master)](https://travis-ci.org/sanjorgek/sails-hook-sanqb)
  [![Code Climate](https://codeclimate.com/github/sanjorgek/sails-hook-sanqb/badges/gpa.svg)](https://codeclimate.com/github/sanjorgek/sails-hook-sanqb)
  [![Issue Count](https://codeclimate.com/github/sanjorgek/sails-hook-sanqb/badges/issue_count.svg)](https://codeclimate.com/github/sanjorgek/sails-hook-sanqb)
  [![bitHound Overall Score](https://www.bithound.io/github/sanjorgek/sails-hook-sanqb/badges/score.svg)](https://www.bithound.io/github/sanjorgek/sails-hook-sanqb)
  [![bitHound Dependencies](https://www.bithound.io/github/sanjorgek/sails-hook-sanqb/badges/dependencies.svg)](https://www.bithound.io/github/sanjorgek/sails-hook-sanqb/master/dependencies/npm)
  [![bitHound Dev Dependencies](https://www.bithound.io/github/sanjorgek/sails-hook-sanqb/badges/devDependencies.svg)](https://www.bithound.io/github/sanjorgek/sails-hook-sanqb/master/dependencies/npm)
  [![bitHound Code](https://www.bithound.io/github/sanjorgek/sails-hook-sanqb/badges/code.svg)](https://www.bithound.io/github/sanjorgek/sails-hook-sanqb)
  [![Codacy Badge](https://api.codacy.com/project/badge/Grade/c4375b17007f4afa9dddf1f1b256d676)](https://www.codacy.com/app/sanjorgek/sails-hook-sanqb?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=sanjorgek/sails-hook-sanqb&amp;utm_campaign=Badge_Grade)
  [![CircleCI](https://circleci.com/gh/sanjorgek/sails-hook-sanqb.svg?style=svg)](https://circleci.com/gh/sanjorgek/sails-hook-sanqb)

## About
A Sails hook for QuickBooks API. Work with node v4 and v6, see ES6.

## Settings
Install

```
npm install sails-hook-sanqb
```

Define at `config/quickbooks.js`

```js
module.exports.quickbooks = {
  consumerKey: "",
  consumerSecret: "",
  enableLogs: true,
  companyModel: "foo" //default company
}
```

Implement OAuth acces, see [oauth-node-js](https://github.com/IntuitDeveloper/oauth-node-js).

## Use

```js

```

### Aviable Functions
See [node-quickbooks](https://www.npmjs.com/package/node-quickbooks) for more details
