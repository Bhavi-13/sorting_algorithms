// Function to generate random heights for the existing array
function randomizeArray() {
    const bars = document.querySelectorAll(".bar");
    bars.forEach(bar => {
        const newHeight = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
        bar.style.height = `${newHeight}%`;
    });
}

// Event listener for the "Randomized Array" button
const randomArrayBtn = document.querySelector(".randomArray");
randomArrayBtn.addEventListener("click", function () {
    randomizeArray();
});
