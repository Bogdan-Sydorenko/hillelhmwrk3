const API_URL = 'https://jsonplaceholder.typicode.com';

const postsContainer = document.getElementById('posts-container');
const newPostForm = document.getElementById('new-post-form');
const successMessage = document.getElementById('success-message');

async function loadPosts() {
    try {
        const response = await fetch(`${API_URL}/posts?_limit=10`);
        const posts = await response.json();

        posts.forEach(post => displayPost(post));
    } catch (error) {
        console.error('Помилка завантаження постів:', error);
    }
}

function displayPost(post) {
    const postCard = document.createElement('div');
    postCard.classList.add('post-card');
    postCard.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button onclick="loadComments(${post.id}, this)">Завантажити коментарі</button>
        <div class="comments" id="comments-${post.id}"></div>
    `;
    postsContainer.appendChild(postCard);
}

async function loadComments(postId, button) {
    try {
        button.disabled = true;
        const response = await fetch(`${API_URL}/posts/${postId}/comments?_limit=2`);
        const comments = await response.json();

        const commentsContainer = document.getElementById(`comments-${postId}`);
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                <p><strong>${comment.name}</strong> (${comment.email}):</p>
                <p>${comment.body}</p>
            `;
            commentsContainer.appendChild(commentElement);
        });
    } catch (error) {
        console.error(`Помилка завантаження коментарів для поста ${postId}:`, error);
    }
}

newPostForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    try {
        const response = await fetch(`${API_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            })
        });

        if (response.ok) {
            const newPost = await response.json();
            displayPost(newPost);
            successMessage.style.display = 'block';

            newPostForm.reset();

            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        } else {
            console.error('Помилка при створенні поста');
        }
    } catch (error) {
        console.error('Помилка при створенні поста:', error);
    }
});

loadPosts();

