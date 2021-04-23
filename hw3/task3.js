const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (item) {
    console.log(`Цена со скидкой на продукт ${item.id} :
    ${item.price - item.price * 15 / 100}`);
});
