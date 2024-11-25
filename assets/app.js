// Function to change text when the button is clicked
document.getElementById('changeTextButton').addEventListener('click', function() {
    const content = document.getElementById('content');
    content.innerHTML = '<p>You clicked the button! The text has changed.</p>';
});
