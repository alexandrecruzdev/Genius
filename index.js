const gamePattern = []
const userChoices = []
const buttonColors = ["green","red","yellow","blue"]
let i=0;
let segundo =100;
let acertou = false


function reset() {
    userChoices.splice(0,gamePattern.length)
}

function compare() {
    let igual=1

    for(i=0;i<gamePattern.length;i++) {
        if(gamePattern[i] == userChoices[i]) {
            igual =1
        } else {
            igual =0
        }


    }

    if(igual == 1) {
        return true
    } else {
        return false
    }
}

function nextLevel() {
    
    reset();
    gamePattern.push(buttonColors[Math.floor(Math.random()*4)])
    $('.start').text(`Level ${gamePattern.length}`)

    gamePattern.forEach(cor => {
        setTimeout(function() {
            let Sound = new Audio (`${cor}.mp3`)
            Sound.play()
            $(`.${cor}`).fadeIn(100).fadeOut(100).fadeIn(100)
        },segundo+=100)
    })

       
    
}

function getUserChoices() {
    $('button').on("click",function(){
        let Sound = new Audio (`${this.id}.mp3`)
         Sound.play()
        userChoices.push(this.id)
        $(`.${this.id}`).fadeIn(100).fadeOut(100).fadeIn(100)
        console.log(this.id)
       
    })
}



function exec() {
    
    if(compare() == true) {
        nextLevel();
    } else {
        
    }
}

let gameOver = false;
let wrongSound = new Audio('wrong.mp3')

$(".start").on("click",function() {
    
    setInterval(function() {
        if((compare() == true ) && gamePattern[gamePattern.length] === userChoices[gamePattern.length]) {
            nextLevel();
        } else if( gamePattern[gamePattern.length] != userChoices[gamePattern.length-1]) {
            
            wrongSound.play()
            wrongSound = new Audio('')
            $('body').css("background-color",'rgb(116, 16, 16)')
           $(".start").text("Game Over, Reload the page to try again!")
           
        }

       
        

       
        
    },1)

    exec();
    getUserChoices();
})

















