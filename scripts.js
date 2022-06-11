var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber=0
var i = currentNumber;

function add(){
    currentNumberWrapper.innerHTML = currentNumber + 1;
    currentNumber=currentNumber+1;
    console.log('currentNumer');
    if(currentNumber>0){
        document.getElementById('currentNumber').style.color="rgb(184, 12, 236)";  
    }
    
}

function decrement(){ 
    if (currentNumber>0){
    currentNumberWrapper.innerHTML = currentNumber - 1;
    currentNumber=currentNumber-1;
    console.log('currentNumer');
}  
if(currentNumber==0){
    document.getElementById('currentNumber').style.color="red";  
    
}
}