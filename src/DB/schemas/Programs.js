const { Schema, model } = require("mongoose");

//a continuacion instancio la clase "User"
const programSchema = new Schema({
  name: {type: Schema.Types.String},
  program: {type: Schema.Types.Mixed},
});

module.exports = model("Program", programSchema);
