const colors = ['green', 'red', 'rgba(133,22,200)','#f15025','white','purple','blue','pink','orange','76F884','#9F72FE','#ADEDBF','#13CA73','#569073','#66D20D']

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
    //     }, 4)
    // }

    // var i;

    // for(i=0;i<100;i+=1){
    //     thinkBeforeSpeaking();
    // }

    // Take 3
    // function waitTimer() {
    //     setTimeout(function() {
    //         auto();
    //     },500)
    // }

    // var i;

    // for(i=0;i<100;i++){
    //     waitTimer()
    // }


    // Take 4
    // var a;
    // a = setInterval(auto, 1000)

    // // clearInterval(a);

    // Take 5
    var counter = 0;

    var i = setInterval(function(){
        auto();

        counter++;
        if(counter === 1) {
            clearInterval(i)
        }
    }, 900)

});

function getRandomNumber() {
    // return Math.floor(Math.random() * colors.length);
    return Math.floor(Math.random() * colors.length);
}

autoFunction();
autoFunction();

var anotherAutoFunction = autoFunction();