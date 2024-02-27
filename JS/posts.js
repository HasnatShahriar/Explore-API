function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts) {
  // console.log(posts);
  const postContainer = document.getElementById('posts-container');
  for (const post of posts) {
    console.log(post);
    const divPost = document.createElement('div');
    divPost.classList.add('posts')
    divPost.innerHTML = `
      <h3>userId: ${post.userId}</h3>
      <h4>Id: ${post.id}</h4>
      <h4>Title: ${post.title}</h4>
      <p>body: ${post.body}</p>
    `
    postContainer.appendChild(divPost);
  }
}

loadPosts();