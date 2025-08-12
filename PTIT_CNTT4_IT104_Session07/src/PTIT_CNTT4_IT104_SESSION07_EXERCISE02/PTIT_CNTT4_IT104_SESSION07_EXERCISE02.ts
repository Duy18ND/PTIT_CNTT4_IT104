class Vehicle{
    protected name: string;
    protected speed: number;
    protected id: string;

    constructor(name: string, speed: number, id: string){
            this.name = name;
            this.speed = speed;
            this.id = id;
    }
    slowDown():void{
        if(this.speed > 0){
            this.speed -= 10;
            console.log(`Giam toc do thanh cong`);   
        }else{
            console.log("Toc do hien tai da nho hon 0 khong the giam");
            return;
        }
    };

    speedUp():void{
        if(this.speed > 150){
            console.log("Toc do da toi da. Khong the tang");
            return;
        }else{
            this.speed += 5;
            console.log(`Tang toc do thanh cong`);
        }
    }
    showSpeed():void{
        console.log(`Toc do hien tai la: ${this.speed}`);
    }
}

class Bicyle extends Vehicle{
    private gear: number;

    constructor(name: string, speed: number, id: string, gear: number){
        super(name, speed, id);
        this.gear = gear;
    }

    showInfo():void{
        console.log(`id: ${this.id} - ${this.name} - ${this.speed} - ${this.gear}`);
    }
}
const u1 = new Bicyle("Bike", 20, "MX01", 20);
u1.slowDown();
u1.speedUp();
u1.showSpeed();
u1.showInfo();