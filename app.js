
function onLoad(){
  //This is running well. Refactor if needed/ever figure out a better way

  var guiDisplay = []
  var maths = []
  var display=""
  var num1=[]
  var num2=[]
  var top=[]
  var digits =
   document.querySelectorAll('button.digit');
   for (let item of digits){
         item.addEventListener("click", function () {
         document.getElementById('calc-display').innerHTML=item.value;
         display += item.value;
         let newDisplay=num1 +" "+ maths
        document.getElementById('function').innerHTML=top
        document.getElementById('calc-display').innerHTML=display;
        document.getElementById('function').innerHTML=newDisplay
        console.log('display', display);
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
            console.log(top);
            
            display=""
          }
          
          if(maths.length!=0){
            return null
          }else{
          maths.push(item.value)}
          console.log(maths);
         document.getElementById('calc-display').innerHTML=display;
         let newDisplay= num1+' '+ maths
         document.getElementById('function').innerHTML=newDisplay
         console.log('display', newDisplay);
     return display
     });
    }


// Left funcitons up here for figuring out placement
  function addNum(num1, num2){
    var sum = (num1+num2);
    console.log(sum);
    return sum;
  }
  function subNum(num1, num2){
    var sub =(num1-num2);
    console.log(sub);
    return sub;
  }
  function multNum(num1,num2){
    var mult =(num1*num2);
    console.log(mult);
    return mult;
  }
  function divdNum(num1, num2){
    if (num2 === 0){
      console.log('error')
    }
    else{
    var divd=(num1/num2);
    console.log(divd);
    return divd;
  }
}
function whyNoWorky(num1, num2){
  var modulo=(num1%num2);
  return modulo
}



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
      console.log("nun1", number1 ,"num2", number2, "mathFuncs", mathFunc);
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
      console.log(num1, display);
      

  return display
  });
 }
 function runMathsFunc(num1, num2, cb){
   return cb(num1, num2)
 }

}
window.onload = onLoad;
