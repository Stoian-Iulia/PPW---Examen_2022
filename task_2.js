console.log("Задание 1")
const arr= [1, 2, 3, 4];

//1 способ - самый простой/примитивный способ вывода
console.log("---Способ 1")

for (let i = 0; i < arr.length; i++) {
    console.log( arr[i] );
  }


//2 способ
console.log("---Способ 2")

let index = 0;
while (index < arr.length) {
    index++
}
console.log(arr);



//3 способ
console.log("---Способ 3")

index = 0;
do {
    index++
}while (index < arr.length);
console.log( arr );


//4 способ
console.log("---Способ 4")

for (let num of arr) {
    
    console.log( num ); 
}


//5 способ
console.log("---Способ 5")

arr.forEach(console.log);


//6 способ
console.log("---Способ 6")

let newArr = arr.map(item => item + 1);
console.log(newArr);