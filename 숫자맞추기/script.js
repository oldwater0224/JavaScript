 
/* 랜덤번호 지정
 유저의 번호 입력 그리고 실행버튼
 만약 유저가 랜덤번호를 맞추면 , 정답처리
 랜덤번호가 입력보다 작으면 down
 반대일 경우는 up
 reset 버튼의 활성화
 5번의 기회를 사용할 경우 button 비활성화
유저가 1~100 밖에 번호를 입력할 경우 알림 , 기회는 비차감
같은 숫자를 입력할 경우 알림 , 기회 비차감 */ 

let computerNum = 0
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play);

function pickRandomNum(){
  computerNum =Math.floor (Math.random() * 100 )+1; // Math.radom 0~1 사이에 랜덤한 숫자를 뽑을 수 있게 도와주는 함수
  console.log("정답",computerNum);
}
function play(){
  let userValue = userInput.value;
  if(userValue < computerNum){
    resultArea.textContent = "Up!!"
  }else if(userValue > computerNum){
    resultArea.textContent = "Down!!"
  }else{
    resultArea.textContent = "정답입니다."
    
  }
}
pickRandomNum()