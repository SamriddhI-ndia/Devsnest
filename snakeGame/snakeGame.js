let box=document.querySelector('.box');

const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');

let directions={ x:0, y:0 };
const speed=5;
let lastPaintTime=0;
let snakeArr=[ {x:10,y:10} ];
let food={x:5,y:5};
let score=0;


function main(ctime){
    window.requestAnimationFrame(main);
   
    if((ctime-lastPaintTime)/1000<1/speed){
        return;
    }
   lastPaintTime=ctime;
   startGame();
}

function startGame(){
   
    if(isCollide(snakeArr)){
        gameOverSound.play();
        score=0;
        alert('Game Over! Play Again!');
        directions={ x:0, y:0 };
        snakeArr=[ {x:10,y:10} ];
        score=0;
    }
    function isCollide(){
        for(let i=1;i<snakeArr.length;i++){
            if(snakeArr[i].x==snakeArr[0].x&&snakeArr[i].y==snakeArr[0].y){
                return true;
            }
        }
        if(snakeArr[0].x>=20||snakeArr[0].x<=0||snakeArr[0].y>=20||snakeArr[0].y<=0){
            return true;
        }
        return false;
    }
    if(snakeArr[0].x===food.x&&snakeArr[0].y===food.y){
        foodSound.play();
        score+=1;
        document.querySelector('.score').innerHTML=score;
        setTimeout(()=>{
            document.querySelector('.txt').style.transform="scale(1)";
        },1000);
        document.querySelector('.txt').style.transform="scale(1.3)";
        snakeArr.unshift({x:snakeArr[0].x+directions.x,
                            y:snakeArr[0].y+directions.y});
        
        let a=2;
        let b=18;
        food={x:Math.floor(Math.random()*(b-a)+a),y:Math.floor(Math.random()*(b-a)+a)}
    }

    for(let i=snakeArr.length-2;i>=0;i--){
        snakeArr[i+1]={...snakeArr[i]};
    }
    snakeArr[0].x+=directions.x;
    snakeArr[0].y+=directions.y;

    box.innerHTML="";
   snakeArr.forEach((e,index) => {
        snakeElement=document.createElement('div'); 
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        if(index==0){
            snakeElement.classList.add('head');
            
        }
        else{
            snakeElement.classList.add('snake');
        }
        box.appendChild(snakeElement);
    });

    foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');
    box.appendChild(foodElement);
}


window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    directions={x:0,y:1};
    moveSound.play();
    switch (e.key){
        case "ArrowDown":
            console.log("Down");
            directions.x=0;
            directions.y=1;
            break;
        case "ArrowUp":
            console.log("Up");
            directions.x=0;
            directions.y=-1;
            break;
        case "ArrowLeft":
            console.log("Left");
            directions.x=-1;
            directions.y=0;
            break;
        case "ArrowRight":
            console.log("Right");
            directions.x=1;
            directions.y=0;
            break;
        default:

    }
})