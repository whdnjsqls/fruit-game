container = document.querySelector(".container")
box = document.querySelector(".fruit-box")
scoreElement = document.querySelector(".header-1")
lifeElement = document.querySelector(".header-2")
fruitSpeedElement = document.querySelector(".fruit-speed")
timerElement = document.querySelector(".timer")

fruits = [];
// fruits = [사과1, 사과2, 사과3, ...]

speed = 20
fruitSpeed = 1
maxFruitSpeed = 10
score = 0
life = 3;
timerKey = null;
time = 2000;

timerElement.innerText =  `과일생성 속도: ${(time/1000).toFixed(2)}`
fruitSpeedElement.innerText = `과일속도: ${fruitSpeed.toFixed(2)}`

// 사용자가 html화면에서(document) 키보드를 누르면 일어나는
// 행동을 정의 하는 코드 START
document.addEventListener('keydown',function(event){   
    console.log(box.offsetLeft)
    if(event.code === "ArrowRight"){
    
        if(box.offsetLeft + speed > 590){            
            return;
        }
        box.style.left = box.offsetLeft + speed  + "px"    
    }

    if(event.code === "ArrowLeft"){      
        if(box.offsetLeft - speed < 0){
            return;
        }             
        box.style.left = box.offsetLeft - speed  + "px"        
    } 

})
// 사용자가 html화면에서(document) 키보드를 누르면 일어나는
// 행동을 정의 하는 코드 END

// 과일을 만드는 코드 작성 START
// box.innerText = 290
// 아 이건 과일을 만드는 함수구나.
function createFruit(){
    fruit = document.createElement('div');
    fruit.classList.add('fruit')
    fruit.style.left = `${Math.random() * (container.offsetWidth - 30)}px`;
    fruit.style.top = "0px"
    container.appendChild(fruit)
    fruits.push(fruit)
}
// 과일을 만드는 코드 작성 END

// 게임 루프 START
// 게임루프 로직이 필요한 이유는 
// 매 프레임마다 -> 사과가 떨어지는것을 표현하기 위해서
// 사과가 떨어지다가 땅에 닿거나 과일박스에 닿을때 충돌 처리를 하기 위해 존재.
function gameLoop(){
    for(let i = fruits.length-1; i>=0; i--){
       fruit = fruits[i];
       let fruitY = parseInt(fruit.style.top, 10);
       let fruitX = parseInt(fruit.style.left, 10);
       fruitY = fruitY + fruitSpeed
       fruit.style.top = fruitY + "px" 
    
       // 사과박스 충돌
       if(fruitY + 34 >= box.offsetTop
         && fruitY + 34 <= box.offsetTop + 60
         && fruitX >= box.offsetLeft - 30
         && fruitX <= box.offsetLeft +  box.offsetWidth
       ){
        container.removeChild(fruit)
        fruits.splice(i, 1)
        score += 10;
        scoreElement.innerText = `${score}점`
        if(score % 100 === 0){
            fruitSpeed += 0.2;
            fruitSpeedElement.innerText = `과일속도: ${fruitSpeed.toFixed(2)}`
            clearInterval(timerKey)
            if( time > 500){
                time -= 200
                timerElement.innerText =  `과일생성 속도: ${(time/1000).toFixed(2)}`
            }
            timerKey = createFruitsInterval(time)
        }
       }

       // 컨테이너 충돌
       if(fruitY + 34 >= container.offsetHeight){
        container.removeChild(fruit)
        fruits.splice(i, 1)
        life--;
        lifeElement.innerText = `${life}생명`
        if(life <= 0){
            alert(`아쉽게 되었네요 게임이 끝났습니다😭😭, 총점: ${score}`)
            setTimeout(() => {
                window.location.reload();
            }, 0);
            return;
        }        
       }
    }
    requestAnimationFrame(gameLoop)
}
// 게임 루프 END

// 1초마다 과일 생성
// setInterval(createFruit, 2000); // 1초마다 과일을 생성하는 코드
// setTimeout(createFruit, 1000);

function createFruitsInterval(time){
    key = setInterval(createFruit, time); 
    return key; 
}
timerKey = createFruitsInterval(time)

// 게임 시작
gameLoop()






