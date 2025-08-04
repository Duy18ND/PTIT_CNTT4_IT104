function typeConsole(type = 'log'){
    return `Day la type ${type} cua console`;
}
console.log(typeConsole());
console.error(typeConsole('error'));
console.warn(typeConsole('warn'));