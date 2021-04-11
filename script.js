let symbol = "X";
let display = document.getElementById("player"); 
let display1 = document.getElementById("name1");
let display2 = document.getElementById("name2");
let display3 = document.getElementById("scoreboard1");
let display4 = document.getElementById("scoreboard2");
let counter1=0;
let counter2=0;

var namebox1 = prompt("Enter the name of User1"+"");
var namebox2 = prompt("Enter the name of User2"+"");



function usernameinput(){
    
     if(namebox1!=null){
          display1.innerHTML = "Hello " + namebox1 + ": X";
     }
     if(namebox2!=null){
         display2.innerHTML = "Hello " + namebox2  + ": O";
     }
}

function print(number){

    let eachbox = document.getElementById("row" + number);
    console.log(eachbox);
    if(eachbox.innerText==""){
        eachbox.innerText=symbol;
        result();
        
        altersign();
        if(symbol=="X"){
            display.innerText =  "It's " + namebox1 +"'s turn";
        }
        if(symbol=="O"){
            display.innerText =  "It's " + namebox2 +"'s turn";
        }
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
        
        if(symbol=="X"){
            display.innerHTML = "Congrats " + namebox1 + " Won" ;
            counter1++;
            let scorebox1 = "Score: " + counter1;
            
            display3.innerHTML = scorebox1; 
        }
        if(symbol=="O"){
            display.innerHTML = "Congrats " + namebox2 + " Won" ;
            counter2++;
            let scorebox2 = "Score: " + counter2;
            
            display4.innerHTML = scorebox2;
        }

        for(let i=1;i<=9;i++){
            document.getElementById("row"+i).innerHTML="";
        }

        throw "Finish";
    }
    else{
        if(box(1)!="" && 
           box(2)!="" && 
           box(3)!="" && 
           box(4)!="" && 
           box(5)!="" && 
           box(6)!="" && 
           box(7)!="" && 
           box(8)!="" && 
           box(9)!="" ){
               display.innerHTML = "It's A Tie";
               throw "it's a tie";
           }
    }
    
}

