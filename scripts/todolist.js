function checkAuth() {
  let userEmail = getCookie("userEmail");
  if (!userEmail) {
      alert("You must log in first!");
      window.location.href = "login.html"; 
  }
}
checkAuth();



const todoList = JSON.parse(localStorage.getItem('todoList')) ||
 [];

updateList();
console.log(todoList)

document.querySelector('.js-add-button').addEventListener('click',()=>{
  addToList2();
})



function addToList2()
{
  const inputValue=document.querySelector('.js-name-input2')
  const todo=inputValue.value;

  const dateInputValue = document.querySelector('.js-due-date-input');
  const dueDate = dateInputValue.value;

  todoList.push({
    name: todo,
    dueDate
  });

  document.querySelector('.js-name-input2').value = '';

  updateList();
}

function updateList()
{
  let todoListHTML = '';
  
  todoList.forEach((todoObject,index) =>{
    const {name,dueDate} = todoObject;
    const html=`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button js-delete-button">
      Delete 
    </button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-listOfTasks').innerHTML=todoListHTML;

  document.querySelectorAll('.js-delete-button').forEach( (deleteButton,index) => {
    deleteButton.addEventListener('click',()=>{
      todoList.splice(index,1);
      updateList();
    }) 
  });

  localStorage.setItem('todoList', JSON.stringify(todoList))
}


function getCookie(name) {
  let cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
      let [key, value] = cookie.split("=");
      if (key === name) {
          return value;
      }
  }
  return null;
}

function logout() {
  document.cookie = "userEmail=; expires=TUE, 18 FEB 2025 00:00:00 UTC; path=/;";
  alert("Logged out successfully!");
  window.location.href = "login.html";
}