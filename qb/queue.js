"use strict";

const queue = require("async/queue");
let QuickBooks = require("node-quickbooks"); // quickbooks sdk

function Queue(qbSettigs) {
  this.q = queue(function (task, callback) {
    let qbo = new QuickBooks(
      qbSettigs.consumerKey,
      qbSettigs.consumerSecret,
      task.company.accessToken,
      task.company.accessTokenSecret,
      task.company.companyId,
      task.useSandbox,
      qbSettigs.eneableLogs);
    let qboF = qbo[task.func];
    if(typeof qboF === "function"){
      /**
       *
       */
    }else return callback(new Error("missing qb action"));
  }, 1);
}

Queue.prototype.addTask = function(payload) {
	this.q.push(payload);
};

module.exports = Queue;
