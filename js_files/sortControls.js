// Add this to your existing sorting.js or create a new sortControls.js file

let sortingInterval;

// Function to enable sorting buttons after sorting process
function enableSortingBtn() {
    const sortingBtns = document.querySelectorAll(".buttons button");
    sortingBtns.forEach(btn => {
        btn.disabled = false;
    });
}

// Function to handle the play/pause functionality
function playPause() {
    const playPauseBtn = document.querySelector(".playPause");

    if (playPauseBtn.textContent === "Play") {
        disableSortingBtn();
        playPauseBtn.textContent = "Pause";
        sortingInterval = setInterval(() => {
            bubbleSort();
            insertionSort();
            selectionSort();
        }, getSpeed());
    } else {
        clearInterval(sortingInterval);
        enableSortingBtn();
        playPauseBtn.textContent = "Play";
    }
}

// Function to handle the skip back functionality
function skipBack() {
    clearInterval(sortingInterval);
    enableSortingBtn();
    playPauseBtn.textContent = "Play";
    // Implement your logic to skip back in the sorting process
}

// Function to handle the step back functionality
function stepBack() {
    clearInterval(sortingInterval);
    enableSortingBtn();
    playPauseBtn.textContent = "Play";
    // Implement your logic to step back in the sorting process
}

// Function to handle the step forward functionality
function stepForward() {
    clearInterval(sortingInterval);
    enableSortingBtn();
    playPauseBtn.textContent = "Play";
    // Implement your logic to step forward in the sorting process
}

// Function to handle the skip forward functionality
function skipForward() {
    clearInterval(sortingInterval);
    enableSortingBtn();
    playPauseBtn.textContent = "Play";
    // Implement your logic to skip forward in the sorting process
}

// Event listeners for the control buttons
document.querySelector(".playPause").addEventListener("click", playPause);
document.querySelector(".skipBack").addEventListener("click", skipBack);
document.querySelector(".stepBack").addEventListener("click", stepBack);
document.querySelector(".stepForward").addEventListener("click", stepForward);
document.querySelector(".skipForward").addEventListener("click", skipForward);
