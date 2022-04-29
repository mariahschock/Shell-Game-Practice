// import functions and grab DOM elements
const btn1 = document.getElementById('shell1-btn');
const btn2 = document.getElementById('shell2-btn');
const btn3 = document.getElementById('shell3-btn');

const shell1 = document.getElementById('shell1');
const shell2 = document.getElementById('shell2');
const shell3 = document.getElementById('shell3');
// let state
let wins = 0;
let losses = 0;
// set event listeners 
btn1.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');

    
});

btn2.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
});

btn3.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
