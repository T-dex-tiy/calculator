function onLoad(){
  console.log("is this hooked up?")
  var display =[]
  var buttons =
   document.querySelectorAll('button');
   for (let item of buttons){
     item.addEventListener("click", function () {
     document.getElementById('calc-display').innerHTML=item.value;
    display.push(item.value);
    console.log(item.value);
    document.getElementById('calc-display').innerHTML=display.join('');

    });
   }
  //  console.log(buttons);
  //  return buttons;
  //
  // function math(){
  // if () {
  //  var num1 =push.display;
  //  else{
  //    var num2 =push.display;
  //  }


      // console.log(num1);
  //  // use this area to use button returns to display in input box. use getElementById="calc-dsplay" and insert value
  //
  //
  // var array = array.push(button);
  // console.log(buttons)




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
// function equalAns(arr,cb){
//     return (cb(arr[0], arr[1]))();
//
//    }
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

function equalAns(arr,cb){
  return (cb(arr[0], arr[1]))();

 }
//
//
//
//
const arr = [10, 5];
const addsAns = equalAns(arr, addNum);
console.log("Answer is", addsAns);
const subsAns = equalAns(arr, subNum);
console.log("Answer is", subsAns);
const multsAns = equalAns(arr, multNum);
console.log("Answer is", multsAns);
const divdsAns = equalAns(arr,divdNum);
console.log("Answer is", divdsAns);
