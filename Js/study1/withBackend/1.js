//콜백
//promise
//ES6(2015)
//async await
//ES8 (2017)

const sleep = ms => {
    new Promise(resolve=> {
        setTimeout(()=> {
            console.log("ㅎㅇ1");
            resolve();
        }, ms);
    });
};
//문법을 모르겠다 나중에 찾아서 확인
const process = async() => {
    console.log("ㅎㅇ2");
    await sleep (1000);
    console.log("반갑");
};
//가존의 promise 를 간단히 바꾼 것.
process();