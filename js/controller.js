import { getUsers, getPostsByUser, getCommentsByPost } from "./model.js";
import { renderUsers, renderPosts, renderComments } from "./view.js";

export async function loadUsers() {
  try {
    const users = await getUsers();
    renderUsers(users);
  } catch {
    alert("Falha ao carregar usuários");
  }
}

export async function loadPosts(userId) {
  try {
    const posts = await getPostsByUser(userId);
    renderPosts(posts);
  } catch {
    alert("Falha ao carregar postagens");
  }
}

export async function loadComments(postId) {
  try {
    const comments = await getCommentsByPost(postId);
    renderComments(comments);
  } catch {
    alert("Falha ao carregar comentários");
  }
}

loadUsers();