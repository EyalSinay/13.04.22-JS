// // 1:
// const doubleValues = arr => {
//     const newArr = arr.map(x => {
//         return 2 * x;
//     });
//     return newArr;
// }
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(doubleValues(arr1));


// // 2:
// const onlyEvenValues = arr => {
//     const newArr = [];
//     arr.forEach(x => {
//         if (x % 2 !== 0) {
//             newArr.push(x);
//         }
//     });
//     return newArr;
// }
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(onlyEvenValues(arr2));


// // 3:
// const showFirstAndLast = arr => {
//     const objStrArr = {};
//     arr.forEach((element, index) => {
//         if (typeof element === "string"){
//             objStrArr[index] = element;
//         }
//     })
//     const objStrKeys = Object.keys(objStrArr);
//     const minKey = Math.min(...objStrKeys);
//     const maxKey = Math.max(...objStrKeys);

//     return [objStrArr[minKey], objStrArr[maxKey]];
// }
// const arr3 = [212, "ooo", 876876, "876", 544, "hhh", 768, "yeh!"];
// console.log(showFirstAndLast(arr3));


// 4: