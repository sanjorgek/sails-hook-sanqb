"use strict";
/**
 * QuickBooks API hook
 */
const queue = require("./queue");
const debug = require("debug")("sails:hook:sanqb");

module.exports = function (sails) {
  return {
    
    //defaults: {},

    configure(){
      if(!sails.config.quickbooks){
        sails.config.quickbooks = {};
      }
      if(!sails.config.quickbooks.companyModel){
        sails.config.quickbooks.companyModel = "company";
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
        
        return next();
      });
    }

  };
};
