// import functions and grab DOM elements
const btn1 = document.getElementById('shell1-btn');
const btn2 = document.getElementById('shell2-btn');
const btn3 = document.getElementById('shell3-btn');

const shell1 = document.getElementById('shell1');
const shell2 = document.getElementById('shell2');
const shell3 = document.getElementById('shell3');

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

// let state
let wins = 0;
let losses = 0;
// set event listeners 
btn1.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');

    const randomShell = Math.ceil(Math.random() * 3);
    if (randomShell === 1) {
        shell1.classList.add('reveal');
        wins++;
    } else if (randomShell === 2) {
        shell2.classList.add('reveal');
        losses++;
    } else {
        shell3.classList.add('reveal');
        losses++;
    }
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});

btn2.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');

    const randomShell = Math.ceil(Math.random() * 3);
    if (randomShell === 1) {
        shell1.classList.add('reveal');
        losses++;
    } else if (randomShell === 2) {
        shell2.classList.add('reveal');
        wins++;
    } else {
        shell3.classList.add('reveal');
        losses++;
    }
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});

btn3.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');

    const randomShell = Math.ceil(Math.random() * 3);
    if (randomShell === 1) {
        shell1.classList.add('reveal');
        losses++;
    } else if (randomShell === 2) {
        shell2.classList.add('reveal');
        losses++;
    } else {
        shell3.classList.add('reveal');
        wins++;
    }
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
