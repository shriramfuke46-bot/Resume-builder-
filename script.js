function generateResume() {
  document.getElementById("pname").innerText = document.getElementById("name").value;
  document.getElementById("pemail").innerText = document.getElementById("email").value;
  document.getElementById("pphone").innerText = document.getElementById("phone").value;

  document.getElementById("pedu").innerText = document.getElementById("education").value;
  document.getElementById("pskills").innerText = document.getElementById("skills").value;
  document.getElementById("pexp").innerText = document.getElementById("experience").value;
}

function downloadPDF() {
  const element = document.getElementById("resume");
  html2pdf().from(element).save("resume.pdf");
}
