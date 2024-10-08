const textBlock = document.getElementById('text-block');

const button = document.getElementById('toggle-button');

const defaultColor = 'black';

const newColor = 'red';

button.addEventListener('click', () => {
    if (textBlock.style.color === newColor) {
        textBlock.style.color = defaultColor;
    } else {
        textBlock.style.color = newColor;
    }
});
