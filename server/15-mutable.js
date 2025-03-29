const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const product = products.find(item => item.id === '🍔');
if (product) {
    myProducts.push(product);
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
    myProducts.push(product[productIndex]);
    products.splice(productIndex, 1);
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//update

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'Delicious burger'
    }
}

const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
if (productIndexV2 !== -1) {
    productsV2[productIndexV2] = {
        ...productsV2[productIndexV2],
        ...update.changes
    }
}
console.log("productsV2", productsV2);