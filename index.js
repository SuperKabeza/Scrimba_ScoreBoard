let scoreA = 0;
let scoreB = 0;

let scoreAEl= document.getElementById("text-visualizer-A");
let scoreBEl= document.getElementById("text-visualizer-B");

function eliminarClasses(){
    scoreAEl.classList.remove("ganando", "empate", "perdiendo")
    scoreBEl.classList.remove("ganando", "empate", "perdiendo")    
}

function whoIsWinning() {
    if(scoreA > scoreB){
        eliminarClasses()
        scoreAEl.classList.add("ganando")
        scoreBEl.classList.add("perdiendo")
    }else if(scoreB > scoreA){
        eliminarClasses()
        scoreBEl.classList.add("ganando")
        scoreAEl.classList.add("perdiendo") 
    }else{
        eliminarClasses()
        scoreAEl.classList.add("empate")
        scoreBEl.classList.add("empate")
    }
};

function clickedA1() {
    scoreAEl.textContent = scoreA +=1
    whoIsWinning()
};
function clickedA2() {
    scoreAEl.textContent = scoreA +=2
    whoIsWinning()
};
function clickedA3() {
    scoreAEl.textContent = scoreA +=3
    whoIsWinning()
};
function clickedB1() {
    scoreBEl.textContent = scoreB +=1
    whoIsWinning()
};
function clickedB2() {
    scoreBEl.textContent = scoreB +=2
    whoIsWinning()
};
function clickedB3() {
    scoreBEl.textContent = scoreB +=3
    whoIsWinning()
};
function clickedReset() {
    eliminarClasses()
    scoreA = 0
    scoreB = 0
    scoreAEl.textContent = scoreA
    scoreBEl.textContent = scoreB
};