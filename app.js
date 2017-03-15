console.log("is this hooked up?")
function onload(){

  function add(num1, num2){
    var sum = (num1+num2);
    console.log(sum);
    return sum;
  }
  function sub(num1, num2){
    var sub =(num1-num2);
    console.log(sub);
    return sub;
  }
  function mult(num1,num2){
    var mult =(num1*num2);
    console.log(mult);
    return mult;
  }
  function divd(num1, num2){
    if (num2 === 0){
      console.log('error')
    }
    else{
    var divd=(num1/num2);
    console.log(divd);
    return divd;
  }
  }

function equals(arr,cb){}




//let display=
let btn = document.getElementById("one");
btn.addEventListener('click', function(){
     console.log(btn.value);
    });









}
window.onload = onload;
