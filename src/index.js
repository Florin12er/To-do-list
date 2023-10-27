import "./stlyle.css";


const goalContent = document.getElementById("content")
const add = document.getElementById("menu")

const addMainGoal = document.getElementById("Add_main_goal");

 const addArea = document.getElementById("add-area")
 const field = document.createElement("input")
 field.type = "text";
 field.classList.add("text-main-goal")
 const addButton = document.createElement("button");
 addButton.type = "submit";
 addButton.innerHTML = "add main goal"
 const cancelButton = document.createElement("button");
 addButton.classList.add("add-button")
 cancelButton.classList.add("cancel-button");
 cancelButton.innerHTML = "cancel"

 const nameGoal = document.createElement("div");
 const addTask = document.createElement("button");

nameGoal.classList.add("nameForGoal");
addTask.classList.add("addTask");

addMainGoal.addEventListener("click", () => {
    addMainGoal.style.visibility = "hidden"
    addArea.append(field, addButton, cancelButton)
     field.style.visibility = "visible";
 addButton.style.visibility = "visible";
 cancelButton.style.visibility = "visible";
    addArea.style.visibility = "visible";
})

cancelButton.addEventListener("click", () => {
 field.style.visibility = "hidden";
  addButton.style.visibility = "hidden";
 cancelButton.style.visibility = "hidden"
 addMainGoal.style.visibility = "visible";
})
addButton.addEventListener("click", () => {
    addArea.innerHTML = "";
    const create = document.createElement("button");
    create.classList.add("Goal-name");
    menu.append(create)
    addMainGoal.style.visibility = "visible";
    create.innerHTML = field.value;
    const createContent = document.querySelector(".Goal-name")
  console.log(create.innerHTML)
    createContent.addEventListener("click", () => {
       goalContent.append(nameGoal,addTask)
       addTask.innerHTML = "add task"
       nameGoal.innerHTML = create.innerHTML;
})
})
const field2 = document.createElement("input")
const addGoal2 = document.createElement("button")
const cancelGoal = document.createElement("button")

field2.type = "text"
addGoal2.type = "submit"
cancelGoal.type = "button";

field2.classList.add("field2")
addGoal2.classList.add("add-task")
cancelGoal.classList.add("cancel")

addGoal2.innerHTML = "add task"
cancelGoal.innerHTML = "cancel";


addTask.addEventListener("click", () =>{
  goalContent.innerHTML = ""
  goalContent.append(field2, addGoal2, cancelGoal);
})

addGoal2.addEventListener("click", () => {
  const taskName = document.createElement("div");
taskName.classList.add("taskName");
  content.append(taskName);
const date = document.createElement("input");
date.type = "date";
date.classList.add("date");

const checkbox = document.createElement("input")
checkbox.type = "checkbox";
checkbox.classList.add("checkbox")


  taskName.append(checkbox, field2.value, date)

  checkbox.addEventListener("click", () => {
    taskName.innerHTML = "";
  })
})

cancelGoal.addEventListener("click", () => {
  content.innerHTML = "";
  content.append(addTask);
})




