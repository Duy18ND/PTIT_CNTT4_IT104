function partialUpdate<T>(obj: T, updates: Partial<T>): T {
    return { ...obj, ...updates };
}

const person1 = { name: "Duy", age: 30, job: "Developer" };

console.log(partialUpdate(person1, { age: 31 }));

console.log(partialUpdate(person1, { name: "Hoa", job: 'Designer' }));

