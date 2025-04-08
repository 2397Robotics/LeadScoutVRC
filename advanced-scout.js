// JavaScript for draggable functionality
const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
    draggable.addEventListener('mousedown', (e) => {
        const rect = draggable.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        function onMouseMove(event) {
            draggable.style.left = `${event.clientX - offsetX}px`;
            draggable.style.top = `${event.clientY - offsetY}px`;
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
});
