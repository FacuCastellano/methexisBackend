require("../connection.js");
const mongoose = require("mongoose");
const Program = require("../schemas/Programs.js");
const Topic = require("../schemas/Topic.js");
const ObjectId = mongoose.Types.ObjectId;

//esta funcion devuelve los niveles del programa.
async function getLevelsFromProgramId(programStringId) {
  try {
    const program = await Program.findOne({
      _id: new ObjectId(programStringId),
    });
    if (program) {
      const levels = Object.keys(program.program);
      return levels;
    } else {
      return -1;
    }
  } catch (err) {
    console.log(
      "ha ocurrido el siguiente error en la funcion getLevelsFromProgramId."
    );
    console.log(err);
    return null; // si ocurre un error tira null.. no error.
  }
}

//esta funcion devuelve los niveles del programa.
async function getSubjectFromLevel(programStringId, levelStringId) {
  try {
    const program = await Program.findOne({
      _id: new ObjectId(programStringId),
    });
    if (program) {
      const subjects = Object.keys(program.program[levelStringId]);
      return subjects;
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

async function getUnitsFromSubject(
  programStringId,
  levelStringId,
  subjectStringId
) {
  try {
    const program = await Program.findOne({
      _id: new ObjectId(programStringId),
    });
    if (program) {
      const units = program.program[levelStringId][subjectStringId];
      return units;
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

async function getTopicFromStringId(topicStringId) {
  try {
    const topic = await Topic.findOne({
      _id: new ObjectId(topicStringId),
    });
    if (topic) {
      return topic;
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
  getLevelsFromProgramId,
  getSubjectFromLevel,
  getUnitsFromSubject,
  getTopicFromStringId
};
