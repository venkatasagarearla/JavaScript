const prompt=require("prompt-sync")({sigint:true})
const a =+prompt('enter a number');
const b =+prompt('enter a number');
const c =+prompt('enter a number');
if(a>b && a>c){
    console.log(a);
}
else if(b>a && b>c){
    console.log(b)
}
else{
    console.log(c)
}