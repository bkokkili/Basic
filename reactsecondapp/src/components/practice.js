function practice(){
    var arr = [44,23,17,19]
    //with normal function
    arr.map(function (v){
      console.log(v)
    });
    //with arrow function
    arr.map(a => {
        console.log(a)
    })
    console.log(arr.length)

   /**
    * filter in different ways
    */
   var eligible = arr.filter(isEligible);
   console.log(eligible);
   
   var eligbleAge = arr.filter(function(age){
    return age > 18;
   });
   console.log(eligbleAge);   

   /**
    * reduce in different ways
    */
   var sumofArrayVal = arr.reduce(sumofArray) ;
   console.log(sumofArrayVal)

   arr.reduce(function(sum,num){
    console.log(sum + num)
   });
}
function isEligible(age){
   return age > 18;
}

function sumofArray(total, currVal){
   return total + currVal;
}
export default practice;