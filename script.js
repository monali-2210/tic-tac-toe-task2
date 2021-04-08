let symbol = "X";
let display = document.getElementById("player"); 


function print(number){
    let eachbox = document.getElementById("row" + number);
    console.log(eachbox);
    if(eachbox.innerText==""){
        eachbox.innerText=symbol;
        result();
        
        altersign();
        display.innerText =  "It's " + symbol +"'s turn";
    }
   
}

function refresh(){
    for(let i=1;i<=9;i++){
        document.getElementById("row"+i).innerHTML="";
    }
    display.innerText = "Have Fun";
    throw "Finish";
}

function altersign(){
    if(symbol=="X"){
        symbol="O";
    }
    else symbol = "X";
}  

function box(no){
    return document.getElementById("row"+no).innerText;
}

function checkmove(a,b,c,m){
    if(box(a)==m && box(b)==m && box(c)==m){
        return true;
    }
    else return false;
}

function result(){
    if(checkmove(1,2,3,symbol) || checkmove(4,5,6,symbol) || checkmove(7,8,9,symbol) 
    || checkmove(1,4,7,symbol) || checkmove(2,5,8,symbol) || checkmove(3,6,9,symbol) 
    || checkmove(1,5,9,symbol) || checkmove(3,5,7,symbol)){
        display.innerHTML = "congrats " + symbol + " won";
        for(let i=1;i<=9;i++){
            document.getElementById("row"+i).innerHTML="";
        }
        throw "Finish";
    }
    else{
        if(getbox(1)!="" && 
           getbox(2)!="" && 
           getbox(3)!="" && 
           getbox(4)!="" && 
           getbox(5)!="" && 
           getbox(6)!="" && 
           getbox(7)!="" && 
           getbox(8)!="" && 
           getbox(9)!="" ){
               display.innerHTML = "It's A Tie";
               throw "it's a tie";
           }
    }
}