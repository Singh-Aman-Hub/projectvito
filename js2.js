// animations.js

document.addEventListener('DOMContentLoaded', () => {
    // Slide-in animation for form container
    const formContainer = document.querySelector('.animate-slide-in');
    formContainer.style.opacity = 0;
    formContainer.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
        formContainer.style.transition = 'all 0.5s ease-in-out';
        formContainer.style.opacity = 1;
        formContainer.style.transform = 'translateY(0)';
    }, 100);
    
    // Button hover animation for submit button
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('mouseover', () => {
        submitButton.style.transform = 'scale(1.05)';
    });
    
    submitButton.addEventListener('mouseout', () => {
        submitButton.style.transform = 'scale(1)';
    });
});
// js2.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const symptoms = document.getElementById('symptoms').value;
        const history = document.getElementById('history').value;
        const householdSymptoms = document.getElementById('household_symptoms').value;
        const allergies = document.getElementById('allergies').value;
        const duration = document.getElementById('duration').value;
        const lastFood = document.getElementById('last_food').value;
        const bpLevel = document.getElementById('bp_level').value;
        const sugarLevel = document.getElementById('sugar_level').value;
        const diseaseContact = document.getElementById('disease_contact').value;
        const medicoDevices = document.getElementById('medico_devices').value;
        const pastConsult = document.getElementById('past_consult').value;

        // Basic validation
        if (!name || !age || !gender || !symptoms) {
            alert("Please fill out all required fields.");
            return; // Exit the function if validation fails
        }

        // Prepare data object
        const formData = {
            name,
            age,
            gender,
            symptoms,
            history,
            householdSymptoms,
            allergies,
            duration,
            lastFood,
            bpLevel,
            sugarLevel,
            diseaseContact,
            medicoDevices,
            pastConsult
        };

        console.log('Form Data Submitted:', formData); // For testing, log the data
        alert("Symptoms submitted successfully!"); // Notify user of success

        // Optionally, reset the form after submission
        form.reset();
    });
});


