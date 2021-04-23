/* 
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
*/
'use strict';

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'сложение': 
            return arg1 + arg2;
        case 'вычитание':
            return arg1 - arg2;
        case 'умножение':
            return arg1 * arg2;
        case 'деление':
            return arg1 / arg2;
    }
}
mathOperation(56, 8, 'деление');
