// esta funcion crea un programa generico
function fillProgram1(programaCode, levels, subjectsArray, units, topics) {
  const program = {};

  for (let n = 1; n <= levels; n++) {
    program["nivel-" + n] = {};

    const subjects = subjectsArray[n - 1];

    for (let m = 1; m <= subjects; m++) {
      program["nivel-" + n]["materia-" + m] = [];
      for (let u = 1; u <= units; u++) {
        const unit = [];
        unit.push(`unit-${u}`);
        for (let t = 1; t <= topics; t++) {
          const topicKey = `tema-${t}`;
          const topicId =
            programaCode + ".N" + n + ".M" + m + ".U" + u + ".T" + t;
          unit.push({ [topicKey]: topicId });
        }
        program["nivel-" + n]["materia-" + m].push(unit);
      }
    }
  }
  return program;
}

// creo los nombres de las materias de cada año
const materiasN1 = {
  "materia-1": "lengua y literatura",
  "materia-2": "matemática",
  "materia-3": "biología",
  "materia-4": "física",
  "materia-5": "geografía",
  "materia-6": "inglés",
  "materia-7": "artes visuales",
  "materia-8": "educación tecnológica",
  "materia-9": "ciudadanía y participación",
  "materia-10": "educación física",
};

const materiasN2 = {
  "materia-1": "lengua y literatura",
  "materia-2": "matemática",
  "materia-3": "biología",
  "materia-4": "química",
  "materia-5": "historia",
  "materia-6": "inglés",
  "materia-7": "música",
  "materia-8": "educación tecnológica",
  "materia-9": "ciudadanía y participación",
  "materia-10": "educación física",
};

const materiasN3 = {
  "materia-1": "lengua y literatura",
  "materia-2": "matemática",
  "materia-3": "física",
  "materia-4": "química",
  "materia-5": "historia",
  "materia-6": "inglés",
  "materia-7": "artes visuales",
  "materia-8": "educación tecnologica",
  "materia-9": "geografía",
  "materia-10": "educación física",
  "materia-11": "formación para la vida y el trabajo",
  "materia-12": "música",
};
const materiasN4CS = {
  "materia-1": "matemática",
  "materia-2": "lengua y literatura",
  "materia-3": "biología",
  "materia-4": "geografía",
  "materia-5": "historia",
  "materia-6": "inglés",
  "materia-7": "artes visuales",
  "materia-8": "educación física",
  "materia-9": "formación para la vida y el trabajo",
  "materia-10": "antropología social y cultural",
  "materia-11": "problemáticas éticas y políticas",
};
const materiasN5CS = {
  "materia-1": "matemática",
  "materia-2": "lengua y literatura",
  "materia-3": "física",
  "materia-4": "geografía",
  "materia-5": "historia",
  "materia-6": "inglés",
  "materia-7": "música",
  "materia-8": "psicología",
  "materia-9": "educación física",
  "materia-10": "formación para la vida y el trabajo",
  "materia-11": "sociología",
  "materia-12": "sociedad, cultura y comunicación",
};

const materiasN6CS = {
  "materia-1": "matemática",
  "materia-2": "lengua y literatura",
  "materia-3": "química",
  "materia-4": "geografía",
  "materia-5": "historia",
  "materia-6": "inglés",
  "materia-7": "teatro",
  "materia-8": "ciudadanía y política",
  "materia-9": "filosofía",
  "materia-10": "educación física",
  "materia-11": "formación para la vida y el trabajo",
  "materia-12": "gestión de organizaciones sociales",
};
const materiasN4CN = {
  "materia-1": "matemática",
  "materia-2": "lengua y literatura",
  "materia-3": "biología",
  "materia-4": "física",
  "materia-5": "química",
  "materia-6": "geografía",
  "materia-7": "historia",
  "materia-8": "inglés",
  "materia-9": "artes visuales",
  "materia-10": "educación física",
  "materia-11": "formación para la vida y el trabajo",
  "materia-12": "educación para la salud",
};
const materiasN5CN = {
  "materia-1": "matemática",
  "materia-2": "lengua y literatura",
  "materia-3": "biología",
  "materia-4": "física",
  "materia-5": "química",
  "materia-6": "geografía",
  "materia-7": "historia",
  "materia-8": "inglés",
  "materia-9": "música",
  "materia-10": "psicología",
  "materia-11": "educación física",
  "materia-12": "formación para la vida y el trabajo",
  "materia-13": "ciencias de la tierra",
  "materia-14": "ecología",
};

