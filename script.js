function parolmatch(usernames,password,user,pass){
  let ans=false;
  
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
