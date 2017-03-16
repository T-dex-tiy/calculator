function onLoad(){
  //This is running well. Refactor if needed/ever figure out a better way
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
  //PLACING THIS FOR HOLDING UNTIL VAR DISTRUBUTION AFTER CLICK OF MATH FUNCTION
  // function place(){
  // if () {
  //  var num1 =push.display;
  //  else{
  //    var num2 =push.display;

  // var array = array.push(button);
  // console.log(buttons)



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

//Math checked out.
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
  return (cb(arr[0], arr[1]))();// This caused a nightmare in debugger and could not put together how to have call back run over multiple times.

 }
//
//
//
//
const arr = [10, 5];// Used for testing. Could not get to pass full arragement and left for testing purposes
const addsAns = equalAns(arr, addNum);
console.log("Answer is", addsAns);
const subsAns = equalAns(arr, subNum);
console.log("Answer is", subsAns);
const multsAns = equalAns(arr, multNum);
console.log("Answer is", multsAns);
const divdsAns = equalAns(arr,divdNum);
console.log("Answer is", divdsAns);
// Attempt to get my call backs working, would work for one only. Usually addition which would show on the console
