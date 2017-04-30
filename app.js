function onLoad(){
  //This is running well. Refactor if needed/ever figure out a better way
  console.log("is this hooked up?")

  var guiDisplay = []
  var maths = []
  var display = ""
  var digits =
   document.querySelectorAll('button.digit');
   for (let item of digits){
         item.addEventListener("click", function () {
         document.getElementById('calc-display').innerHTML=item.value;
         display += item.value;
         console.log(display);
        document.getElementById('calc-display').innerHTML=display;
        console.log('display', display);

    return display
    });
   }
   var mathFunc =
    document.querySelectorAll('button.math');
    for (let item of mathFunc){
          item.addEventListener("click", function () {
          document.getElementById('calc-display').innerHTML=item.value;
          display += "" + item.value + "";
          console.log(display);
         document.getElementById('calc-display').innerHTML=display;
         console.log('display', display);

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
  }}



var answerDigits =
 document.querySelectorAll('button.equal');
 for (let item of answerDigits){
       item.addEventListener("click", function () {
      maths = display.split('');
      let num1 = parseFloat(maths[0]);
      let num2 = parseFloat(maths[2]);
      let mathFunc= maths[1];
      console.log("nun1", num1 ,"num2", num2, "mathFuncs", mathFunc);
      if (maths[1]=== '+'){
        runMathsFunc(num1, num2, addNum);
        display = runMathsFunc(num1, num2, addNum);
        console.log(runMathsFunc(num1, num2, addNum));
      }
      if (maths[1]=== '-'){
        runMathsFunc(num1, num2, subNum);
        display = runMathsFunc(num1, num2, subNum);
        console.log(runMathsFunc(num1, num2, subNum));
      }
      if (maths[1]=== 'x'){
        runMathsFunc(num1, num2, multNum);
        display = runMathsFunc(num1, num2, multNum);
        console.log(runMathsFunc(num1, num2, multNum));
      }
      if (maths[1]=== '/'){
        runMathsFunc(num1, num2, divdNum);
        display = runMathsFunc(num1, num2, divdNum);
        console.log(runMathsFunc(num1, num2, divdNum));
      }

  return display
  });
 }
// This code does work but I am havign issues with pulling multiple numbers and using them in the same function. Will need to revisit this and update to optimize
 function runMathsFunc(num1, num2, cb){
   return cb(num1, num2)
   console.log(cb(num1, num2));
 }

}
window.onload = onLoad;
