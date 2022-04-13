const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];


// 1:
const getNames = arr => arr.map(obj => obj.name);
// console.log(getNames(data));


// 2:
const getBornBefore1990 = arr => {
    return arr.map(obj => {
        const date = new Date(obj.birthday);
        if (date.getFullYear() < 1990) {
            return obj;
        }
    });
}
// console.log(getBornBefore1990(data));


// 3:
const foodCounter = arr => {
    const allFoods = [];
    for (obj of arr) {
        for (meatItem of obj.favoriteFoods.meats){
            allFoods.push(meatItem);
        }
        for (fishItem of obj.favoriteFoods.fish){
            allFoods.push(fishItem);
        }
    }
    const foodObj = {};
    allFoods.forEach((value, index) => {
        if (!foodObj[value]) {
            foodObj[value] = 1;
        } else {
            foodObj[value] += 1;
        }
    });
    return foodObj;
}
console.log(foodCounter(data));