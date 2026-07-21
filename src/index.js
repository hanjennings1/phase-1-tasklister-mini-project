// wait for HTML to load before selecting elements:
document.addEventListener("DOMContentLoaded", () => {
  // select the form:
  const form = document.getElementById("create-task-form"); 
  // select the task list:
  const taskList = document.getElementById("tasks");

  // listen for form submission:
  form.addEventListener("submit", (event) => {
    handleSubmit(event);
  });

  // one listener handles clicks on any current or future li/button
  taskList.addEventListener("click", (event) => {
    handleTaskListClick(event);
  });
});

function handleTaskListClick(event) {
  // delete: remove the parent li if a delete button was clicked
  if (event.target.className === "delete-btn") {
    event.target.parentElement.remove();
  }

  // complete: toggle a class on the li if the li itself (not the button) was clicked
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
}

// handle form submission:
function handleSubmit(event){
  //prevent page refresh on submission:
	event.preventDefault()
    
  // handle form data; selecr correct target from event & save it to a variable:
  const taskDescription = event.target.elements["new-task-description"].value;
  // adding new 'date due' field:
  const dueDate = event.target.elements["new-task-due-date"].value;
  
  // function call:
  buildToDo(taskDescription, dueDate);
}


    // function definition:
    function buildToDo(taskDescription, dueDate) {
      // create a new li element
      const li = document.createElement("li");
      // set its text to the task description
      if (dueDate) {
        li.textContent = `${taskDescription} - Due: ${dueDate}`;
      } else {
        li.textContent = taskDescription;
      }

        // create a delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        li.appendChild(deleteBtn);

      // select the task list and append the new li
      const taskList = document.getElementById("tasks");
      taskList.appendChild(li);
  }

