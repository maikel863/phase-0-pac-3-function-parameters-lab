function introduction(name) {

    return `Hi, my name is ${name}.`
}
console.log(introduction("Josh"));

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introduction("Josh", "Java"));

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
