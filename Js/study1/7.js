// for(let i = 1; i<=9; i++){
//     for(let j = 1; j<=9; j++){
//         console.log(`${i}x${j}=${i*j}`);
//     }
// }

//구구단
//
// const names = ["ㄱㅇㅇ", "ㅁㄴㄷ", "ㅊㅈㅇ", "ㅌㅈㅇ"];
//
// for (let i= 0; i<names.length; i++){
//     console.log(names[i]);
// }
//
// names.map(name => console.log(name));
// //미래에 배울 배열의 내장함수
//
// for (let name of names){
//     console.log(name);
// }
// //안씀
//
// const myProfile = {name: "ㄱㅇㅇ", age:24, home:"ddm"};
//
// for (let i in myProfile){
//     console.log((`${i}: ${myProfile[i]}`));
// }
//포 인 문은 객체의 키를 반환한다.

//배열내장함수

// //1.forEach
// const names = ["ㄱㅇㅇ", "ㅁㄴㄷ", "ㅊㅈㅇ", "ㅌㅈㅇ"];
//
// names.forEach((s =>console.log(s)));
//
// //2.map
// //했음
//
// //3. indexOf
// //해당 값이 몇번쨰 원소인지 알려준다.
// console.log(names.indexOf("ㄱㅇㅇ"));
// console.log(names.indexOf("ㅌㅈㅇ"));
//
// //3. findIndex
// //객체형 배열을 찾을 수 있다.
//
// const todos = [
//     {
//         id: 1,
//         text: "html",
//         done: true
//     },
//     {
//         id: 2,
//         text: "css",
//         done: true
//     },
//     {
//         id: 3,
//         text: "JS",
//         done: true
//     },
//     {
//         id: 1,
//         text: "react",
//         done: false
//     }
// ];
//
// const find = todos.find( todo => todo.text ==="JS");
// console.log(find);
//
// const doneTodos = todos.filter(todo => todo.done);
// //이렇게만 해도 true 인걸 가져옴
// //앞에 느낌표 붙이면 false 인걸 가져옴
// console.log(doneTodos);
//
// //concat 배열 두개를 붙임
//
// //
// const num = [1, 2, 3, 4, 5];
//
// //let sum = 0
// //num.foreach(n => sum += n);
//
// let sum = num.reduce((acc, current)=> (acc+=current), 0);
// console.log(sum);
// //합을 구한다.

//퀴즈
const countBiggerThenTen = numbers =>{
    //const filterTry = numbers.filter(number => number >= 10);
    //return filterTry.length;
    let reduceTry = numbers.reduce((acc, current) => {if(current>=10){
        return (acc+=1);
    }else{
        return acc;
    }}, 0)

    console.log(reduceTry);
    return reduceTry;

};
//filter, map, reduce 세가지방법 구현

const count = countBiggerThenTen([
    1, 2, 3, 4, 5, 6, 7, 8., 9, 10, 30, 40, 50, 60
    ]

)