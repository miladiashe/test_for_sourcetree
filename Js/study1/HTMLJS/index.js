const number = document.getElementById("number");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
//
// console.log(number.innerText);
// console.log(inc.offsetTop);
// console.log(dec.id);

inc.onclick = () =>{
   const current = parseInt(number.innerText, 10);
   number.innerText = current +1;
};

dec.onclick = () =>{
    const current = parseInt(number.innerText, 10);
    number.innerText = current -1;
};