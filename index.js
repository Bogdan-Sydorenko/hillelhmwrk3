const imageFiles = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg'];

const randomIndex = Math.floor(Math.random() * imageFiles.length);

const randomImage = imageFiles[randomIndex];

document.getElementById('randomImage').src = randomImage;
