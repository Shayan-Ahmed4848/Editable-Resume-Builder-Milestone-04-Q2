var _a, _b;
// Handle the profile picture upload
(_a = document.getElementById('upload-pic')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function (event) {
    var fileInput = event.target;
    var file = fileInput.files ? fileInput.files[0] : null;
    if (file) {
        var reader_1 = new FileReader();
        reader_1.onloadend = function () {
            var profilePicElement = document.getElementById('profile-pic');
            profilePicElement.src = reader_1.result; // Set the uploaded image as the new source
        };
        reader_1.readAsDataURL(file);
    }
});
// Handle the form submission and update the resume
(_b = document.getElementById('resume-form')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get input values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var jobTitle = document.getElementById('job-title').value;
    var skillsInput = document.getElementById('skills').value;
    var educationInput = document.getElementById('education').value;
    var objective = document.getElementById('objective').value;
    var personalInfo = document.getElementById('personal-info').value;
    var certificatesInput = document.getElementById('certificates').value;
    // Update resume name, job title, and email
    document.getElementById('resume-name').innerText = name;
    document.getElementById('resume-job-title').innerText = jobTitle;
    document.getElementById('resume-email').innerText = email;
    // Update skills list
    var skillsList = skillsInput.split(',').map(function (skill) { return skill.trim(); });
    var skillsListElement = document.getElementById('skills-list');
    skillsListElement.innerHTML = skillsList.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
    // Update education list
    var educationList = educationInput.split(',').map(function (edu) { return edu.trim(); });
    var educationListElement = document.getElementById('education-list');
    educationListElement.innerHTML = educationList.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join('');
    // Update objective
    document.getElementById('resume-objective').innerText = objective;
    // Update personal information
    var personalInfoList = personalInfo.split('\n').map(function (info) { return "<li>".concat(info, "</li>"); }).join('');
    document.getElementById('personal-info-list').innerHTML = personalInfoList;
    // Update certificates list
    var certificatesList = certificatesInput.split(',').map(function (cert) { return cert.trim(); });
    var certificatesListElement = document.getElementById('certificates-list');
    certificatesListElement.innerHTML = certificatesList.map(function (cert) { return "<li>".concat(cert, "</li>"); }).join('');
});
