const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

/* 1 */
const newTurn = (obj, key, value) => {
    obj[key] = value;
    return obj;
};
console.log(newTurn(lesson2, "turno", "noite"));

/* 2 */
const listKeys = (obj) => {
    const keys = Object.keys(obj);
    return keys;
};
console.log(listKeys(lesson1));

/* 3 */
const objLength = (obj) => {
    const keys = Object.keys(obj);
    return keys.length;
};
console.log(objLength(lesson1));

/* 4 */
const listValues = (obj) => {
    const values = Object.values(obj);
    return values;
};
console.log(listValues(lesson1));

/* 5 */
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

/* 6 */
const allLessonsStudents = (obj) => {
    let total = 0;
    const values = Object.values(obj);
    values.forEach((lesson) => {
        total += lesson.numeroEstudantes;
    });
    return total;
};
console.log(allLessonsStudents(allLessons));

/* 7 */
const getKeyValueByNumber = (obj, number) => {
    const values = Object.values(obj);
    const value = values[number];
    return value;
};
console.log(getKeyValueByNumber(lesson1, 0));

/* 8 */
const verifyIfExists = (obj, key, value) => {
    const objValues = Object.entries(obj);
    let exists = false;
    objValues.forEach((objValue) => {
        if (objValue[0] === key && objValue[1] === value) {
            exists = true;
        }
    });
    return exists;
};
console.log(verifyIfExists(lesson1, "turno", "tarde"));