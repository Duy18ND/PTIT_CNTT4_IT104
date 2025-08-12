//Tạo interface Animal
interface Animal11 {
    //Thuộc tính
    name: string,
    age: number,
    category: string | number | boolean,

    //Phương thức
    sound():string,
    getDetail():string,
    move():string,
    feed():string,
}

//Tạo abstruct class Animal
abstract class Animal1 implements Animal11{
    name: string;
    age: number;
    category: string | number | boolean;
    constructor(name: string, age: number, category: string | number | boolean){
        this.name = name;
        this.age = age;
        this.category = category;
    }

    sound():string{
        return``;
    }

    getDetail():string {
        return ``
    }

    move(): string {
        return ``
    }

    feed(): string {
        return ``
    }
} 

//Tạo các class con kể thừa class Animal11

//Tạo thuộc tính cho thú có vú
class Mammal extends Animal1{
    //Chuyển về private (đóng gói)
    private furColor: string;
    constructor(name: string, age: number, furColor: string) {
        super(name,age,furColor);
        this.name = name;
        this.age = age;
        this.furColor = furColor
    }

    move():string{
        return `Phuong thức di chuyển của động vật có vũ`
    }
    getFurColor():string{
        //Lấy màu lông của loài có vú
        return ` Màu lông của loài ${this.name} là: ${this.furColor}`;
    }
}

//Tạo thuộc tính cho loài chim
class Bird extends Animal1{
    //Chuyển về private (đóng gói)
    private wingSpan: number;

    constructor(name: string, age: number, wingSpan: number) {
        super(name, age, wingSpan);
        this.name = name;
        this.age = age;
        this.wingSpan = wingSpan;
    }
    
    move():string {
        return ` Phương thức di chuyển của loài chim`;
    }
    getWingpan():string{
        //Lấy thông tin sải cánh của loài chim
        return ` Sải cánh của loài ${this.wingSpan}`;
    }
}

//Tạo thuộc tính cho loài bò sát
class Reptile extends Animal1{
    //Chuyển về private (đóng gói)
    private venomous: boolean;
    constructor(name: string, age: number, venomous: boolean){
        super(name, age, venomous);
        this.name = name;
        this.age = age;
        this.venomous = venomous;
    }

    move(): string {
        return `Phuong thức di chuyển vủa bò sát`;
    }
    getVenomous():string{
        //Lấy thông tin loài bò sát đó có độc hay không
        return ` Loài bò sát ${this.name} có độc không: ${this.venomous}`;
    }
}


//TÍNH ĐA HÌNH
const animal: Animal11[] = [
    new Bird("Black KITE",2,3),
    new Reptile("Rocodai",2,true),
    new Mammal("DOG", 2, "Red"),
];
//Gọi phương thức
animal.forEach(item => {
    console.log(item.move());
});

//In thông tin của loài có lông
const new_animal = new Mammal("Con HELL", 1, "PINK");
console.log(new_animal.getFurColor());
