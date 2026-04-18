let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0= true ;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true ;
    enableboxes ();
    msgcontainer.classList.add("hide");
};





boxes.forEach((box) => {
    box.addEventListener("click",  () => {
      
        if(turn0) {
            box.textContent ="O";
            box.classList.add("o-style");
            turn0 = false;

        } else{
            box.textContent ="X";
            box.classList.add("x-style");
            turn0 = true;
        }
        box.disabled = true;

        checkwinner() ;
    });
});

const disableboxes = () =>{
    for (let box of boxes) {
        box.disabled = true;

    }
};
const enableboxes = () =>{
    for (let box of boxes) {
        box.disabled = false;
        box.textContent =""; 

    }
};

const showwinner =(winner) =>{
    msg.textContent =`Congratulations , winner is ${winner} `;
    msgcontainer.classList.remove("hide");
    disableboxes ();
};

const checkwinner =() =>{
    for( let pattern of winpatterns){
  

                let pos1val = boxes [pattern[0]].textContent;
                let pos2val = boxes [pattern[1]].textContent;
                let pos3val = boxes [pattern[2]].textContent;

                if(pos1val!= ""&& pos2val !="" && pos3val != "") {
                    if(pos1val === pos2val && pos2val === pos3val) {

                        showwinner(pos1val);
                    }
                }
    }
};

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


