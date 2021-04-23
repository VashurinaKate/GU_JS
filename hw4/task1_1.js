'use strict';

// ES5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    return this.price * 75 / 100;
}

// ES6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        return this.price * 75 / 100;
    }
}
