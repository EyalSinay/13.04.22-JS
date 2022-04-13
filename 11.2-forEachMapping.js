// 1:
const doubleValues = arr => {
    const newArr = arr.map(x => {
        return 2 * x;
    });
    return newArr;
}
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(doubleValues(arr1));


// 2:
const onlyEvenValues = arr => {
    const newArr = [];
    arr.forEach(x => {
        if (x % 2 !== 0) {
            newArr.push(x);
        }
    });
    return newArr;
}
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(onlyEvenValues(arr2));


// 3:
const showFirstAndLast = arr => {
    const objStrArr = {};
    arr.forEach((element, index) => {
        if (typeof element === "string"){
            objStrArr[index] = element;
        }
    })
    const objStrKeys = Object.keys(objStrArr);
    const minKey = Math.min(...objStrKeys);
    const maxKey = Math.max(...objStrKeys);

    return [objStrArr[minKey], objStrArr[maxKey]];
}
const arr3 = [212, "ooo", 876876, "876", 544, "hhh", 768, "yeh!"];
console.log(showFirstAndLast(arr3));


// 4:
const vowelCount = str => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const obj = {};
    const arrStr = str.toLowerCase().split('');
    arrStr.forEach(element => {
        if (vowels.includes(element)) {
            if (obj[element]) {
                obj[element]++;
            } else {
                obj[element] = 1;
            }
        }
    });
    return obj;
}
const str1 = "Hello, my name is Eyal";
console.log(vowelCount(str1));


// 5:
const capitalize = str => {
    var newStr = "";
    const arr = [...str].map(x => x.toUpperCase());
    arr.forEach(element => {
        newStr += element;
    });
    return newStr;
}
const str2 = "Hello, my name is Eyal";
console.log(capitalize(str2));


// 6:
const shiftLetters = str => {
    const alphabetLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const alphabetUpperCase = alphabetLowerCase.map(char => char.toUpperCase());
    const alphabet = alphabetLowerCase.concat(alphabetUpperCase);
    const encodedArr = [...str].map(char => {
        if (alphabet.includes(char)){
            let indexCharInAlphabet = alphabet.indexOf(char) > 0 ? alphabet.indexOf(char) : alphabet.length;
            return alphabet[indexCharInAlphabet-1];
        } else {
            return char;
        } 
    })
    const encodedStr = encodedArr.join("");
    return encodedStr;
}
const str3 = "abc, xyz, ABC, XYZ";
console.log(shiftLetters(str3));


// 7:
const swapCase = str => {
    const strArr = str.split("");
    const indexToUp = [0];
    strArr.forEach((element, index) => {
        if (element === " ") {
            indexToUp.push(index + 1);
        }
    });
    const newArr = strArr.map((element, index) => {
        if (indexToUp.includes(index)) {
            // return element.toUpperCase();
            return capitalize(element);
        } else {
            return element;
        }
    });
    return newArr.join("");
}
const str4 = "Hello, my name is Eyal";
console.log(swapCase(str4));