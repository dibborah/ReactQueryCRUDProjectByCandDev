export async function fetchPosts() {
    const response = await fetch("http://localhost:3000/posts");
    return response.json();
}