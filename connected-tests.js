// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by connected.js.
import { name as packageName } from "meteor/connected";

// Write your tests here!
// Here is an example.
Tinytest.add('connected - example', function (test) {
  test.equal(packageName, "connected");
});
