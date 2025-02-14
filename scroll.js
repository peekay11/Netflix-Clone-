document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
    const pictureWrapper = document.querySelector('.picture-wrapper');

    leftButton.addEventListener('click', function() {
        pictureWrapper.scrollBy({
            left: -2000, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', function() {
        pictureWrapper.scrollBy({
            left: 2000, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });
    });
});
