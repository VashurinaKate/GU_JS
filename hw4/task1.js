'use strict';

function Number(inputNumber) {
    this.inputNumber = inputNumber;
}

Number.prototype.modifyNumber = function() {
    if (this.inputNumber > 999 || this.inputNumber < 0) {
        console.log('Вы ввели некорректное число');
        return;
    } else {
        this.units = Math.floor(this.inputNumber % 10);
        this.tens = Math.floor(this.inputNumber / 10 % 10);
        this.hundreds = Math.floor(this.inputNumber / 100 % 10);
    }
    return console.log(`
        Единицы: ${this.units};
        Десятки: ${this.tens};
        Сотни: ${this.hundreds}
    `);
}
const userNumber = new Number(+prompt("Введите число от 0 до 999"));
console.log(userNumber.modifyNumber());
