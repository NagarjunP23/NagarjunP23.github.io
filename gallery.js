// Get all the gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Loop through each gallery item
galleryItems.forEach((item) => {
    const image = item.querySelector('img');

    // Add a click event listener to each image
    image.addEventListener('click', () => {
        // Create a modal element
        const modal = document.createElement('div');
        modal.classList.add('modal');

        // Create an enlarged image element
        const enlargedImage = document.createElement('img');
        enlargedImage.src = image.src;
        enlargedImage.alt = image.alt;

        // Add the enlarged image to the modal
        modal.appendChild(enlargedImage);

        // Add the modal to the body
        document.body.appendChild(modal);

        // Close the modal when clicked outside the image
        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});
