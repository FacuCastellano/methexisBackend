require("../connection.js");
const mongoose = require("mongoose");
const Topic = require("../schemas/Topic.js");

async function addDevelopmentToTopic(topicTitle, developmentToAdd) {
  try {
    const topic = await Topic.findOne({
      topicName: topicTitle,
    });
    if (topic) {
      topic.developments.push(developmentToAdd);
      await topic.save();
    } else {
      return -1;
    }
  } catch (err) {
    console.log(
      "ha ocurrido el siguiente error en la funcion getSubjectFromLevel."
    );
    console.log(err);
    return null; // si ocurre un error tira null.. no error.
  }
}

module.exports = {
  addDevelopmentToTopic,
};
