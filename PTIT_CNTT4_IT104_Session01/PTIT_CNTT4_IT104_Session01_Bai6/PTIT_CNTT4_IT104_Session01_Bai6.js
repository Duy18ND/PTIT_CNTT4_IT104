function User(name, age = 18, user = "user"){
    return {
        name: name,
        age: age,
        user: user
    }
}
console.log(User("Duy"));

console.log(User("Duyy",12,"HeHe"));    