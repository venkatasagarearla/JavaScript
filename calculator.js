const prompt=require("prompt-sync")({sigint:true})
let a=+prompt('enter a value');
let b=+prompt('enter b value');
while(true){
    console.log("press 1 for addition");
    console.log("press 2 for subtraction");
    console.log("press 3 for multiplication");
    console.log("press 4 for division");
    let ch=+prompt("enter your choice")
    switch(ch){
        case 1: add(a,b)
                 break;
        case 2:sub(a,b)
                 break;
        case 3:mul(a,b);
                break; 
        case 4: div(a,b)
                break;
        default:console.log("no more options")                
    }

    
}

 function add(a,b){
    console.log(a+b);

 }
 function sub(a,b){
    console.log(a-b);
 }
 function mul(a,b){
    console.log(a*b);
 }
 function div(a,b){
    console.log(a/b);
 }