const colors = ['green', 'red', 'rgba(133,22,200)','#f15025']

const color = document.querySelector('.color')

// btn.addEventListener('click', function() {
//     // get random number between 0 - 3 colors[#]
//     // const randomNumber = Math.floor(Math.random() * 3) + 1;
//     const randomNumber = getRandomNumber();
//     // console.log(randomNumber);

//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];

// })

var autoFunction = (function auto() {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];


    // Take 1

    // var i;
    // for(i=0;i<50;i+=1){
    //     (function (index){
    //         setTimeout(function () {
    //             return auto();
    //         }, 4);
    //     })(i);
    // }

    // Take 2
    // function thinkBeforeSpeaking(index) {
    //     setTimeout(function () {
    //         return auto();
    //     }, 400)
    // }

    // var i;

    // for(i=0;i<10;i+=1){
    //     thinkBeforeSpeaking();
    // }


});

function getRandomNumber() {
    // return Math.floor(Math.random() * colors.length);
    return Math.floor(Math.random() * colors.length);
}

autoFunction();
autoFunction();

var anotherAutoFunction = autoFunction();