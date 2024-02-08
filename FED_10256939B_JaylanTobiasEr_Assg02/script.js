var user = {
    username: "1",
    password: "5",
    score: 0,
    email: " "

  };


  var userPoints = 0;

  
  function signup() {
      var newusername = document.getElementById("username").value;
      var newpassword = document.getElementById("password").value;
      var newpassword2 = document.getElementById("password2").value;
      var email = document.getElementById("email").value;
      if (newpassword === newpassword2) {
          user.username = newusername;
          user.password = newpassword;
          user.email =email;
          var existingUsers = JSON.parse(localStorage.getItem('Anotherusers')) || [];
            
            existingUsers.push(user);
           
            localStorage.setItem('Anotherusers', JSON.stringify(existingUsers));
          alert("New has been user created.");
          console.log(user.username);
          window.location.href = "login.html";

          
      }
      else{
        alert("You keyed in somthing wrong! Try again");
      }
  }
  



 


  function login() {
    
    var username = document.getElementById("user").value;
    var password = document.getElementById("secret").value;
    
    var users = JSON.parse(localStorage.getItem('Anotherusers')) || [];

    
    var user = users.find(u => u.username === username && u.password === password);

    if (user) {
        console.log("You have logged in.");
        console.log("Username:", user.username);
        alert("You have logged in.");
        userinfo = user.username;
        window.location.href = "quizzespage.html";
       
    
      } else {
        console.log("Please try again.");
        alert("Your password or username is wrong.");
      }

    
}





if (!sessionStorage.getItem("userscore")) {
  sessionStorage.setItem("userscore", 0);
}





function buttonredirect() {
    let userPoints = parseInt(sessionStorage.getItem("userscore")); 
    userPoints++;
    alert("The answer is correct!");
    sessionStorage.setItem("userscore", userPoints);
    console.log(userPoints);

    
    
  }

  function wronganswer(){
    alert("The answer is incorrect!");
    
    
  }

  function showfinalscore(){
    let userPoints = parseInt(sessionStorage.getItem("userscore")); 
    document.getElementById("points").innerHTML = "Points: " + userPoints;

  }