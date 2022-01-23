const loginForm=document.querySelector("#login-form")
const loginInput=document.querySelector("#login-form input")

const greeting=document.querySelector("#greeting");
const link=document.querySelector("a");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    event.preventDefault();  //브라우저의 기본 동작을 막아준다.
    const username=loginInput.value;
    console.log(loginInput.value);
    localStorage.setItem(USERNAME_KEY,username);  //(key,value)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings();
}

// function handleLinkClick(event){
//     event.preventDefault();
//     console.log(event)
//     alert("click");
// }

//loginForm.addEventListener("submit",onLoginSubmit);
//link.addEventListener("click",handleLinkClick);

function paintGreetings(){
    const username=localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText=`Hello ${username}`;
}

const savedUsername=localStorage.getItem(USERNAME_KEY);
if (savedUsername===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the greetings
    paintGreetings();
}