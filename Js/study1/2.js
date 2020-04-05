let a = 1;
const b = 2;

console.log(a+b);

//논리연산자 && || !
//값이 있는건 대충 true 로 쳐서 문자열 등에 !를 붙이면 false 가 나옴

const c = "kala";
console.log(!c);

if(0){
    console.log("fasd");
}

//&&
console.log("aa"&&"bb");
console.log("aa"||"bb");
//and 나 or 을 검사할때 어떤갑이 찍히는지를 이용해서 로딜여부 확인하는 그런거 생각해보자

//===

const aa = 10;
const bb = "10";

console.log(aa==bb);
console.log(aa===bb);
//===이 타입까지 검사.
//같지 않다는 !==

const aaa = "김김김"
const bbb = "김샷건"

console.log(`안녕하세요 ${aaa} 입니다.`);