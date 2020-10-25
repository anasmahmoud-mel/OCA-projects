
//setting up variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let noTasksMsg = document.querySelector(".no-tasks-message");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span")


//focus on input field

window.onload = function () {
    theInput.focus();
}


var arr2 = [];
theAddButton.addEventListener("click", function () {
    //add the tasks 
    
    if (theInput.value === "") {
        //console.log("no value")
    } else {
        //Remove no tasks message
        //noTasksMsg.remove();

        //create main span element
        let mainSpan = document.createElement("span");

        $(mainSpan).attr('id', 'inputspan');


        //create delete button
        let deleteElement = document.createElement("span");

        //create the main span text
        let text = document.createTextNode(theInput.value);

        //create the main button text
        let deleteText = document.createTextNode("Delete");

        //add text to main span
        mainSpan.appendChild(text);

        //add class to main span 
        mainSpan.className = 'task-box';

        //add text to delete button
        deleteElement.appendChild(deleteText);

        //add class to delete button
        deleteElement.className = "delete";

        //add delete button to main span
        mainSpan.appendChild(deleteElement);

        //add the tasks to the container
        tasksContainer.appendChild(mainSpan);


        ////////////////////////
        let regelements2 = theInput.value;

        // document.getElementById("myspan").textContent

        
        
        // for (var ii=0; ii < regelements2.length; ii++) {
          
            //var obj2 = regelements2[ii].value;
            arr2.push(regelements2);
            //arr2[ii] += obj2;
             //elements[ii].value = "";
            //console.log(elements[ii].className)
         //}
        




        //empty the input
        theInput.value = "";

        //focus on field
        theInput.focus();




        //   var regelements2 = document.getElementById("inputspan").value;

     
    }


    console.log(arr2);
        localStorage.setItem("todolist", JSON.stringify(arr2))
       
    
    
    

});





document.addEventListener("click", function (e) {
    //delete task
    if (e.target.className == 'delete') {

        //remove current task
        e.target.parentNode.remove();
    }

    //finish task
    if (e.target.classList.contains('task-box')) {
        //toggle class 'finished'

        e.target.classList.toggle('finished')
    }
});

//local storage part
var output = localStorage.getItem("classkey");
// var output = localStorage.getItem("classkey[0]");
var arrout = JSON.parse(output)

$("#wlc").html ("Welcome " + arrout[0]);

//console.log(arrout)

$(".clear").click(function() {
    localStorage.removeItem('todolist');

})