const { Schema, model } = require("mongoose");

//a continuacion instancio la clase "User"
const topicSchema = new Schema({
  topicName: {
    type: String,
    required: true,
    unique: true
  },
  developments: [{type: Schema.Types.Mixed}],
});

module.exports = model("Topic", topicSchema);