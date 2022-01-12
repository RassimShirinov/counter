console.log('counter JS');
let count=0;
const counterSelector = document.getElementById('counter');

function plus(){
counterSelector.innerText= ++count;
}

function minus(){
counterSelector.innerText= --count;
}

function reset(){
 counterSelector.innerText=0;
}

let count2=0;
const counter2= document.getElementById('counter2');
function plus2(){

 counter2.innerText= ++count2;
}

function minus2(){
//count2-=2
 counter2.innerText= --count2;

}
 function reset2(){
  count2=0;
 counter2.innerText=0;
 }
 function double(){
  counter2.innerText= count2*=2;
 }