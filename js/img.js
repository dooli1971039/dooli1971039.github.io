const images=["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.jpg","8.jpg","9.jpg"];

const chosenImage=images[Math.floor(Math.random()*images.length)];

const left=document.querySelector("#left");

src=`img/${chosenImage}`;
const img=document.querySelector("#mushroom");
img.src=src; 
