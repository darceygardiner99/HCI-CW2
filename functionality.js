function openFaultForm() {
    document.getElementById("faultForm").style.display="block";
}

function closeForm() {
  document.getElementById("faultForm").style.display = "none";
}

var todaysDate = new Date();
var date = todaysDate.getDate()+ '/' + (todaysDate.getMonth()+1) + '/' + todaysDate.getFullYear();
document.getElementById("todaysDate").innerHTML = date;

function previewImg(input) {
    var file = $("input[type=file]").get(0).files[0];

    if(file){
        var reader = new FileReader();

        reader.onload = function (){
            $("#previewImg").attr("src", reader.result);
        }
        reader.readAsDataURL(file);
    }
}