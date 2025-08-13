function partialUpdate(obj, updates) {
    return Object.assign(Object.assign({}, obj), updates);
}
const person1 = { name: "Duy", age: 30, job: "Developer" };
console.log(partialUpdate(person1, { age: 31 }));
console.log(partialUpdate(person1, { name: "Hoa", job: 'Designer' }));
