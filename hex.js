const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025

const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const btnColor = document.querySelector('.btn-hero')

btn.addEventListener('click', function(){
    let hexColor = '#';

    for(let i=0;i<6;i++){
        hexColor += hex[getRandomNumber()]

    }

    // added to make the btn color to white and border white
    if(hexColor == '#000000'){
        btnColor.style = "border: 2px solid white; color: white;"
    }
    
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}