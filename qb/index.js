/**
 * qb hook
 */

module.exports = function (sails) {
  return {
    
    //defaults: {},

    //configure: function(){},

    //routes: {
      //before: {},
      //after: {},
    //}
    
    // Run when sails loads-- be sure and call `next()`.
    initialize: function (next) {
      return next();
    }

  };
};
