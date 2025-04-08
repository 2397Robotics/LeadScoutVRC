// JavaScript for draggable functionality
const draggables = document.querySelectorAll('.draggable');
const scoutingFrame = document.querySelector('.scouting-frame');

draggables.forEach(draggable => {
    draggable.addEventListener('mousedown', (e) => {
        let offsetX = e.clientX - draggable.getBoundingClientRect().left;
        let offsetY = e.clientY - draggable.getBoundingClientRect().top;

        function onMouseMove(event) {
            // Calculate new position
            let newX = event.clientX - offsetX;
            let newY = event.clientY - offsetY;

            // Constrain movement within the scouting frame
            const frameRect = scoutingFrame.getBoundingClientRect();
            const draggableRect = draggable.getBoundingClientRect();

            if (newX < frameRect.left) newX = frameRect.left;
            if (newY < frameRect.top) newY = frameRect.top;
            if (newX + draggableRect.width > frameRect.right) newX = frameRect.right - draggableRect.width;
            if (newY + draggableRect.height > frameRect.bottom) newY = frameRect.bottom - draggableRect.height;

            // Apply new position
            draggable.style.left = `${newX - frameRect.left}px`;
            draggable.style.top = `${newY - frameRect.top}px`;
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
});
