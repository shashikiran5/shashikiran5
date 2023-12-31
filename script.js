function generatePreview() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const skill1 = document.getElementById('skill1').value;
    const skill2 = document.getElementById('skill2').value;
  
    const preview = `
      <h3>${fullName}</h3>
      <p>Email: ${email}</p>
      <h4>Education</h4>
      <p>${degree} at ${university}</p>
      <h4>Work Experience</h4>
      <p>${jobTitle} at ${company}</p>
      <h4>Skills</h4>
      <p>${skill1}, ${skill2}</p>
    `;
  
    document.getElementById('preview').innerHTML = preview;
  }
  
  // Function to download the resume as a text file
  function downloadResume() {
    const resumeContent = document.getElementById('preview').innerText;
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  
  // Event listener for generating preview on form input
  document.getElementById('resumeForm').addEventListener('input', generatePreview);
  
  
