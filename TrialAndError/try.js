const draggables = document.querySelectorAll('.draggable');
const dropButton = document.getElementById('drop-button');
const iframe = document.getElementById('iframe');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.src);
    });
});

dropButton.addEventListener('dragover', (event) => {
    event.preventDefault();
});

dropButton.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    localStorage.setItem('droppedImageSrc', data);
    updateIframe();
});

function updateIframe() {
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    const imageSrc = localStorage.getItem('droppedImageSrc');
    if (imageSrc) {
        const droppedImage = iframeDocument.getElementById('dropped-image');
        if (droppedImage) {
            droppedImage.src = imageSrc;
        }
    }
}

// Update the iframe when the page loads
iframe.addEventListener('load', updateIframe);