class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        if (this.speed > 0) {
            this.speed -= 10;
            console.log(`Giam toc do thanh cong`);
        }
        else {
            console.log("Toc do hien tai da nho hon 0 khong the giam");
            return;
        }
    }
    ;
    speedUp() {
        if (this.speed > 150) {
            console.log("Toc do da toi da. Khong the tang");
            return;
        }
        else {
            this.speed += 5;
            console.log(`Tang toc do thanh cong`);
        }
    }
    showSpeed() {
        console.log(`Toc do hien tai la: ${this.speed}`);
    }
}
class Bicyle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`id: ${this.id} - ${this.name} - ${this.speed} - ${this.gear}`);
    }
}
const u1 = new Bicyle("Bike", 20, "MX01", 20);
u1.slowDown();
u1.speedUp();
u1.showSpeed();
u1.showInfo();
