let aboutButton = document.querySelector('button.aboutbutton');
let educationButton = document.querySelector('button.educationbutton');
let skillsButton = document.querySelector('button.skillsbutton');
let experienceButton = document.querySelector('button.experiencebutton');
let projectsButton = document.querySelector('button.projectsbutton');

//getting different sections

let aboutSection = document.getElementById("aboutsection");
let educationSection = document.getElementById('educationsection');
let skillsSection = document.getElementById('skillssection');
let experienceSection = document.getElementById('experiencesection');
let projectsSection = document.getElementById('projectssection');


//adding eventlisteners

aboutButton.addEventListener('click',()=>{

    aboutSection.style.display = 'block';
    educationSection.style.display = 'none';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'none';
    projectsSection.style.display = 'none';

});

educationButton.addEventListener('click',()=>{

    aboutSection.style.display = 'none';
    educationSection.style.display = 'block';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'none';
    projectsSection.style.display = 'none';

});

skillsButton.addEventListener('click',()=>{

    aboutSection.style.display = 'none';
    educationSection.style.display = 'none';
    skillsSection.style.display = 'block';
    experienceSection.style.display = 'none';
    projectsSection.style.display = 'none';

});

experienceButton.addEventListener('click',()=>{

    aboutSection.style.display = 'none';
    educationSection.style.display = 'none';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'block';
    projectsSection.style.display = 'none';

});

projectsButton.addEventListener('click',()=>{

    aboutSection.style.display = 'none';
    educationSection.style.display = 'none';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'none';
    projectsSection.style.display = 'block';

});