import * as main from "./funciton.js"

class Student {
    User(id, name, age, score){
        this.id = id;
        this.name = name;
        this.age = age;
        this.score = score;
    }

    getAverageScore(){
        const sum = this.score.reduce((a,b) => a +b ,0);
        return sum / this.score.length; 
    }
}

const studentList = [
    new Student("1", "Duy", "18", [1,2,3]),
    new Student("2", "poodle", "20", [4,6,8]),
    new Student("3", "Cho", "12", [9,7,6]),
    new Student("4", "hello", "13", [9,7,2]),
    new Student("5", "hihi", "16", [9,4,6]),
];


