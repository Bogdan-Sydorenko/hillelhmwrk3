export function createPostCard(post, onLoadComments) {
    const postCard = document.createElement('div');
    postCard.classList.add('post-card');
    postCard.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button>Завантажити коментарі</button>
        <div class="comments" id="comments-${post.id}"></div>
    `;

    const button = postCard.querySelector('button');
    button.addEventListener('click', () => onLoadComments(post.id, button));

    return postCard;
}

export function displayPost(post, container, onLoadComments) {
    const postCard = createPostCard(post, onLoadComments);
    container.appendChild(postCard);
}

export function displayComment(comment, container) {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `
        <p><strong>${comment.name}</strong> (${comment.email}):</p>
        <p>${comment.body}</p>
    `;
    container.appendChild(commentElement);
}

export function showSuccessMessage(messageElement, duration = 3000) {
    messageElement.style.display = 'block';
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, duration);
}
