const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){ //삭제
    const li=event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo) => toDo.id !==parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){ //화면에 표시
    const li=document.createElement("li");
    li.id=newTodo.id;

    const span=document.createElement("span");
    span.innerText=newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span); //li 안에 span 존재
    li.appendChild(button); //append는 맨 뒤에다 넣는 것
    toDoList.appendChild(li); 
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value=""; //내용 삭제(빈칸으로 만들기)

    const newTodoObj={
        text:newTodo,
        id: Date.now() //현재 시간을 밀리초로 반환
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos=localStorage.getItem(TODOS_KEY);
if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}