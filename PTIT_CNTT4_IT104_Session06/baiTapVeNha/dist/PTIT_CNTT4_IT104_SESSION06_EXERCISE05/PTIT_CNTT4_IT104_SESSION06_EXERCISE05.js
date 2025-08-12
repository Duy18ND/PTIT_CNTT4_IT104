class Vehicle {
    constructor(speed = 0) {
        this.speed = speed;
    }
    speedUp(value) {
        this.speed += value;
        console.log(`Tang toc do: ${this.speed} km/h`);
    }
    slowDown(value) {
        this.speed = Math.max(0, this.speed - value);
        console.log(`Giam toc do: ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Dung lai: ${this.speed} km/h`);
    }
}
const myVehicle = new Vehicle();
myVehicle.speedUp(40);
myVehicle.slowDown(20);
myVehicle.stop();
