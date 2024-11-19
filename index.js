import { fetchPosts, fetchComments, createPost } from './api.js';
import { displayPost, displayComment, showSuccessMessage } from './ui.js';

const postsContainer = document.getElementById('posts-container');
const newPostForm = document.getElementById('new-post-form');
const successMessage = document.getElementById('success-message');

async function loadPosts() {
    try {
        const posts = await fetchPosts();
        posts.forEach(post => displayPost(post, postsContainer, loadComments));
    } catch (error) {
        console.error('Помилка завантаження постів:', error);
    }
}

async function loadComments(postId, button) {
    try {
        button.disabled = true;
        const comments = await fetchComments(postId);

        const commentsContainer = document.getElementById(`comments-${postId}`);
        comments.forEach(comment => displayComment(comment, commentsContainer));
    } catch (error) {
        console.error(`Помилка завантаження коментарів для поста ${postId}:`, error);
    }
}

newPostForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    try {
        const newPost = await createPost({ title, body, userId: 1 });
        displayPost(newPost, postsContainer, loadComments);
        showSuccessMessage(successMessage);

        newPostForm.reset();
    } catch (error) {
        console.error('Помилка при створенні поста:', error);
    }
});

loadPosts();
