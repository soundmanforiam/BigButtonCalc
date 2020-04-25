function display(value){
    let lastnumber = document.getElementById("display").innerText;
    document.getElementById("display").innerHTML = lastnumber + value;
}
function clr() 
     { 
         document.getElementById("display").innerHTML = ''; 
     } 
function result(display){
    let result = eval(display);
    document.getElementById('display').innerText = result;
}
