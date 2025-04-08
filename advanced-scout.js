// JavaScript for draggable functionality and fetching alliance team numbers
const draggables = document.querySelectorAll('.draggable');
const scoutingFrame = document.querySelector('.scouting-frame');

// Default team numbers
const defaultTeamNumber = "2397A";

// API URL to fetch alliance team numbers (replace with your actual API endpoint)
const apiUrl = "https://example.com/api/alliances";

// Function to fetch alliance team numbers
async function fetchAllianceTeamNumbers() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch alliance data");
        const data = await response.json();

        // Update rectangles with team numbers or default if not found
        document.getElementById("red-alliance-1").textContent = data.redAlliance1 || defaultTeamNumber;
        document.getElementById("red-alliance-2").textContent = data.redAlliance2 || defaultTeamNumber;
        document.getElementById("blue-alliance-1").textContent = data.blueAlliance1 || defaultTeamNumber;
        document.getElementById("blue-alliance-2").textContent = data.blueAlliance2 || defaultTeamNumber;
    } catch (error) {
        console.error("Error fetching alliance team numbers:", error);

        // Use default team numbers if API call fails
        document.getElementById("red-alliance-1").textContent = defaultTeamNumber;
        document.getElementById("red-alliance-2").textContent = defaultTeamNumber;
        document.getElementById("blue-alliance-1").textContent = defaultTeamNumber;
        document.getElementById("blue-alliance-2").textContent = defaultTeamNumber;
    }
}

// Call the function to fetch team numbers
fetchAllianceTeamNumbers();

// Draggable functionality
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
