document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
    const pictureWrapper = document.querySelector('.picture-wrapper');

    // Hide the left button initially but keep its margin
    leftButton.classList.add('hidden');

    // Initialize counters
    let rightButtonClickCount = 0;

    leftButton.addEventListener('click', function() {
        pictureWrapper.scrollBy({
            left: -2000, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });

        // Decrease the count of right button presses
        rightButtonClickCount--;

        // Hide the left button if the count of right button presses is zero
        if (rightButtonClickCount === 0) {
            leftButton.classList.add('hidden');
        }
    });

    rightButton.addEventListener('click', function() {
        pictureWrapper.scrollBy({
            left: 2000, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });

        // Increase the count of right button presses
        rightButtonClickCount++;

        // Show the left button when the right button is pressed
        leftButton.classList.remove('hidden');
    });

    // Add key event listeners for arrow keys
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            leftButton.click();
        } else if (event.key === 'ArrowRight') {
            rightButton.click();
        }
    });
});
