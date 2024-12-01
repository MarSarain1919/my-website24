// Create two image elements using JavaScript
const imageContainer=document.getElementById('image-container');

const image1=document.createElement('img');
image1.src='images/baked.jpeg';
image1.alt='Image 1';

const image2=document.createElement('img');
image2.src='images/lion.png';
image2.alt='Image 2';

// Append the images to the container
imageContainer.appendChild(image1);
imageContainer.appendChild(image2);