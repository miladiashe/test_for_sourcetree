const object = {a:1, b:2};
console.log(object.a);

const{ a } = object;
console.log(a);
//비구조화 이렇게도 가능

const myProf = {
    name:"rdd",
    age:"12",
    home:"ddm"
};

const myp = ({home}) =>{
    console.log(home);
};

myp(myProf);

//여기서도 기본값 설정가능

const array = [1,2,3,4,5];
const[one, two, ...spread] = array;
console.log(spread);
//배열의 비구조화. ...변수명 하면 뒤 값 전부가 그 변수에 모인다.