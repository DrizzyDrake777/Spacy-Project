document.addEventListener("DOMContentLoaded", function () {
    // Check if the user has visited the landing page before
    if (!localStorage.getItem('visitedLandingPage')) {
        // Set the flag in localStorage
        localStorage.setItem('visitedLandingPage', 'true');
    }
});

// Listen for the beforeunload event (when the page is being unloaded)
window.addEventListener("beforeunload", function () {
    // Add a class to trigger the logo transition
    document.body.classList.add("move-logo");
});