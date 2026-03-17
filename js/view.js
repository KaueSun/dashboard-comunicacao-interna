export function renderUsers(users) {
  const list = document.getElementById("users");
  list.innerHTML = "";

  users.slice(0, 4).forEach(user => {

    const li = document.createElement("li");
    li.innerHTML = `
<strong>${user.name}</strong><br>
<small>${user.email}</small>
`;

    li.onclick = () => import("./controller.js").then(m => m.loadPosts(user.id));

    list.appendChild(li);
  });
}

export function renderPosts(posts) {
  const list = document.getElementById("posts");
  list.innerHTML = "";

  posts.forEach(post => {

    const li = document.createElement("li");
    li.innerHTML = `
<strong>${post.title}</strong><br>
<small>${post.body}</small>
`;

    li.onclick = () => import("./controller.js").then(m => m.loadComments(post.id));

    list.appendChild(li);
  });
}

export function renderComments(comments) {
  const list = document.getElementById("comments");
  list.innerHTML = "";

  comments.forEach(comment => {

    const li = document.createElement("li");
    li.innerHTML = `
<strong>${comment.name}</strong><br>
<small>${comment.email}</small><br>
<p>${comment.body}</p>
`;

    list.appendChild(li);
  });
}