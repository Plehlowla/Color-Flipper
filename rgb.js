const rgb = ['red','green','blue'];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    let rgbColor = rgb[getRandomNumber()];
    
    color.textContent = rgbColor;
    document.body.style.backgroundColor = rgbColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * rgb.length)
}