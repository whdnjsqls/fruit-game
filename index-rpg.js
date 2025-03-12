box = document.querySelector(".fruit-box")

x1 = document.querySelector(".character-x").children[0]
x2 = document.querySelector(".character-x-w").children[0]
y1 = document.querySelector(".character-y").children[0]
y2 = document.querySelector(".character-y-h").children[0]

store = document.querySelector(".store")
storeGreet = document.querySelector(".store-greet")


// box.style.backgroundColor = 'green'
// box2 =document.querySelector(".container")
// box2.style.backgroundColor = 'blue'

// 왼쪽 전체 영역에서 우리가 키보드를 누르는것을 감지해야한다.
// 키보드가 눌렸으면 그 눌린 키를 알려줘

// 왼쪽 전체 영역 👉 document
// 우리가 키보드를 누르는것을 감지해 👉 addEventListener("keydown")
// 키보드가 눌렸으면 그 눌린 키를 알려줘 👉  

 document.addEventListener('keydown', function(event) {
    console.log(event.code)
 });


store_x  = store.offsetLeft;
console.log(store_x)
boxPosition_x = box.offsetLeft;
// boxPosition_x = box.offsetLeft + 100;
boxPosition_y = box.offsetTop;
// boxPosition_y = box.offsetTop + 155;

function moveDetector(){
    x_width_position = boxPosition_x + 88
    x1.innerText = `${boxPosition_x} , ${boxPosition_y + 155}`;
    x2.innerText = `${boxPosition_x + 88} , ${boxPosition_y + 155}`;
    y1.innerText = `${boxPosition_x} , ${boxPosition_y}`
    y2.innerText = `${boxPosition_x + 88} , ${boxPosition_y}`
}

moveDetector();


speed = 5;

document.addEventListener("keydown",(e) => {
    // console.log(e.code)
    if(e.code == "ArrowRight"){
        boxPosition_x = boxPosition_x + 5;
        box.style.left = boxPosition_x + "px"
    }
    else if(e.code == "ArrowLeft"){
        boxPosition_x = boxPosition_x - 5;
        box.style.left = boxPosition_x + "px"
    }
    else if(e.code == "ArrowUp"){
        boxPosition_y = boxPosition_y - 5;
        box.style.top = boxPosition_y + "px"
    } else if(e.code == "ArrowDown"){
        boxPosition_y = boxPosition_y + 5;
        box.style.top = boxPosition_y + "px"
    }
    moveDetector();

    if(x_width_position >= store_x){
        storeGreet.style.display = "block"
    }else{
         storeGreet.style.display = "none"
    }
})

// document.addEventListener("keydown", (e) => {
//     console.log(e.code) 
// })