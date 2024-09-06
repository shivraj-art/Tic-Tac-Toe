let boxes=document.querySelectorAll(".box");
let turn=true;
let winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

for(let box of boxes){
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        checkwin();
    })
}
let newbtn=document.querySelector("#newbtn");
newbtn.style.display="none";
const checkwin=()=>{for(let pattern of winpattern){
    let postVal1=boxes[pattern[0]].innerText;
    let postVal2=boxes[pattern[1]].innerText;
    let postVal3=boxes[pattern[2]].innerText;
    if(postVal1!="" && postVal2!=""&& postVal3!=""){
        if(postVal1==postVal2 && postVal1==postVal3){
            if(turn){
                console.log("Player-2 is the Winner");
                showinner(postVal1);
                }
            else{
                console.log("Player-1 is the Winner");
                showinner(postVal1);
                }
                for(let box of boxes){
                    box.disabled=true;
                }
            }
        }
    }
}
let winner=document.querySelector(".win");
showinner=(player)=>{
    winner.innerText=`Congrutlation player-${player}`;
    winner.style.fontSize="60px";
    newbtn.style.display="flex";
}
let rstbtn=document.querySelector("#resetbtn");
rstbtn.addEventListener("click",()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        winner.innerText="";
    }
    newbtn.style.display="none";
})
newbtn.addEventListener("click",()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        winner.innerText="";
    }
    newbtn.style.display="none";
})