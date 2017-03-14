
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


let display=
   let btn = document.querySelector("button.number");
    btn.addEventListener('click', function(){
     number = btn.value
     console.log (number);
    });









}
window.onload = onload;
