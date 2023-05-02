<!DOCTYPE html>
<html>
<head>
<style>

h1{

 font-family: "lucida handwriting",cursive;
}
#p2,#p1{

 font-family: "lucida console",Monospace;
}
</style>
</head>
<body>
<h1>current date and time</h1>
<p id="p1"></p>
<p id="p2">This example shows the current date and time using
Javascript</p>
<script>
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-
'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" +
today.getSeconds(); var dateTime = date+' '+time;
document.getElementById("p1").innerHTML=dateTime;
</script>
</body>
</html>