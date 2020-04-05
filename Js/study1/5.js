const my1 = {
    name: "ㄱㅇㅇ",
    age: 23,
    home: "ddm"
};

console.log(my1.home);

const myPro = (my) => {
    console.log(my.home);
    console.log(my.age);
    console.log(my.name);
};

const myPro2 = (my) => {
    const {name, age, home} = my;

    console.log(home);
    console.log(age);
    console.log(name);
};

const myPro3 = ({name, age, home}) => {
    console.log(home);
    console.log(age);
    console.log(name);
};

//비구조화- 분해해서 가져온다.
//props 가 대체 뭔지 알아보자. 거기서 이런 식으로 가져온다고 함.

myPro3(my1);