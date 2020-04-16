// ES6 비동기
// promise
//async await
//  예전엔 엄청 더럽게 했다고 한다.

// const myPromise = new Promise ((resolve, reject) => {
//     //resolve = 성공했을때
//     //reject = 실패했ㅇㄹ때
//     setTimeout (()=>{
//         reject(new Error());
//     }, 1000);
// });
//
// myPromise.then(n=> {
//     console.log(n);
// })
//     //reject 일때는 catch 로 잡아준다.
// .catch(error=>{
//     console.log(error);
// })

const increaseAndPrint = (n) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const value = n+1;
            if (value === 5) {
                const error = new Error();
                error.name = "에러";
                // 에러의 이름을 정해준다.
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
};

increaseAndPrint (0).then(number=>{
    console.log(`rs: ${number}`);
});

increaseAndPrint (0)
    .then(number=> increaseAndPrint(number))
    .then(number=> increaseAndPrint(number))
    .then(number=> increaseAndPrint(number))
    .then(number=>  increaseAndPrint(number))
    .then(number=> console.log(number))
    .catch(error => {
        console.log(error);
    });