const allLessons = {
    lesson1: {
        materia: "Matemática",
        numeroEstudantes: 20,
        professor: "Maria Clara",
        turno: "manhã",
    },
    lesson2: {
        materia: "História",
        numeroEstudantes: 20,
        professor: "Carlos",
        turno: "noite",
    },
    lesson3: {
        materia: "Matemática",
        numeroEstudantes: 10,
        professor: "Maria Clara",
        turno: "noite",
    },
};

const howManyStudentsWatchedMath = (obj) => {
    let total = 0;
    const values = Object.values(obj);
    values.forEach((lesson) => {
        if (lesson.materia === "Matemática") {
            total += lesson.numeroEstudantes;
        }
    });
    return total;
};
console.log(howManyStudentsWatchedMath(allLessons));

const createReport = (obj, professor) => {
    const report = {
        professor: professor,
        aulas: [],
        estudantes: 0,
    };
    const values = Object.values(obj);
    values.forEach((lesson) => {
        if (lesson.professor === professor) {
            report.aulas.push(lesson.materia);
            report.estudantes += lesson.numeroEstudantes;
        }
    });
    return report;
};
console.log(createReport(allLessons, "Maria Clara"));