document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const image = document.getElementById('image').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked'))
                        .map(skill => skill.value)
                        .join(',');

    const studentList = document.getElementById('studentsList');

    const newStudent = document.createElement('div');
    newStudent.classList.add('student');

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    descriptionDiv.innerHTML = `
        <p>${name}</p>
        <p>${gender}</p>
        <p>${email}</p>
        <p><a href="${website}" target="_blank">${website}</a></p>
        <p>${skills}</p>
    `;

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    const img = document.createElement('img');
    img.src = image ? image : 'https://via.placeholder.com/100';
    img.alt = name;
    imageDiv.appendChild(img);

    newStudent.appendChild(descriptionDiv);
    newStudent.appendChild(imageDiv);

    studentList.appendChild(newStudent);

    document.getElementById('enrollmentForm').reset();
});
