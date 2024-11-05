// variables to target HTML elements
const parentElem = document.querySelector(".bottom-section");
const correctAns = document.querySelector(".correct-ans");
const wrongAns = document.querySelector(".wrong-ans");
const finalScore = document.querySelector(".score");

// variables to update score and end quiz
let score = 0;
let wrong = 0;
let NumberOfClicks = 0;

// core functionality
parentElem.addEventListener("click", function (e) {
  if (e.target.classList.contains("correct")) {
    e.target.parentElement.parentElement.classList.add("filter");
    score++;
    correctAns.textContent = score;
    NumberOfClicks++;
  } else{
    if(e.target.classList.contains("wrong")){
      e.target.parentElement.parentElement.classList.add("filter")
      wrong++;
      wrongAns.textContent = wrong;
      NumberOfClicks++;
    }
  }
  if(NumberOfClicks === parentElem.children.length){
    let scoreInPercentage = (score / parentElem.children.length)* 100;
      finalScore.classList.add("customClass");
      finalScore.textContent = `${scoreInPercentage}%`
      parentElem.style.display = "none";
  }

})

// parentElem.addEventListener("click", function (e){
//   e.preventDefault();
//   NumberOfClicks++;
//   if(e.target.classList.contains("correct")){
//      e.target.parentElement.parentElement.style.display = "none";
//     score++;
//     correctAns.textContent = score;

//   } else {
//     wrong++;
//      e.target.parentElement.parentElement.style.display = "none";
//        console.log(e.target.parentElement.parentElement);
//     wrongAns.textContent = wrong;
//   }
//   if (NumberOfClicks === parentElem.children.length) {

//     endQuiz();
//   }
// })
// function endQuiz (){
//   let scoreInPercentage = (score / parentElem.children.length)* 100;
//   finalScore.classList.add("customClass");
//   finalScore.textContent = `${scoreInPercentage}%`
//   quizSection.style.display = "none";
// }
// 