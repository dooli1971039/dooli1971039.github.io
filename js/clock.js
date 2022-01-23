const clock=document.querySelector("h1#clock");

function sayHello(){
    console.log("hello");
}

function getClock(){
    const date=new Date();
    //clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}



getClock();
setInterval(getClock,1000); //1초마다 계속 호출