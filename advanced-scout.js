// JavaScript for draggable functionality and adding/removing rings
const scoutingFrame = document.querySelector('.scouting-frame');
const addRedRingButton = document.getElementById('add-red-ring');
const addBlueRingButton = document.getElementById('add-blue-ring');
const trashBin = document.getElementById('trash-bin');

// Function to make an element draggable
function makeDraggable(element) {
    element.addEventListener('mousedown', (e) => {
        let offsetX = e.clientX - element.getBoundingClientRect().left;
        let offsetY = e.clientY - element.getBoundingClientRect().top;

        function onMouseMove(event) {
            let newX = event.clientX - offsetX;
            let newY = event.clientY - offsetY;

            // Constrain movement within the scouting frame
            const frameRect = scoutingFrame.getBoundingClientRect();
            const elementRect = element.getBoundingClientRect();

            if (newX < frameRect.left) newX = frameRect.left;
            if (newY < frameRect.top) newY = frameRect.top;
            if (newX + elementRect.width > frameRect.right) newX = frameRect.right - elementRect.width;
            if (newY + elementRect.height > frameRect.bottom) newY = frameRect.bottom - elementRect.height;

            element.style.left = `${newX - frameRect.left}px`;
            element.style.top = `${newY - frameRect.top}px`;
        }

        function onMouseUp(event) {
            // Check if the element is dropped inside the trash bin
            const trashRect = trashBin.getBoundingClientRect();
            const elementRect = element.getBoundingClientRect();

            if (
                elementRect.right > trashRect.left &&
                elementRect.left < trashRect.right &&
                elementRect.bottom > trashRect.top &&
                elementRect.top < trashRect.bottom
            ) {
                element.remove(); // Delete the element
            }

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
}

// Add Red Ring
addRedRingButton.addEventListener('click', () => {
    const redRing = document.createElement('img');
    redRing.src = 'red-ring.png';
    redRing.classList.add('draggable', 'red-ring');
    redRing.style.position = 'absolute';
    redRing.style.left = '10px';
    redRing.style.top = '10px';
    scoutingFrame.appendChild(redRing);
    makeDraggable(redRing);
});

// Add Blue Ring
addBlueRingButton.addEventListener('click', () => {
    const blueRing = document.createElement('img');
    blueRing.src = 'blue-ring.png';
    blueRing.classList.add('draggable', 'blue-ring');
    blueRing.style.position = 'absolute';
    blueRing.style.left = '10px';
    blueRing.style.top = '10px';
    scoutingFrame.appendChild(blueRing);
    makeDraggable(blueRing);
});

// Make existing elements draggable
document.querySelectorAll('.draggable').forEach(makeDraggable);
