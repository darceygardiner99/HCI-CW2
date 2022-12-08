function openFaultForm() {
    document.getElementById("faultForm").style.display="block";
}

function closeForm() {
  document.getElementById("faultForm").style.display = "none";
}

var todaysDate = new Date();
var date = todaysDate.getDate()+ '/' + (todaysDate.getMonth()+1) + '/' + todaysDate.getFullYear();
document.getElementById("todaysDate").innerHTML = date;