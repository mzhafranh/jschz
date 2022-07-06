export class MesinHitung{
    constructor(){
        this.x = 1;
    }

    add(num){
        this.x += num;
        return this;
    }
    subtract(num){
        this.x -= num;
        return this;
    }
    divide(num){
        this.x /= num;
        return this;
    }
    multiply(num){
        this.x *= num;
        return this;
    }
    squareRoot(){
        this.x = Math.sqrt(this.x);
        return this;
    }
    exponent(num){
        this.x = this.x ** num;
        return this;
    }
    square(){
        this.x = this.x ** 2;
        return this;
    }
    result(){
        console.log(Math.ceil(this.x));
        return this;
    }
}

export const Pi = 3.14;