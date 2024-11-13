function parolmatch(usernames, passwords, user, pass) {
  let res = false;
  let s=0;
  for(let x of usernames){
    s=s+1;
  }
  for (let i = 0; i < s; i++) {
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
  if(parolmatch(usernames,passwords,user,pass) === true){
    console.log("true password");
  }
  else{
    console.log("bad passoword")
  }
  
}
