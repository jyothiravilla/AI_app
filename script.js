const inputField = document.getElementById('input-field');
const submitButton = document.getElementById('submit-button');
const image = document.getElementById('image');

submitButton.addEventListener('click', handleSubmit);
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSubmit();
    }
});

function handleSubmit() {
    const prompt = inputField.value.trim();
    if (prompt !== '') {
        // Make a request to the Cloudflare AI endpoint to generate an image
        fetch(`https://your-cloudflare-worker-endpoint.com/generate-image?prompt=${prompt}`)
            .then((response) => response.blob())
            .then((blob) => {
                const url = URL.createObjectURL(blob);
                image.src = url;
            })
            .catch((error) => console.error(error));
    }
}