const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
/* Тут я подсмотрела...
    
    *** Мой изначальный вариант, где была ошибка: не учитывалось условие;
        не до конца поняла, как надо было сделать правильно ***

    let newProducts = products.filter(function(item) {
        for (let ph in item) {
            if (item["photos"] && ph.length > 0) {
                return true;
            }
        }
    })
    console.log(newProducts);

    *** Вот вариант, который работает, но он не универсальный и не лаконичный ***

    for (let i = 0; i < products.length; i++) {
        if (products[i].photos !== undefined && products[i].photos.length > 0) console.log(products[i]);
    }

*/

// Дальше этого момента не смотрела
let newProducts = products.filter(item => "photos" in item && item.photos.length > 0);
console.log(newProducts);


let sortedProducts = products.sort(function(a, b) {
    if (a.price > b.price) {return 1;}
    if (a.price < b.price) {return -1;}
    return 0;
});
console.log(sortedProducts);