const materiasN6CN = {
  "materia-1": "matemática",
  "materia-2": "lengua y literatura",
  "materia-3": "biología",
  "materia-4": "química",
  "materia-5": "inglés",
  "materia-6": "teatro",
  "materia-7": "ciudadanía y política",
  "materia-8": "filosofìa",
  "materia-9": "educación física",
  "materia-10": "formación para la vida y el trabajo",
  "materia-11": "ambiente, desarrollo y sociedad",
  "materia-12": "física y astronomía",
  "materia-13": "ciencias, tecnología y ética",
};
const materiasN4G = {
  "materia-1": "matemática",
  "materia-2": "lengua y literatura",
  "materia-3": "biología",
  "materia-4": "geografía",
  "materia-5": "historia",
  "materia-6": "inglés",
  "materia-7": "artes visuales",
  "materia-8": "educación física",
  "materia-9": "formación para la vida y el trabajo",
  "materia-10": "sistemas de información contable",
  "materia-11": "administración",
  "materia-12": "economía y desarrollo sustentable",
};

const materiasN5G = {
  "materia-1": "matemática",
  "materia-2": "lengua y literatura",
  "materia-3": "física",
  "materia-4": "geografía",
  "materia-5": "historia",
  "materia-6": "inglés",
  "materia-7": "música",
  "materia-8": "psicología",
  "materia-9": "formación para la vida y el trabajo",
  "materia-10": "educación física",
  "materia-11": "sistemas de información contable",
  "materia-12": "administración",
  "materia-13": "economía",
  "materia-14": "marco jurídico de las organizaciones",
};
const materiasN6G = {
  "materia-1": "matemática",
  "materia-2": "lengua y literatura",
  "materia-3": "química",
  "materia-4": "inglés",
  "materia-5": "teatro",
  "materia-6": "ciudadaíia y política",
  "materia-7": "filosofía",
  "materia-8": "educación física",
  "materia-9": "formación para la vida y el trabajo",
  "materia-10": "sistemas de información contable",
  "materia-11": "administración",
  "materia-12": "economía",
  "materia-13": "derecho",
  "materia-13": "responsabilidad social de las organizaciones",
};

//creo una funcion para cambiar el nombres a las materias.

function changeSubjectsName(program, nivelToChange, newSubjects) {
  const newProgram = program;
  const nivel = newProgram[nivelToChange];

  for (var key in nivel) {
    if (nivel.hasOwnProperty(key)) {
      let value = nivel[key];
      if (newSubjects.hasOwnProperty(key)) {
        const newKey = newSubjects[key];
        delete newProgram[nivelToChange][key]; // Eliminar la clave antigua
        newProgram[nivelToChange][newKey] = value; // Agregar la nueva clave con el valor previo
      }
    }
  }
  return newProgram;
}

//creo los programas genericos
let programaCS = fillProgram1("MEPC-CS", 6, [10, 10, 12, 11, 12, 12], 10, 10);
let programaCN = fillProgram1("MEPC-CN", 6, [10, 10, 12, 11, 12, 12], 10, 10);
let programaG = fillProgram1("MEPC-G", 6, [10, 10, 12, 11, 12, 12], 10, 10);

// //le cambio el nombre a las materias segun los niveles
//Ciencias Sociales
programaCS = changeSubjectsName(programaCS, "nivel-1", materiasN1);
programaCS = changeSubjectsName(programaCS, "nivel-2", materiasN2);
programaCS = changeSubjectsName(programaCS, "nivel-3", materiasN3);
programaCS = changeSubjectsName(programaCS, "nivel-4", materiasN4CS);
programaCS = changeSubjectsName(programaCS, "nivel-5", materiasN5CS);
programaCS = changeSubjectsName(programaCS, "nivel-6", materiasN6CS);

//Ciencias Naturales
programaCN = changeSubjectsName(programaCN, "nivel-1", materiasN1);
programaCN = changeSubjectsName(programaCN, "nivel-2", materiasN2);
programaCN = changeSubjectsName(programaCN, "nivel-3", materiasN3);
programaCN = changeSubjectsName(programaCN, "nivel-4", materiasN4CN);
programaCN = changeSubjectsName(programaCN, "nivel-5", materiasN5CN);
programaCN = changeSubjectsName(programaCN, "nivel-6", materiasN6CN);

//Gestion
programaG = changeSubjectsName(programaG, "nivel-1", materiasN1);
programaG = changeSubjectsName(programaG, "nivel-2", materiasN2);
programaG = changeSubjectsName(programaG, "nivel-3", materiasN3);
programaG = changeSubjectsName(programaG, "nivel-4", materiasN4G);
programaG = changeSubjectsName(programaG, "nivel-5", materiasN5G);
programaG = changeSubjectsName(programaG, "nivel-6", materiasN6G);

module.exports = {
  programaCN,
  programaCS,
  programaG,
};

// console.log(Object.keys(programaCS["nivel-5"]))
// console.log(Object.keys(programaCN["nivel-5"]))
// console.log(Object.keys(programaG["nivel-5"]))
