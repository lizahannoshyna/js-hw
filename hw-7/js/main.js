// 1
const arr = [120, 56, 283];
arr[2] = 10;
console.log(arr);

// 2 
let arr2 = [1,2,3];
arr2[3] = "4";
console.log(arr2);

// 3
let arr3 = [10,20,30,40,50,60,70,80,90];
let sum = 0;
for(let num of arr3){
    sum += num;  // sum = sum + num;
}
console.log(sum);

//4
let arr4 = [0,1,2,3,4]
for(let num1 of arr4){
    console.log(num1)
}

//5
let arrString = ['ab', 'abcde', 'abc', 'abcdefg', 'abcdefghijk'];
for(let numString of arrString){
    if(numString.length >= 5){
        console.log(numString);
    }
}

//6
let arrMax = [0,1,2,3,4,5,6,7,8,9,10];
let maxNumber = Math.max(...arrMax); // ... - оператор розпакування
console.log(maxNumber);

//7
let arr5 = [0,1,2,3,4,5,6,7,8,9];
for(let num2 of arr5){
    if(num2 % 2 === 0){
        console.log(num2)
    }
}

