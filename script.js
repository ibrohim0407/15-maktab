document.getElementById('logintap').onclick = async function() {
  // Get user input
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  try {
    // Fetch the content of both files
    const [usernamesData, passwordsData] = await Promise.all([
      fetch('usernames.txt').then(response => response.text()),
      fetch('passwords.txt').then(response => response.text())
    ]);

    // Split the data into lines (assuming each line is a username/password pair)
    let usernames = usernamesData.split('\n').map(line => line.trim());
    let passwords = passwordsData.split('\n').map(line => line.trim());
    console.log(usernames);
    console.log(passwords);
    let isValid = false;
    for (let i = 0; i < usernames.length; i++) {
      if (usernames[i] === user && passwords[i] === pass) {
        isValid = true;
        break;
      }
    }

    if (isValid) {
      document.getElementById("h1tagi").textContent="true password";
    } else {
      document.getElementById("h1tagi").textContent="bad password";
    }
  } catch (error) {
    console.error('Error fetching the files:', error);
  }
};
