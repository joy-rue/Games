//Try to have two users playing separately on different PCs
/* 
script.js mainly serves to add eventListeners to the various components on the web page. 
This responsiveness is need for the game to be played.
it also diables buttons to stop the game when the board is full or when someone has 

 */

//Create arrays to store records for a match
const col1 = new Array(3);
const col2 = new Array(3);
const col3 = new Array(3);

const board = document.querySelector(".play");
const reset = document.getElementById("reset")
const settings = document.getElementById("set")

reset.addEventListener("click", ()=>{
    document.location.reload();
})

settings.addEventListener("click", (event)=>{
    document.querySelector(".settings").style.width = "400px";

    event.stopPropagation();

    document.querySelector(".main").addEventListener("click", ()=>{
        document.querySelector(".settings").style.width = "0";
    })
})

board.addEventListener("click",checkEndGame);
var txt = false;
var end_Game = 9;

//Get access to all the input buttons on the playboard
const bt1 = document.querySelector("input#btn1");
const bt2 = document.querySelector("input#btn2");
const bt3 = document.querySelector("input#btn3");
const bt4 = document.querySelector("input#btn4");
const bt5 = document.querySelector("input#btn5");
const bt6 = document.querySelector("input#btn6");
const bt7 = document.querySelector("input#btn7");
const bt8 = document.querySelector("input#btn8");
const bt9 = document.querySelector("input#btn9");

//Add event listeners to all input boxes
bt1.addEventListener("click", rippleB1);
bt2.addEventListener("click", rippleB2);
bt3.addEventListener("click", rippleB3);
bt4.addEventListener("click", rippleB4);
bt5.addEventListener("click", rippleB5);
bt6.addEventListener("click", rippleB6);
bt7.addEventListener("click", rippleB7);
bt8.addEventListener("click", rippleB8);
bt9.addEventListener("click", rippleB9);


// //The FUNCTIONS below mark(X or O) the respective cell when clicked
function rippleB1(){
    txt = !txt;
    if (txt){
        bt1.value = "X";
    }
    else{
        bt1.value = "O";
    }
    col1[0]= bt1.value;
    end_Game --;
    bt1.removeEventListener("click", rippleB1);
}

function rippleB2(){
    txt = !txt;
    if (txt){
        bt2.value = "X";
    }
    else{
        bt2.value = "O";
    }
    col2[0]= bt2.value;
    end_Game --;
    bt2.removeEventListener("click", rippleB2);
}

function rippleB3(){
    txt = !txt;
    if (txt){
        bt3.value = "X";
    }
    else{
        bt3.value = "O";
    }
    col3[0]= bt3.value; 
    end_Game --;
    bt3.removeEventListener("click", rippleB3);
}

function rippleB4(){
    txt = !txt;
    if (txt){
        bt4.value = "X";
    }
    else{
        bt4.value = "O";
    }
    col1[1]= bt4.value;
    end_Game --;
    bt4.removeEventListener("click", rippleB4);
}

function rippleB5(){
    txt = !txt;
    if (txt){
        bt5.value = "X";
    }
    else{
        bt5.value = "O";
    }
    col2[1]= bt5.value;
    end_Game --;
    bt5.removeEventListener("click", rippleB5);
}

function rippleB6(){
    txt = !txt;
    if (txt){
        bt6.value = "X";
    }
    else{
        bt6.value = "O";
    }
    col3[1]= bt6.value;
    end_Game --;
    bt6.removeEventListener("click", rippleB6);
}

function rippleB7(){
    txt = !txt;
    if (txt){
        bt7.value = "X";
    }
    else{
        bt7.value = "O";
    }
    col1[2]= bt7.value;
    end_Game --;
    bt7.removeEventListener("click", rippleB7);
}

function rippleB8(){
    txt = !txt;
    if (txt){
        bt8.value = "X";
    }
    else{
        bt8.value = "O";
    }
    col2[2]= bt8.value;
    end_Game --;
    bt8.removeEventListener("click", rippleB8);
}

function rippleB9(){
    txt = !txt;
    if (txt){
        bt9.value = "X";
    }
    else{
        bt9.value = "O";
    }
    col3[2]= bt9.value;
    end_Game --;
    bt9.removeEventListener("click", rippleB9);
}

//--------------------------------------END GAME VERIFIER CODE-----------------------------------------------------------------------------

//verifies if the move made by the player was an end Game move
function checkEndGame(){   

    document.getElementById("starter").style.visibility = "hidden";
    //checks for first row  for tripple matches
    if (col1[0] != undefined && col1[0] == col2[0] && col1[0] == col3[0]){
        var announce = document.createTextNode( "END GAME. The winner is " + col1[0]);
        document.getElementById("alert").appendChild(announce);
        end_Game = 0;
    }

    //checks for second row for tripple matches
    else if (col1[1] != undefined && col1[1] == col2[1] && col1[1] == col3[1]){
        var announce = document.createTextNode( "END GAME. The winner is " + col1[1]);
        document.getElementById("alert").appendChild(announce);
        end_Game = 0;
    }

    //checks for third row for tripple matches
    else if (col1[2] != undefined && col1[2] == col2[2] && col1[2] == col3[2]){
        var announce = document.createTextNode( "END GAME. The winner is " + col1[2]);
        document.getElementById("alert").appendChild(announce);
        end_Game = 0;
    }
    //checks the first column for tripple match
    else if (col1[0] != undefined && col1[0] == col1[1] && col1[0] == col1[2]){
        var announce = document.createTextNode( "END GAME. The winner is " + col1[0]);
        document.getElementById("alert").appendChild(announce);
        end_Game = 0;
    }

    //checks the second column for tripple match
    else if (col2[0] != undefined && col2[0] == col2[1] && col2[0] == col2[2]){
        var announce = document.createTextNode( "END GAME. The winner is " + col2[0]);
        document.getElementById("alert").appendChild(announce);
        end_Game = 0;
    }

    //checks the third column for tripple match
    else if (col3[0] != undefined && col3[0] == col3[1] && col3[0] ==col3[2]){
        var announce = document.createTextNode( "END GAME. The winner is " + col3[0]);
        document.getElementById("alert").appendChild(announce);
        end_Game = 0;
    }

    //checks the diagonal for tripple matches
    else if (col1[0] != undefined && col1[0] == col2[1] && col1[0] == col3[2]){
        var announce = document.createTextNode( "END GAME. The winner is " + col1[0]);
        document.getElementById("alert").appendChild(announce);
        end_Game = 0;
    }

    //checks the diagonal for tripple matches
    else if (col1[2] != undefined && col1[2] == col2[1] && col1[2] == col3[0]){
        var announce = document.createTextNode( "END GAME. The winner is " + col1[2]);
        document.getElementById("alert").appendChild(announce);
        end_Game = 0;
    }
    
    
    //it disables all the once responsive input boxes to signal GameOver
    if (end_Game == 0){
        document.querySelectorAll('input').forEach(elem => {
            elem.disabled = true;
        board.removeEventListener("click", checkEndGame);
          });
    }
    console.log(end_Game);
}


