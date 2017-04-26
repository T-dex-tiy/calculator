function onLoad(){
  //This is running well. Refactor if needed/ever figure out a better way
  console.log("is this hooked up?")

  var guiDisplay = []
  var display =[]
  var buttons =
   document.querySelectorAll('button');
   for (let item of buttons){
         item.addEventListener("click", function () {
         document.getElementById('calc-display').innerHTML=item.value;
         console.log(display);
        display.push(item.value);

        console.log(item.value);

        document.getElementById('calc-display').innerHTML=display.join('');

        display = [item.value];
        guiDisplay.push(display);
        console.log('display', display);
        checkDisplay();

    return display
    });
   }

function updateDisplay(){

  console.log('oustide:',display, guiDisplay);
}
// var num1=display[0];
// var num2=display[2];
// var mathFunc=display[1];



// Left funcitons up here for figuring out placement
//   function addNum(num1, num2){
//     var sum = (num1+num2);
//     console.log(sum);
//     return sum;
//   }
//   function subNum(num1, num2){
//     var sub =(num1-num2);
//     console.log(sub);
//     return sub;
//   }
//   function multNum(num1,num2){
//     var mult =(num1*num2);
//     console.log(mult);
//     return mult;
//   }
//   function divdNum(num1, num2){
//     if (num2 === 0){
//       console.log('error')
//     }
//     else{
//     var divd=(num1/num2);
//     console.log(divd);
//     return divd;
//   }}
//
//  var mathFunc = {x} ;
//  var num1 = 2;
//  var num2 = 5;
// function equalAns(){
//     if (var mathFunc = 'x' );{
//     function multNum(num1,num2);
//     return (equalAns);
//   }
    // else if{
    //   (var mathFunc = "+");{
    //     function addNum(num1,num2);
    //   }
    // }
    //   else if{
    //     (var mathFunc = "-");{
    //       function subNum(num1,num2);
    //     }
    //   }
    //     else if {
    //       (var mathFunc = '/');{
    //         function divdNum(num1,num2);
    //       }
    //     }
        // return equalAns;
        // console.log(equalAns)
      // }
//
//
// }
//     //return (cb(arr[0], arr[1]))();
//  }
// //
// //
// //
// //
//   const arr = [10, 5];
//   const addsAns = equalAns(arr, addNum);
//   console.log("Answer is", addsAns);
//   const subsAns = equalAns(arr, subNum);
//   console.log("Answer is", subsAns);
//   const multsAns = equalAns(arr, multNum);
//   console.log("Answer is", multsAns);
//   const divdsAns = equalAns(arr,divdNum);
//   console.log("Answer is", divdsAns);
}
window.onload = onLoad;
// var num1=display[0];
// console.log(display[0]);
// var num2=display[3];

// //Math checked out.
// function addNum(num1, num2){
//   var sum = (num1+num2);
//   console.log(sum);
//   return sum;
// }
// function subNum(num1, num2){
//   var sub =(num1-num2);
//   console.log(sub);
//   return sub;
// }
// function multNum(num1,num2){
//   var mult =(num1*num2);
//   console.log(mult);
//   return mult;
// }
// function divdNum(num1, num2){
//   if (num2 === 0){
//     console.log('error')
//   }
//   else{
//   var divd=(num1/num2);
//   console.log(divd);
//   return divd;
// }}
// function equalAns(num){
//     var display=[num1, function(cb),num2];
//     console.log(num)
//     return num;

    //return (cb(arr[0], arr[1]))();
// ]
// function equals(){
//   return ('var 1', function(cb), 'var 2');
//
// }
//function equalAns(arr,cb){
//return (cb(arr[0], arr[1]))();// This caused a nightmare in debugger and could not put together how to have call back run over multiple times.

 // }
//
//
//
//
//
// Attempt to get my call backs working, would work for one only. Usually addition which would show on the console
