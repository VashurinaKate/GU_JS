/* 
Объявить две переменные a и b и задать им целочисленные произвольные начальные
значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
*/

'use strict';
let a = -4,
    b = 6;

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else if (a < 0 && b >= 0 || a >=0 && b < 0) {
    console.log(a + b);
}