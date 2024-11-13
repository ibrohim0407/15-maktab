function parolmatch(usernames, passwords, user, pass) {
  let res = false;
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === user && passwords[i] === pass) {
      res = true;
      break;  // Optional: To stop once a match is found
    }
  }
  return res;
}

document.getElementById('logintap').onclick = function(){
  let usernames; 
  let passwords;
  fetch('usernames.txt')
        .then(response => response.text())
        .then(data => {
            // Split the content by lines into an array
            usernames = data.split('\n');
        })
        .catch(error => console.error('Error fetching the file:', error));
  fetch('passwords.txt')
        .then(response => response.text())
        .then(data => {
            passwords = data.split('\n');
        })
        .catch(error => console.error('Error fetching the file:', error));
  user=document.getElementById("username").value;
  pass=document.getElementById("password").value;
  if(parolmatch(usernames,passwords,user,pass)){
    console.log("true password");
  }
  else{
    console.log("bad passoword")
  }
  
}
