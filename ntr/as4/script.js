// Function to generate noise background image
function generateNoiseImage() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255; // Random grayscale value
        data[i] = value;     // Red channel
        data[i + 1] = value; // Green channel
        data[i + 2] = value; // Blue channel
        data[i + 3] = 255;   // Alpha channel (fully opaque)
    }

    ctx.putImageData(imageData, 0, 0);

    return canvas.toDataURL(); // Convert canvas to data URL
}

// Function to update the background image
function updateBackgroundImage() {
    const noiseBackground = document.getElementById('noiseBackground');
    noiseBackground.src = generateNoiseImage(); // Set the src attribute to the generated image
}

// Function to remove the background image
function removeBackgroundImage() {
    const noiseBackground = document.getElementById('noiseBackground');
    noiseBackground.src = ''; // Remove the image by clearing the src attribute
}

// Initial background setup
updateBackgroundImage();

// Update background every minute (60000 milliseconds)
setInterval(updateBackgroundImage, 60000);

// Button events
document.getElementById('updateBackground').addEventListener('click', updateBackgroundImage);
document.getElementById('removeBackground').addEventListener('click', removeBackgroundImage);

// Navigation link events
document.getElementById('updateBackgroundNav').addEventListener('click', (e) => {
    e.preventDefault();
    updateBackgroundImage();
});

document.getElementById('removeBackgroundNav').addEventListener('click', (e) => {
    e.preventDefault();
    removeBackgroundImage();
});