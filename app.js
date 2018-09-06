
function onLoad(){
  //This is running well. Refactor if needed/ever figure out a better way


  var maths = []
  var secertEgg=[]
  var checkEgg="80085"
  var number1=[]
  var display=""
  var num1=[]
  var num2=[]
  var top=[]
  var digits =
   document.querySelectorAll('button.digit')
   for (let item of digits){
         item.addEventListener("click", function () {  
         const dis=document.getElementById('calc-display').innerHTML=item.value;
         display += item.value;
         let newDisplay=num1 +" "+ maths
        document.getElementById('function').innerHTML=top
        document.getElementById('calc-display').innerHTML=display;
        document.getElementById('function').innerHTML=newDisplay
    return display
    });
    
    
   }
   var mathFunc =
    document.querySelectorAll('button.math');
    for (let item of mathFunc){
          item.addEventListener("click", function () {
          document.getElementById('calc-display').innerHTML=item.value;
          if (num1.length==0){
            num1.push(display)
            top.concat(num1)    
            display=""
          }
          
          if(maths.length!=0){
            return null
          }else{
          maths.push(item.value)}
         document.getElementById('calc-display').innerHTML=display;
         let newDisplay= num1+' '+ maths
         document.getElementById('function').innerHTML=newDisplay
     return display
     });
    }


// Left funcitons up here for figuring out placement
  function addNum(num1, num2){
    var sum = (num1+num2);
    return sum;
  }
  function subNum(num1, num2){
    var sub =(num1-num2);
    return sub;
  }
  function multNum(num1,num2){
    var mult =(num1*num2);
    return mult;
  }
  function divdNum(num1, num2){
    if (num2 == 0){
      alert("You trying to kill us all? No one can divide by Zero!!!")
    }
    else{
    var divd=(num1/num2);
    return divd;
  }
}
function whyNoWorky(num1, num2){
  var modulo=(num1%num2);
  return modulo
}

var clear= document.querySelector('.clear')
clear.addEventListener('click', function(){
  maths = []
  display=""
  num1=[]
  num2=[]
  document.getElementById('calc-display').innerHTML=display;
  document.getElementById('function').innerHTML=display;
})


var answerDigits =
 document.querySelectorAll('button.equal');
 for (let item of answerDigits){
       item.addEventListener("click", function () {
      num2.push(display)
      let newDisplay=num1+" "+maths+' '+num2
      document.getElementById('function').innerHTML=newDisplay;
      let number1 = parseFloat(num1[0]);
      let number2 = parseFloat(num2[0]);
      let mathFunc= maths[0].toString();
      if (mathFunc=== '+'){
        runMathsFunc(number1, number2, addNum);
        display = runMathsFunc(number1, number2, addNum);
      }
      if (mathFunc=== '-'){
        runMathsFunc(number1, number2, subNum);
        display = runMathsFunc(number1, number2, subNum);
      }
      if (mathFunc=== 'x'){
        runMathsFunc(number1, number2, multNum);
        display = runMathsFunc(number1, number2, multNum);
      }
      if (mathFunc=== '/'){
        runMathsFunc(number1, number2, divdNum);
        display = runMathsFunc(number1, number2, divdNum);
      }
      if (mathFunc=== '%'){
        runMathsFunc(number1, number2, whyNoWorky);
        display = runMathsFunc(number1, number2, whyNoWorky);
      }
      document.getElementById('calc-display').innerHTML=display;
      
     
      
      num1=[]
      num2=[]
      maths=[]
      num1.push(display)

      display=""
      

  return display
  });
 }
 function runMathsFunc(num1, num2, cb){
   return cb(num1, num2)
 }
 var easterEgg=document.addEventListener('click', (e)=>{
  secertEgg.push(e.target.value)
  secertEgg.splice(-checkEgg.length - 1, secertEgg.length - checkEgg.length)
  number1.push(num1.toString())
  number1.splice(-checkEgg.length -1, number1.length - checkEgg.length)
  
  
  if(secertEgg.join('').includes(checkEgg)||number1.join('').includes(checkEgg)){
    console.log("You fifth grader");
    document.getElementById('calc-display').innerHTML="You Fifth Grader..."
    number1=[]
  }
   
 })
 

}
window.onload = onLoad;
