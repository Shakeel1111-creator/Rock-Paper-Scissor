var user=0;
var comp=0;

var choices=document.querySelectorAll(".choice");
var msg=document.querySelector(".msg");
var yourscore=document.querySelector(".yourscore");
var compuscore=document.querySelector(".compscore");
const genCompChoice =() => {
    var options=["rock","paper","scissor"];
    var randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const showWinner=(userwin,userchoice,compchoice) => {
    if(userwin){
        user++;
        yourscore.innerText= user;
        console.log("you win");
        msg.innerText='You Win! your '+userchoice+' beats '+compchoice;
        msg.style.backgroundColor="green";
    }
    else {
        comp++;
        compuscore.innerText = comp;
        console.log("you lose");
        msg.innerText='You Lose '+compchoice+' beats your '+userchoice;
        msg.style.backgroundColor="red";
    };
}
const gameDraw=() => {
    console.log("Game was draw");
    msg.innerText="Game was Draw .Play Again";
    msg.style.backgroundColor="purple";
    return;
}
const playgame=(userchoice) => {
    console.log('userchoice='+userchoice);
    var compchoice=genCompChoice();
    console.log("compchoice="+compchoice);
    if(userchoice===compchoice){
        gameDraw();
    }
    else{
        var userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="scissor"?true:false;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="rock"? true:false;
        } 
        else{
            userwin=compchoice==="paper"?true:false;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
            var userchoice=choice.getAttribute("id");
            playgame(userchoice);
    });
});
