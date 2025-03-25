let container =  document.querySelector(".container");
let restart = document.querySelector("#restart");
let newgame = document.querySelector("#newGame");
let buttton = document.querySelectorAll(".btn");

let turn0 = true;

const winnerValue = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const restartBtn = () =>{
    turn0 = true;
    enabledButtons();

}

buttton.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        console.log('i am clicked!');
        // btn.innerText = "hello"
        if(turn0){
            btn.innerText = "0";
            turn0 = false;
        }
        else{
            btn.innerText = "x";
            turn0 = true;
        }
        btn.disabled = true;
        checkWinner();
        
    })
});

const checkWinner = () =>{
    for(let pattern of winnerValue){
        // console.log(pattern);
        // console.log(buttton[pattern[0]],buttton[pattern[1]], buttton[pattern[2]]);
        let val1 = buttton[pattern[0]].innerText;
        let val2 = buttton[pattern[1]].innerText;
        let val3  = buttton[pattern[2]].innerText;

        if(val1 !="",val2 !="",val3 !=""){
            if(val1 === val2 && val2 === val3){
                console.log('winner');   
                disabledbuttons();    
            }
        }

        
    }
}

const disabledbuttons = ()=>{
    for (btn of buttton) {
        btn.disabled = true;
    }
}
const enabledButtons = ()=>{
    for (btn of buttton) {
        btn.disabled = false;
        btn.innerText = "";
    }
};

newgame.addEventListener("click",restartBtn);
restart.addEventListener("click",restartBtn);