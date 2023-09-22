const start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset")
const wm=document.getElementById("w_minutes");
const ws=document.getElementById("w_seconds");
const bm=document.getElementById("b_minutes");
const bs=document.getElementById("b_seconds");
// Taking a reference variable
var startTimer;
// Creating an event on start button
start.addEventListener("click",function(){
     if(startTimer==undefined){
        startTimer=setInterval(Timer,1000);
     }else{
        alert("Timer is already running!!!!. So pls don't press start button again and again.")
     }
})
// Creating an event on reset button
reset.addEventListener("click", function(){
     wm.innerText=25;
     ws.innerText="00";
     bm.innerText=5;
     bs.innerText="00";
     document.getElementById("counter").innerText=0;
     stopInterval();
     startTimer=undefined;
})
// Creating an event on pause button.
stop.addEventListener("click", function(){
    stopInterval();
    startTimer=undefined;
})
// Creating a timer function
function Timer(){
    //  for work
    if(ws.innerText!=0){
       ws.innerText--;
    }
    else if(wm.innerText!=0 && ws.innerText==0){
        ws.innerText=59;
        wm.innerText--;
    }
    // For Cycles
    if(wm.innerText==0 && ws.innerText==0 && bm.innerText==0 && bs.innerText==0){
        wm.innerText=25;
        ws.innerText="00";
        bm.innerText=5;
        bs.innerText="00";
        document.getElementById("counter").innerText++;
    }
    // For Break
    if(wm.innerText==0 && ws.innerText==0){
        if(bs.innerText!=0){
            bs.innerText--;
        }
        else if(bm.innerText!=0 && bs.innerText==0){
            bs.innerText=59;
            bm.innerText--;
        }
    }
   
}
function stopInterval(){
    clearInterval(startTimer);
}