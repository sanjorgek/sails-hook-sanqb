"use strict";

const assert = require("assert");
const _ = require("@sailshq/lodash");
const Sails = require("sails").Sails;

describe("with the appropriate adapter(s) and `migrate: safe`", function (){

    // New up an instance of Sails.
    let app = new Sails();

    // Load the app.
    before(function setup(done){
      app.load({
        globals: false,
        log: { level: "warn" },
				hooks: {
          // Inject the orm hook in this repo into this Sails app
          quickbooks: require("../qb/index")
        },
        loadHooks: ["moduleloader", "userconfig", "orm", "quickbooks"],
        models: {
          migrate: "drop",
					connection: "localDiskDb"
        },
				connections: {
					localDiskDb: {
						adapter: "sails-disk"
					}
				},
        orm: {
          // THIS IS FOR EXPERIMENTAL USE ONLY!
          // (could change at any time)
          moduleDefinitions: {
            models: {
              company: {
                attributes: {
                  xid: {
                    type: "number",
                    required: true
                  }
                }
              }
            }
          }
        },
				quickbooks: {
					accessToken: "",
					accessTokenSecret: "",
					companyId: ""
				}
      },done);
    });

    it("should have initialized the `orm` hook", function (){
      assert(app.hooks.orm);
    });

    it("should have set up a dictionary of models on the hook", function (){
      assert(_.isObject(app.hooks.orm.models) && !_.isArray(app.hooks.orm.models));
    });

    it("should have set up a dictionary of adapters on the hook", function (){
      assert(_.isObject(app.hooks.orm.adapters) && !_.isArray(app.hooks.orm.adapters));
    });

    it("should have also exposed `sails.models` as a direct reference to `sails.hooks.orm.models`", function (){
      assert(app.models === app.hooks.orm.models);
    });

    it("should contain the expected models in `sails.hooks.orm.models`", function (){
      assert.equal(_.keys(app.models).length, 1);
      assert(_.isObject(app.models.company), new Error("Should have a model under the `company` key"));
    });




    // Lower the app.
    after(function teardown(done) {
      app.lower(done);
    });

  });