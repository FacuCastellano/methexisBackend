const { Router } = require("express");
const router = Router();
const {
  getLevelsFromProgramId,
  getSubjectFromLevel,
  getUnitsFromSubject,
  getTopicFromStringId
} = require("../DB/crud/read");

//getLevelsFromProgramId("647130e06b0c8618063f71c5").then((r) => console.log(r));
//getSubjectFromLevel("647130e06b0c8618063f71c5", "nivel-4").then((r) =>console.log(r));
//getUnitsFromSubject("647130e06b0c8618063f71c5", "nivel-4", "materia-8").then((r) => console.log(r));

router.get("", async (req, res) => {
  try {
    res.redirect('http://localhost:3000/')
  } catch {
    res.send(null);
    res.end();
  }
});

router.get("/", async (req, res) => {
  try {
    res.send("<h2>hola desde el servidor de Methexis</h2>");
    res.end();
  } catch {
    res.send(null);
    res.end();
  }
});

router.get("/get-levels", async (req, res) => {
  try {
    const programStringId = req.query.programStringId; // Acceso al valor de programStringId desde req.query
    const levels = await getLevelsFromProgramId(programStringId);
    const data = { data: levels };
    res.send(JSON.stringify(data));
    res.end();
  } catch {
    res.send(null);
    res.end();
  }
});

////////
router.get("/get-subjects", async (req, res) => {
  try {
    const programStringId = req.query.programStringId;
    const levelStringId = req.query.levelStringId;
    const subjects = await getSubjectFromLevel(programStringId, levelStringId);
    const data = { subjects: subjects };
    res.send(JSON.stringify(data));
    res.end();
  } catch {
    res.send(null);
    res.end();
  }
});

router.get("/get-units", async (req, res) => {
  try {
    const programStringId = req.query.programStringId;
    const levelStringId = req.query.levelStringId;
    const subjectStringId  = req.query.subjectStringId ;
    const subjects = await getUnitsFromSubject(programStringId, levelStringId,subjectStringId);
    const data = { units: subjects };
    res.send(JSON.stringify(data));
    res.end();
  } catch {
    res.send(null);
    res.end();
  }
});

router.get("/get-topic", async (req, res) => {
  try {
    const topicStringId = req.query.topicStringId;
    const topic = await getTopicFromStringId(topicStringId);
    const data = { topic: topic};
    res.send(JSON.stringify(data));
    res.end();
  } catch {
    res.send(null);
    res.end();
  }
});



module.exports = router;
