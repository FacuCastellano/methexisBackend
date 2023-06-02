require("../connection.js");
const mongoose = require("mongoose");
const Program = require("../schemas/Programs.js");
const Topic = require("../schemas/Topic.js");

async function createProgram(name, programObject) {
  try {
    const program = new Program({
      name: name.toLowerCase(),
      program: programObject,
    });
    await program.save();
    return true;
  } catch (err) {
    console.log("ha ocurrido el siguiente error en la funcion createProgram.");
    console.log(err);
    return null;
  }
}

async function createTopic(topicName) {
  try {
    const topic = new Topic({
      topicName: topicName.toLowerCase(),
      developments: [],
    });
    await topic.save();
    return true;
  } catch (err) {
    console.log("ha ocurrido el siguiente error en la funcion createTopic.");
    console.log(err);
    return null;
  }
}

module.exports = {
  createProgram,
  createTopic,
};
