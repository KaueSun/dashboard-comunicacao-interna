const API = "https://jsonplaceholder.typicode.com";

async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Falha na requisição:", error);
    throw error;
  } finally {
    clearTimeout(id);
  }
}

export async function getUsers() {
  return fetchWithTimeout(`${API}/users`);
}

export async function getPostsByUser(userId) {
  return fetchWithTimeout(`${API}/posts?userId=${userId}`);
}

export async function getCommentsByPost(postId) {
  return fetchWithTimeout(`${API}/posts/${postId}/comments`);
}