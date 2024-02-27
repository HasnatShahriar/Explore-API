function loadUsers2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => displayUsers2(data))
}
function displayUsers2(users){
  const ul = document.getElementById('users');
  for (const user of users) {
    // console.log(user.id);
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
  }
  }