/*
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
*/

'use strict';
/**
 * Функция складывает два числа
 */
function sumNumbers(a, b) {
    return a + b;
}
/**
 * Функция вычитает два значения
 */
function subNumbers(a, b) {
    return a - b;
}
/**
 * Функция умножает два числа
 */
function mulNumbers(a, b) {
    return a * b;
}
/**
 * Функция делит два числа
 */
function divNumbers(a, b) {
    return a / b;
}

sumNumbers(23, 7);
subNumbers(100, 20);
mulNumbers(25, 2);
divNumbers(72, 9);
