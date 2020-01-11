
function printTime() {

var noon = 12;
// get the html element as the target 출력장소
var target = document.getElementById('clock');

// bringing current date using new Date()
var currentDate = new Date();
//Y-m-d 0~11 months
var calender = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate();
var merridian = 'AM';
var currentHours = addZeros(currentDate.getHours(),2);
var currentMinute = addZeros(currentDate.getMinutes(),2);
var currentSeconds = addZeros(currentDate.getSeconds(),2);

if (currentHours >= noon) {
  merridian = 'PM';
  currentHours = addZeros(currentHours  - 12, 2)
}
if (currentSeconds >= 50) {
    //adding html to change color
    currentSeconds = '<span style="color:#de1951;">'+currentSeconds+'</span>'
}
    //print out
    target.innerHTML = currentHours+":"+currentMinute+":"+currentSeconds+ ":" +"<span style='font-size:50px;'>" + merridian + "</span>";
      
    setTimeout("printTime()",1000);

}

function addZeros(num,digit) {
      var zero ='';
      num = num.toString();
      if (num.length < digit) {
        for (i=0, i< digit - num.length; i++; ) {
          zero += '0';
        }
      }
      return zero + num;
}
