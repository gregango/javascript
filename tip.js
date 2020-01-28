function calculator () {
  var billam = document.getElementById('billam').value;
  var percent = document.getElementById('serviceQual').value;
  var head = document.getElementById('peoplenum').value;



//validate input
 if(billam === "" || percent == 0) {
     alert('please enter the value');
     return;

 }
//check the number of people
if(head === "" || head <= 1) {
   head = 1;
   document.getElementById("each").style.display = "none";
}
else {
  document.getElementById("each").style.display = "block";
}
 //calculate tip
 var total = (parseFloat(billam) * parseFloat(serviceQual)) / head;
 //round to two decimal places
 total = Math.round(total * 100) / 100;
 total = total.toFixed(2);
 //display the tip
 document.getElementById("totalTip").style.display = "block";
 document.getElementById("tip").innerHTML = total;




}
//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
//call function
document.getElementById("calc").onclick = function() {
  calculator();
};
