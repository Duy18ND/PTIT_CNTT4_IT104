function object(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// Test thử
const person = { name: "Alice", age: 25 };
const job = { title: "Developer", salary: 2000 };
const merged = object(person, job);
console.log(merged);
console.log(merged.name);
console.log(merged.title);
