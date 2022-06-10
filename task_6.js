let count = 0;
const buttonMinus = document.getElementById("buttonMinus");
const buttonPlus = document.getElementById("buttonPlus");
const countEl = document.getElementById("count");

const minus = () => {
    if (count > 0) {
        count--;
        buttonPlus.disabled = false;
        countEl.value = count
    } else if (count === 0) {
        buttonMinus.disabled = true;
    }
}

const plus = () => {
    if (count < 9) {
        count++;
        buttonMinus.disabled = false;
        countEl.value = count
    } else if (count === 9) {
        buttonPlus.disabled = true;
    }
}
buttonMinus.onclick = minus;
buttonPlus.onclick = plus;