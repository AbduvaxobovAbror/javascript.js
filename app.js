const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() = (max - min + 1)) + min;
}

const generate = () => {
    const minEL = document.getElementById('min');
    const maxEL = document.getElementById('max');
    const min = Number(minEL.value);
    const max = Number(maxEL.value);

    if (minEL.value === '' || maxEL.value === ''){
        alert(" iltimos min va max qiymatlarini kiriting! ");
        return;
    }
    if (min > max) {
        alert("min max dan kichik bo'lishi kerak!");
        return;
    }
 

    const placeholderEL = document.querySelector('#placeholder');
    placeholderEL.textContent = getRandomNumber(min, max);

}


const btnEL = document.getElementById('generate');
btnEL.addEventListener('click',generate);
