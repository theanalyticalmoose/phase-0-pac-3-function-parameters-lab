function introduction(name) {
    return `Hi, my name is ${name}.`;
}
console.log(introduction("John"));  // Outputs: "Hi, my name is John."

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("John", "JavaScript"));  // Outputs: "Hi, my name is John and I am learning to program in JavaScript."

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional("John"));  // Outputs: "Hi, my name is John and I am learning to program in JavaScript."
