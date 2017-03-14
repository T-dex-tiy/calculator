
function onload(){

  function add(){
    var sum = (num1+num2);
    console.log(sum);
    return sum;
  }
  function sub(){
    var sub =(num1-num2);
    console.log(sub);
    return sub;
  }
  function mult(){
    var mult =(num1*num2);
    console.log(mult);
    return mult;
  }


let display=
   let btn = document.querySelector("button.number");
    btn.addEventListener('click', function(){
     number = btn.value
     console.log (number);
    });









}
window.onload = onload;
