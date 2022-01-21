const colors = ['green', 'red', 'rgba(133,22,200)','#f15025']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    // get random number between 0 - 3 colors[#]
    // const randomNumber = Math.floor(Math.random() * 3) + 1;
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})

function getRandomNumber() {
    // return Math.floor(Math.random() * colors.length);
    return Math.floor(Math.random() * colors.length);
}