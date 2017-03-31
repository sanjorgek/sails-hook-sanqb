"use strict";
/**
 * QuickBooks API hook
 */
const debug = require("debug")("sails:hook:sanqb");
const Queue = require("./queue");

module.exports = function (sails) {
  return {
    
    //defaults: {},

    configure(){
      if(!sails.config.quickbooks){
        sails.config.quickbooks = {};
      }
    },

    //routes: {
      //before: {},
      //after: {},
    //}
    
    // Run when sails loads-- be sure and call `next()`.
    initialize (next) {
      sails.after(["hook:orm:loaded"], function () {
        let qbSettings = sails.config.quickbooks;
        let companyModel = sails.models[qbSettings.companyModel];
        sails.quickbooks = {
          Queue : new Queue(sails.config.quickbooks)
        };
        return next();
      });
    }

  };
};
