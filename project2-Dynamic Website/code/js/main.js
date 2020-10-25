//define user is checked or not 
 $(' #check ').click(function (){
    var isCheck = $('#check:checked').val()?true:false;


    // let isCheck = document.getElementById("check").value;

    if(isCheck == true){
        $(".ische").removeClass("disabled");
        // $(".btn").porp("disabled",true);
        // console.log("ssss")

    }else {
        $(".ische").addClass("disabled");
    }

});


//register

$("#register").click(function() {
    let inputUser =$(".userName").val();
    var letters = /[A-Za-z]+$/;
    if(inputUser.match(letters)){
        return;
    }else {
        alert("please input user in letter")
    }

    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/;
            var pass1 = $(".userPass").val();
            if (pass1.match(paswd)) {
                return;
            }else {
                alert("please input password user  in letter and sympol and number")
            }

            var number=/^([009627]{6})([7-9]{1})([0-9]{7})/;
            if ($("#userPone").val().match(number)) {
                return;
            }else {
                alert("please input phone number corect")
            }

         
         var pass2 =  $("#reppass").val();
         if(pass1.value == pass2.value){
             return;
         }else {
             alert("please match passwords corect.")
         }
    


});


 //clear
$("#clear").click(function(){
    var elements = document.getElementsByTagName("input");
    for (var ii=0; ii < elements.length; ii++) {
      
        elements[ii].value = "";
        // console.log(elements[ii].className)
      
    }
    
});


// $("#rigester").click(function(){
//     var regelements = document.getElementsByTagName("input");
//     for (var ii=0; ii < regelements.length; ii++) {
      
//         // elements[ii].value = "";
//         // console.log(elements[ii].className)

//         localStorage.setItem(regelements[ii].className, regelements[ii].value);
      
//     }
// })

$("#register").click(function(){
    var regelements = document.getElementsByTagName("input");
    
    var arr = [];
    for (var ii=0; ii < regelements.length; ii++) {
      
        var obj = regelements[ii].value;
        arr.push(obj);
        // arr[ii] += obj;
        // elements[ii].value = "";
        // console.log(elements[ii].className)
    }
    console.log(arr);
    localStorage.setItem("classkey", JSON.stringify(arr));
    console.log("ddddd")



})


$("#visit").click(function(){
    var regelements = document.getElementsByTagName("input");
    
    var arr = [];
    for (var ii=0; ii < regelements.length; ii++) {
      
        var obj = regelements[ii].value;
        arr.push(obj);
        // arr[ii] += obj;
        // elements[ii].value = "";
        // console.log(elements[ii].className)
    }
    console.log(arr);
    sessionStorage.setItem("classkey", JSON.stringify(arr))

})



document.querySelector(".toggl-seting .icog").addEventListener("click",function(){
    this.classList.toggle("fa-spin");

    document.querySelector(".setting-box").classList.toggle("open");
});

const colorli = document.querySelectorAll(".colors-list li");

//loop on all list 
colorli.forEach( li => {
    //click on event list item
    li.addEventListener("click", (e) => {
        //set color on root
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
    });
});




// const font_op = document.querySelectorAll("#font_size option");

// //loop on all list 
// font_op.forEach( option => {
//     //click on event list item
//     option.addEventListener("click", (e) => {
//         //set color on root
//         document.documentElement.style.setProperty('--main-size',e.target.dataset.value);
//     });
// });

$("#font_size").change(function() {
   
    // $( "select option:selected" ).each(function() {

    // })

   var chgSize = $("#font_size").val();

   document.documentElement.style.setProperty('--main-size',chgSize);
})


$("#font_family").change(function() {
   
    // $( "select option:selected" ).each(function() {

    // })

   var chgSize = $("#font_family").val();

   //document.documentElement.style.setProperty('--main-size',chgSize);
   document.body.style.fontFamily = chgSize;
})