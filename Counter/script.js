var div=document.getElementById("boxdiv")
var para=document.getElementById("count")
var btn1=document.getElementById("btn-click")
var btn2=document.getElementById("btn-reset")
var btn3=document.getElementById("clr-change1")
var btn4=document.getElementById("clr-change2")
var count=0
function countIncrease(){

count++
document.getElementById("count").style.fontSize="20px"
document.getElementById("count").style.fontWeight="bold"
document.getElementById("count").textContent="count:"+count
   if(count%5==0){
    document.getElementById("boxdiv").style.height="100px"
    document.getElementById("boxdiv").style.width="100px"

    document.getElementById("boxdiv").style.borderRadius="50px"
   }
   else if(count%2==0){
    document.getElementById("boxdiv").style.height="100px"
    document.getElementById("boxdiv").style.width="100px"
    document.getElementById("boxdiv").style.borderRadius="0px"
   }
   else{
    document.getElementById("boxdiv").style.height="100px"
    document.getElementById("boxdiv").style.width="200px"
    document.getElementById("boxdiv").style.borderRadius="0px"
   }
}

function reset(){
  count=0
    document.getElementById("count").innerHTML="count:"+count
    document.getElementById("boxdiv").style.backgroundColor="black"
    document.getElementById("boxdiv").style.height="100px"
    document.getElementById("boxdiv").style.width="200px"
}

function clrChangeRed(){

    document.getElementById("boxdiv").style.backgroundColor="red"
}
function clrChangeblue(){

    document.getElementById("boxdiv").style.backgroundColor="blue"
}