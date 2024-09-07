document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var displayName = document.getElementById("displayName");
    var displayEmail = document.getElementById("displayEmail");
    var displayPhone = document.getElementById("displayPhone");
    var displayEducation = document.getElementById("displayEducation");
    var displaySkills = document.getElementById("displaySkills");
    var displayExperience = document.getElementById("displayExperience");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var phoneInput = document.getElementById("phone");
        var educationInput = document.getElementById("education");
        var skillsInput = document.getElementById("skills");
        var experienceInput = document.getElementById("experience");

        var name = nameInput.value;
        var email = emailInput.value;
        var phone = phoneInput.value;
        var education = educationInput.value;
        var skills = skillsInput.value;
        var experience = experienceInput.value;

        displayName.textContent = name;
        displayEmail.href = "mailto:" + email;
        displayEmail.textContent = email;
        displayPhone.href = "tel:" + phone;
        displayPhone.textContent = phone;
        displayEducation.innerHTML = education.replace(/\n/g, '<br>');
        displaySkills.innerHTML = skills.split(',').map(function (skill) { return "<li>" + skill.trim() + "</li>"; }).join('');
        displayExperience.innerHTML = experience.replace(/\n/g, '<br>');
    });

    // Handle the "Click Me!" button
    var actionButton = document.getElementById("actionButton");
    var result = document.getElementById("result");

    actionButton.addEventListener("click", function () {
        result.textContent = "Button clicked! TypeScript is working.";
    });
});
