function onLoad(){
  console.log("is this hooked up?")

  var buttons =
   document.querySelectorAll('button');
   for (let item of buttons){
     item.addEventListener("click", function () {
      console.log(item.value);
    });
   }
   console.log(buttons)
 }




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


function equalsAns(arr,cb){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
      if (cb(arr[i])) {
        sum == arr[i];
      }
    }
    return sum;
  }



  const arr = [10, 5];
  const addsAns= equalAns(arr, addNum);
  console.log('Answer is', addsAns);
  const subsAns= equalAns(arr, subNum);
  console.log('Answer is', subsAns);
  const multsAns= equalAns(arr, multNum);
  console.log('Answer is', multAns);
  const divdsAns= equalAns(arr,divdNum);
  console.log('Answer is', divdsAns)

}
window.onload = onLoad;



// const arr = [10, 5]
// const adds= equalsAns(arr, add);
// console.log(adds);
// const subs= equalsAns(arr, sub);
// console.log(subs);
// const mults= equalsAns(arr, mult);
// console.log(mult);
// const divds= equalsAns(arr,divd);
// console.log(divds)
//
// console.log(add(1,2))
// console.log(boo())
// function boo(){
//   const x= 42;
//   return x
// }
