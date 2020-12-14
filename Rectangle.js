class Rectangle {

    constructor(a, b) {

        this.a = a;

        this.b = b;

    }


    isSquare() {
        if (this.a === this.b) {
            return true;
        } else {
            return false;
        }
    }


    getArea() {
        area = this.a * this.b;
        return area;
    }


    getPerimeter() {
        perimeter = this.a * 2 + this.b * 2;
        return perimeter;
    }
}


module.exports = Rectangle;