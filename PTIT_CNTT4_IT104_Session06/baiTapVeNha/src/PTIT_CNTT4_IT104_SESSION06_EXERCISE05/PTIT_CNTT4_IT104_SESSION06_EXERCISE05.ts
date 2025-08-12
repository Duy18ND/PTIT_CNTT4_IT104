interface ChangeSpeed {
    speedUp(value: number): void;
    slowDown(value: number): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor(speed: number = 0) {
        this.speed = speed;
    }

    speedUp(value: number): void {
        this.speed += value;
        console.log(`Tang toc do: ${this.speed} km/h`);
    }

    slowDown(value: number): void {
        this.speed = Math.max(0, this.speed - value);
        console.log(`Giam toc do: ${this.speed} km/h`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`Dung lai: ${this.speed} km/h`);
    }
}

const myVehicle = new Vehicle();

myVehicle.speedUp(40);
myVehicle.slowDown(20);
myVehicle.stop();