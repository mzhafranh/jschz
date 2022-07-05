class CarFactory{
    constructor(){
        this.cars = [];
    }

    produce(amount){
        for (let i = 0; i < amount; i++) {
            let wheel = new Tyre((250 + Math.floor(Math.random() * 10)), Math.floor(Math.random() * 10) + 2);
            let randomizeType = Math.floor(Math.random() * 10);
            if ((randomizeType % 2) === 0){
                var newCar = new Avanza(wheel, 4, 4);
            } else {
                var newCar = new Agya(wheel, 6, 4);
            }
            this.cars.push(newCar);
        }
    }

    showList(){
        function describeCar(item, index){
            console.log(`Car #${index + 1}
    Engine Number: ${item.getEngineNumber()}
    Type: ${item.getType()}
    Produced Year: ${item.getYear()}
    Guarantee: ${item.getGuarantee()} years
    Seat: ${item.getSeat()}
    Door: ${item.getDoor()}
    ${item.tyre.describeTyre()}
    `)}

        this.cars.forEach(describeCar);
    }
    
    checkCarPerYear(year){
        let amount = 0;
        function checkYear(item){
            if(item.getYear() === year){
                amount++;
            }
        }
        this.cars.forEach(checkYear);
        console.log(`Amount of cars produced on year ${year} is ${amount}`);
    }

    checkGuaranteeYear(year){
        function checkGuarantee(item, index){
            if((item.getGuaranteeEnd()) < year){
                console.log(`Car #${index + 1} is no longer guaranteed
this car guarantee ended on ${item.guaranteeEnd}.
`)
            }
        }
        this.cars.forEach(checkGuarantee);
    }

    /*
    addYearRandomly(){
        function addYear(item){
            item.setYear(item.getYear + Math.floor(Math.random() * 10));
        }
        this.cars.forEach(addYear);
    }
    */

}

class Car{
    constructor(tyre, seat, door){
        const { v4: uuidv4 } = require('uuid');
        this.engineNumber = uuidv4(); 
        this.tyre = tyre;
        this.seat = seat;
        this.door = door;
        this.year = 2015 + Math.floor(Math.random() * 10);
    }

    getEngineNumber(){
        return this.engineNumber;
    }

    getSeat(){
        return this.seat;
    } 

    getDoor(){
        return this.door;
    }

    getYear(){
        return this.year;
    }

    setYear(year){
        this.year = year;
    }
}

class Tyre{
    constructor(radius, spokes){
        this.radius = radius;
        this.spokes = spokes;
    }

    describeTyre(){
        return `Tyre specification:
        radius: ${this.radius}
        spokes: ${this.spokes}`
    }
}

class Avanza extends Car{
    constructor(tyre, seat, door){
        super(tyre, seat, door);
        this.type = "Avanza";
        this.guarantee = 3;
        this.guaranteeEnd = this.getYear() + this.guarantee;
    }
    getType(){
        return "Avanza";
    }

    getGuarantee(){
        return this.guarantee;
    }

    getGuaranteeEnd(){
        return this.guaranteeEnd;
    }

}

class Agya extends Car{
    constructor(tyre, seat, door){
        super(tyre, seat, door);
        this.type = "Agya";
        this.guarantee = 5;
        this.guaranteeEnd = this.getYear() + this.guarantee;
    }
    getType(){
        return "Agya";
    }

    getGuarantee(){
        return this.guarantee;
    }

    getGuaranteeEnd(){
        return this.guaranteeEnd;
    }
}

let cf = new CarFactory();
cf.produce(10);
cf.showList();
cf.checkCarPerYear(2022);
cf.checkGuaranteeYear(2025);
