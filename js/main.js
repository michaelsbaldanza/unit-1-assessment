const adder = document.getElementById('plus');
const subtractor = document.getElementById('minus');

let ans = document.getElementById('answer');
let addend = document.getElementById('summand');

adder.addEventListener('click', adding);

subtractor.addEventListener('click', subtracting);

function adding () {
    let output =  parseInt(ans.innerHTML, 10) + parseInt(addend.value, 10);
    ans.innerHTML = output;
};

function subtracting () {
    let output = parseInt(ans.innerHTML, 10) - parseInt(addend.value, 10);
    ans.innerHTML = output;
};