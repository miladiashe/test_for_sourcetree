// 단축 평가 논리 계산법

// true && true = true
// true && false = false
//true || false = true
// false || true = true

// const dog ={
//     name: "멍멍이"
// };
//
// const getName = animal =>{
//     return animal && animal.name
//     // animal 값이 있으면 뒤 값을 체크해서 뒤 갑ㅈㅅ을 반환한다.
// };
//
// const name = getName();
// console.log(name);

const namelessDog ={
    name: ""
};

const getName = animal =>{
    const name = animal && animal.name

    return name || "이름이없는ㄷㅇ물"


}
const name = getName(namelessDog);
console.log(name);