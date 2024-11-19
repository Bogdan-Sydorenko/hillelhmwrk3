const API_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts(limit = 10) {
    const response = await fetch(`${API_URL}/posts?_limit=${limit}`);
    return response.json();
}

export async function fetchComments(postId, limit = 2) {
    const response = await fetch(`${API_URL}/posts/${postId}/comments?_limit=${limit}`);
    return response.json();
}

export async function createPost(postData) {
    const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    });

    if (!response.ok) {
        throw new Error('Failed to create post');
    }

    return response.json();
}
