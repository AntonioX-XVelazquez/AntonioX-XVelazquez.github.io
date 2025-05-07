document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("introForm");
    const addCourseBtn = document.getElementById("addCourseButton");
    const deleteCourseBtn = document.getElementById("deleteLastCourseButton");
    const coursesDiv = document.getElementById("courses");
    const output = document.getElementById("output");

    const defaultCourses = [
        { code: "MATH-1242-001", name: "Calculus II", reason: "Required for Major" },
        { code: "ITIS 3135", name: "Web App Design and Development", reason: "I want to further my coding knowledge and challenge myself with new projects" },
        { code: "ITIS-3200-091", name: "Intro to Info Security & Privacy", reason: "I wanted to learn about security systems and different vulnerabilities which affect different computer systems" },
        { code: "ITSC-2181-091", name: "Intro to Computer Systems", reason: "I wanted to get experience with using assembly" },
        { code: "LTAM-1501-001", name: "Global Social Science", reason: "I needed a social studies credit and the topic of Latin American history seemed interesting" }
    ];

    function createCourseInput(course = {}) {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course-entry';

        const codeInput = document.createElement('input');
        codeInput.type = 'text';
        codeInput.placeholder = 'Course Code';
        codeInput.required = true;
        codeInput.value = course.code || '';

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = 'Course Name';
        nameInput.required = true;
        nameInput.value = course.name || '';

        const reasonInput = document.createElement('input');
        reasonInput.type = 'text';
        reasonInput.placeholder = 'Reason for Taking Course';
        reasonInput.required = true;
        reasonInput.value = course.reason || '';

        const delButton = document.createElement('button');
        delButton.type = 'button';
        delButton.textContent = 'Delete';
        delButton.onclick = () => courseDiv.remove();

        courseDiv.appendChild(codeInput);
        courseDiv.appendChild(nameInput);
        courseDiv.appendChild(reasonInput);
        courseDiv.appendChild(delButton);
        coursesDiv.appendChild(courseDiv);
    }

    function initializeDefaultCourses() {
        if (coursesDiv) {
            defaultCourses.forEach((course) => createCourseInput(course));
        } else {
            console.error("Error: 'courses' div not found in the DOM.");
        }
    }

    initializeDefaultCourses();

    addCourseBtn.addEventListener('click', () => {
        if (coursesDiv) {
            createCourseInput();
        }
    });

    deleteCourseBtn.addEventListener('click', () => {
        if (coursesDiv) {
            const courseEntries = coursesDiv.querySelectorAll('.course-entry');
            if (courseEntries.length > 0) {
                courseEntries[courseEntries.length - 1].remove();
            }
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        let outputHTML = `<h2>Your Intro Page:</h2>`;

        outputHTML += `<p><strong>First Name:</strong> ${formData.get("Firstname")}</p>`;
        outputHTML += `<p><strong>Last Name:</strong> ${formData.get("Lastname")}</p>`;
        outputHTML += `<p><strong>Mascot:</strong> ${formData.get("mascot")}</p>`;

        outputHTML += `<img id="displayImage" src="#" alt="Uploaded Image" style="display:none; max-width: 400px; margin-top:10px;"><br>`;
        outputHTML += `<p><strong>Image Caption:</strong> ${formData.get("Imagecaption")}</p>`;
        outputHTML += `<p><strong>Personal Background:</strong> ${formData.get("Personalbackground")}</p>`;
        outputHTML += `<p><strong>Professional Background:</strong> ${formData.get("Professionalbackground")}</p>`;
        outputHTML += `<p><strong>Academic Background:</strong> ${formData.get("Academicbackground")}</p>`;
        outputHTML += `<p><strong>Web Dev Background:</strong> ${formData.get("Webdevbackground")}</p>`;
        outputHTML += `<p><strong>Primary Platform:</strong> ${formData.get("Computerplatform")}</p>`;

        if (coursesDiv) {
            const courseEntries = coursesDiv.querySelectorAll('.course-entry');
            if (courseEntries.length > 0) {
                outputHTML += `<p><strong>Courses Currently Taking:</strong><ul>`;
                courseEntries.forEach(entry, () => {
                    const code = entry.querySelector('input:nth-child(1)').value;
                    const name = entry.querySelector('input:nth-child(2)').value;
                    const reason = entry.querySelector('input:nth-child(3)').value;
                    outputHTML += `<li>${code} - ${name}: ${reason}</li>`;
                });
                outputHTML += `</ul></p>`;
            }
        }

        outputHTML += `<p><strong>Funny thing:</strong> ${formData.get("Funnything")}</p>`;
        outputHTML += `<p><strong>Anything else:</strong> ${formData.get("Anythingelse")}</p>`;

        if (output) {
            output.innerHTML = outputHTML + '<br><a href="#" onclick="location.reload()">Reset Form</a>';
        }
        form.style.display = 'none';

        const file = form.querySelector('input[type="file"]').files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const displayImage = document.getElementById('displayImage');
                displayImage.src = e.target.result;
                displayImage.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener('reset', () => {
        if (coursesDiv) {
            coursesDiv.innerHTML = ''; 
            initializeDefaultCourses(); 
        }
    });
});