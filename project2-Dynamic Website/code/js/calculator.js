


function calcNumbers(result){
     form.displayResult.value = form.displayResult.value+result;

}


    $(document).ready(function(){
    $("#ce").click(function(){
    $("#calcinput").val("");
   });
});


$(document).ready(function(){

$("#ABS").click(function(){
$("#calcinput").val("number");
});
});




$(document).ready(function(){

$("#po").click(function(){

$("#calcinput").val("power");
});
});


/*$("#calcinput").val();
function power() {


var x = document.getElementById("po").value;
document.getElementById("calcinput").innerHTML = x;

}*/


// var x = document.getElementById('calcinput').value;
// function factorial(x)
// {
// alert(hhhhhh);
// if (x === 0)
// {
// return 1;
// }
// return x * factorial(x-1);

// }




// fu = (n) =>{
//    // var n = document.getElementById('calcinput').value;
//     let answer = 1;
//         if (n === 0)
//        {
//           return 1;
//        }
//        else{
//          for(let i = 1; i<=n;i++){
//             answer = answer * i;
//          }
//          n.value = answer;  
//          console.log(n)
//     }   
   
//       };

//       fu(5);


      //var x = 1;
// function rec() {
//     var n = document.getElementById('calcinput').value;
//     if (n == 0 || n == 1) {
//       return 1;
//     }else {
//       //x = x * n;
//       document.write(n + "<br>");
//      return n * rec(n - 1);
//     }
//    // return x;
//   }
  
  
//  console.log(rec());



 // function factorial(n)
factorial = (n) =>{
    var n = document.getElementById('calcinput').value;
    let answer = 1;
        if (n === 0)
       {
          return 1;
       }
       else{
         for(let i = 1; i<=n;i++){
            answer = answer * i;
         }
        //  return answer;
         form.displayResult.value = answer
                 
    }   
      } 


      // function absolute(n)
      absolute = (n) => {
        var n = document.getElementById('calcinput').value;
        display.value = Math.abs(n);
      }
