const skills = ["HTML", "CSS", "Javascript", "ReactJS", "NodeJS"];

// Função 1
const tryber = (str) => `Tryber ${str} aqui!`;

// Função 2
const tryberAndSkills = (str) => {
    const tryberName = tryber(str);
    const tryberSkills = skills.sort();

    return (
        `
    ${tryberName}
    Minhas cinco principais habilidades são:
    ` +
        tryberSkills
            .map(
                (skill) => `
    - ${skill}
    `
            )
            .join("") +
        `
    #goTrybe
    `
    );
};

console.log(tryberAndSkills("Carla"));