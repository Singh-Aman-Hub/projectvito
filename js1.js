document.addEventListener("DOMContentLoaded", () => {
    // Fade-in animation for the "Top Rated Doctors" section
    const doctorsSection = document.getElementById("doctors-section");
    doctorsSection.style.opacity = 0;
    doctorsSection.style.transition = "opacity 2s ease-in-out";

    // Scroll event listener to fade in the doctors section
    window.addEventListener("scroll", () => {
        const sectionPosition = doctorsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (sectionPosition < screenPosition) {
            doctorsSection.style.opacity = 1;
        }
    });

    // Hover animation for each doctor card (scale effect)
    const doctorCards = document.querySelectorAll(".doctor-card");
    doctorCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });
});
// Select the Consult Online button
document.getElementById('consultOnlineBtn').addEventListener('click', function() {
    // Redirect to the video consultation page
    window.location.href = 'videopage.html'; // Change to the actual URL of the video consultation page
});
