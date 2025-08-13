function object<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Test thử
const person = { name: "Alice", age: 25 };
const job = { title: "Developer", salary: 2000 };

const merged = object(person, job);
console.log(merged);

console.log(merged.name); 
console.log(merged.title); 
