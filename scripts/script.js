let users =JSON.parse(localStorage.getItem("users")) || [];

function signup(){
  event.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  if(email && password)
  {
    users.push({email,password})
    localStorage.setItem("users",JSON.stringify(users));
    alert("User registered successfully")
  }
  else{
    alert("Please fill all details");
  }
}

function login()
{
  event.preventDefault();
  let email = document.getElementById('email-login').value;
  let password = document.getElementById('password-login').value;
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if(email && password)
  {
    const user = users.find(user => user.email === email && user.password ===password)
    if(user)
    {
        alert("login successfully")
        setCookie("userEmail",email,20);
        window.location.href = "todolist.html";
    }
    else{
        alert("credentials do not match");
    }
  }
  else{
    alert("please enter your credentials");
  }
}

function setCookie(name,value,time)
{
  let d= new Date();
  d.setTime(d.getTime() + (time*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

