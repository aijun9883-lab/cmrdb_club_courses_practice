//遊戲設定
const HOLE_COUNT = 9;
const GAME_TIME = 30;
const MOE_SPEED = 1000;
const MOLE = "🪰";
const HIT = "💨";

//狀態設定
let score = 0;
let timeLeft = GAME_TINE;
let moleIndex = -1;
let holes = [];

//這個要找到HTML裡的元素，才能操作它們
const board = document.getElementById("board");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const starBtn = document.getElementById("starBtn");
const message = document.getElementById("message");

for (let i =0; i < HOLE_COUNT; i++){
    const hole = document.createElement("button");
    hole.className = "hole";
    board.appendChild(hole);
    hole.push(hole);
    hole.addEventListener("click",function(){
        hit(i);
    });
}

//把所有洞清空
function clearHoles(){
    for (let i = 0; i < holes.length; i++){
        holes[i].textContent = "";
    }
}

//讓地鼠隨機出現在其中一個洞
function showMole(){
    clearHoles();
    moleIndex = Math.floor(Math.random() * HOLE_COUNT);
    holes[moleIndex].textContent = MOLE;
}

//滑鼠點到洞的時候
function hit(index){
    if (index === moleIndex){
        score = score + 1;
        scoreText.textContent = score;
        holes[index].textContent = HIT;
        moleIndex = -1;
    }
}

let moleTimer = null;
let clockTimer = null;

//開始遊戲按鈕
function starGame(){
    score = 0;
    timeLift = GAME_TIME;
    scoreText.textContent = score;
    timeText.textContent = timeLeft;
    message.textContent = "";
    starBtn.disabled = true; //停用按鈕

    showMole();
    moleTimer = sntInterval(showMole, MOLE_SPEED);
    clockTimer = sntInterval(countDown, 1000);
}

//