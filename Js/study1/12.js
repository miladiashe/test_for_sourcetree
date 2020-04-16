const sleep = (ms) =>{
    return new Promise( resolve => setTimeout(resolve, ms));
};

const process = async() => {
    console.log("ㅎㅇ");
    await sleep(2000);
    console.log("반갑");
};

process();
//async await 방법. promise 를 간단히 쓰게 해준다.