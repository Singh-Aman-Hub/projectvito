function selectDoctor() {
    const doctorSelect = document.getElementById('doctor');
    const doctorInfo = document.getElementById('doctor-info');
    const scheduleSection = document.getElementById('schedule-section');

    if (doctorSelect.value === "") {
        doctorInfo.classList.add('hidden');
        scheduleSection.classList.add('hidden');
        return;
    }

    const [doctorName, specialty, availability] = doctorSelect.value.split(', ');

    // Update doctor info on the page
    document.getElementById('doctor-name').textContent = doctorName;
    document.getElementById('doctor-specialty').textContent = `Specialty: ${specialty}`;
    document.getElementById('doctor-availability').textContent = `Availability: ${availability}`;

    // Show the doctor info section and schedule section
    doctorInfo.classList.remove('hidden');
    scheduleSection.classList.remove('hidden');
}
