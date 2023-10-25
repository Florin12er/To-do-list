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
 const cancelButton = document.createElement("button");
 addButton.classList.add("add-button")
 cancelButton.classList.add("cancel-button");


 const nameGoal = document.createElement("div");
 const addTask = document.createElement("button");



addMainGoal.addEventListener("click", () => {
    addMainGoal.style.visibility = "hidden"
    addArea.append(field, addButton, cancelButton)
    addArea.style.visibility = "visible";
})


addButton.addEventListener("click", () => {
    addArea.innerHTML = "";
    const create = document.createElement("button");
    create.classList.add("Goal-name");
    menu.append(create)
    addMainGoal.style.visibility = "visible";
    create.innerHTML = field.value;
    const createContent = document.querySelector(".Goal-name")
    createContent.addEventListener("click", () => {
       goalContent.append(nameGoal, addTask)
})
})




