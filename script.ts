// Handle the profile picture upload
document.getElementById('upload-pic')?.addEventListener('change', (event) => {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files ? fileInput.files[0] : null;

    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const profilePicElement = document.getElementById('profile-pic') as HTMLImageElement;
            profilePicElement.src = reader.result as string; // Set the uploaded image as the new source
        };
        reader.readAsDataURL(file);
    }
});

// Handle the form submission and update the resume
document.getElementById('resume-form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get input values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const skillsInput = (document.getElementById('skills') as HTMLInputElement).value;
    const educationInput = (document.getElementById('education') as HTMLInputElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const personalInfo = (document.getElementById('personal-info') as HTMLTextAreaElement).value;
    const certificatesInput = (document.getElementById('certificates') as HTMLInputElement).value;

    // Update resume name, job title, and email
    document.getElementById('resume-name')!.innerText = name;
    document.getElementById('resume-job-title')!.innerText = jobTitle;
    document.getElementById('resume-email')!.innerText = email;

    // Update skills list
    const skillsList = skillsInput.split(',').map(skill => skill.trim());
    const skillsListElement = document.getElementById('skills-list')!;
    skillsListElement.innerHTML = skillsList.map(skill => `<li>${skill}</li>`).join('');

    // Update education list
    const educationList = educationInput.split(',').map(edu => edu.trim());
    const educationListElement = document.getElementById('education-list')!;
    educationListElement.innerHTML = educationList.map(edu => `<li>${edu}</li>`).join('');

    // Update objective
    document.getElementById('resume-objective')!.innerText = objective;

    // Update personal information
    const personalInfoList = personalInfo.split('\n').map(info => `<li>${info}</li>`).join('');
    document.getElementById('personal-info-list')!.innerHTML = personalInfoList;

    // Update certificates list
    const certificatesList = certificatesInput.split(',').map(cert => cert.trim());
    const certificatesListElement = document.getElementById('certificates-list')!;
    certificatesListElement.innerHTML = certificatesList.map(cert => `<li>${cert}</li>`).join('');
});
