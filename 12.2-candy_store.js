const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}


// 1:
function getCandy(candyStore, id) {
    return candyStore.candies.find(candiesObj => candiesObj.id === id);
}
// console.log(getCandy(candyStore, "5hd7y"));


// 2:
function getPrice(candyStore, id) {
    const candiesObj = getCandy(candyStore, id);
    return candiesObj.price;
}
// console.log(getPrice(candyStore, "5hd7y"));


// 3:
function addCandy(candyStore, id, name, price) {
    const newObjCandy = { name: name, id: id, price: price, amount: 1 };
    candyStore.candies.push(newObjCandy);
}
// addCandy(candyStore, "2g2g2g", "yoyo", 20);
// console.log(candyStore);


// 4:
function buy(candyStore, id) {
    const price = getPrice(candyStore, id);
    candyStore.cashRegister += price;
    const candiesObj = getCandy(candyStore, id);
    candiesObj.amount --;
}
buy(candyStore, "5hd7y");
console.log(candyStore);