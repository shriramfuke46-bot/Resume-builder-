function showForm() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('form-page').style.display = 'block';
}

function generateResume() {
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value;
    const about = document.getElementById('about').value;
    const selectedTemp = document.querySelector('input[name="temp"]:checked').value;
    
    let resumeHTML = "";

    if (selectedTemp === "temp1") {
        // Harper Russo Style
        resumeHTML = `
            <div class="temp1-grid">
                <div class="side-bar">
                    <h3>Contact</h3>
                    <p>${email}</p>
                    <h3>Expertise</h3>
                    <p>Marketing, Communication</p>
                </div>
                <div class="main-bar">
                    <h1>${name}</h1>
                    <h3>${role}</h3>
                    <p>${about}</p>
                    <hr>
                    <h3>Experience</h3>
                    <p>Junior Marketer at Marketing Agency (2018-2019)</p>
                </div>
            </div>`;
    } else {
        // Jonathan Patterson Style
        resumeHTML = `
            <div class="temp2-header">
                <h1>${name.toUpperCase()}</h1>
                <p>${role}</p>
            </div>
            <div class="temp2-body">
                <div class="temp2-left">
                    <h4>CONTACT</h4>
                    <p>${email}</p>
                    <h4>SKILLS</h4>
                    <p>Creativity, Leadership</p>
                </div>
                <div class="temp2-right">
                    <h4>PROFILE INFO</h4>
                    <p>${about}</p>
                </div>
            </div>`;
    }

    document.getElementById('resume-content').innerHTML = resumeHTML;
    document.getElementById('form-page').style.display = 'none';
    document.getElementById('preview-page').style.display = 'block';
}

function downloadPDF() {
    const element = document.getElementById('resume-content');
    html2pdf().from(element).save('My_Resume.pdf');
}
