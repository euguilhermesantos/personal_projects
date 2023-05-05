const add = document.querySelector(".add");
const input = document.querySelector("input");
const tasksList = document.querySelector(".tasks-list");
const remove = document.querySelector(".remove");
const pendingTasksTotal = document.querySelector(".pending-tasks");

add.addEventListener("keydown", pressEnterKey);
remove.addEventListener("click", removeElements);

function pressEnterKey(press){
   if(press.key === "Enter") {
      if(input.value === ""){
         alert("Please type task name...");
      }
      else{
         const saveInputValue = input.value;
         input.value = "";
         createElements(saveInputValue);
      }
   }
}

function createElements(taskName){
   const li = document.createElement("li");
   li.classList.add("task");

   const input = document.createElement("input");
   const label = document.createElement("label");
   label.textContent = `${taskName}`;
   
   li.appendChild(input); li.appendChild(label);
   tasksList.appendChild(li);

   const tasksTotal = document.querySelectorAll("li");

   setElementsAttribute(input, label, tasksTotal);

   pendingTasks(tasksTotal);
}

function setElementsAttribute(input, label, tasksTotal){
   for(var i = 0; i < (tasksTotal.length); i++){
      input.setAttribute("type", "checkbox");
      input.setAttribute("id", `checkbox-${i}`);
      label.setAttribute("for", `checkbox-${i}`);
   }
}

function removeElements() {
   const checkbox = document.querySelectorAll("input[type^='checkbox']");

   checkbox.forEach(input =>{
      if(input.checked){
         const saveParentElement = input.parentElement;

         tasksList.removeChild(saveParentElement);

         pendingTasks(tasksList.children);
      }
   });

}

function pendingTasks(tasksTotal){
   pendingTasksTotal.textContent = `${tasksTotal.length}`;
}



