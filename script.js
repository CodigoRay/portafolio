let isSpanish = true;
function toggleLanguage() {
    isSpanish = !isSpanish;
    document.getElementById("name").textContent = isSpanish ? "Juan Pérez" : "John Perez";
    document.getElementById("job").textContent = isSpanish ? "Desarrollador Web" : "Web Developer";
    document.getElementById("about-title").textContent = isSpanish ? "Sobre mí" : "About Me";
    document.getElementById("about-text").textContent = isSpanish ? 
        "Soy un desarrollador web con experiencia en tecnologías modernas." : 
        "I am a web developer with experience in modern technologies.";
    document.getElementById("experience-title").textContent = isSpanish ? "Experiencia" : "Experience";
    document.getElementById("job1").textContent = isSpanish ? "Desarrollador en TechCorp" : "Developer at TechCorp";
    document.getElementById("job2").textContent = isSpanish ? "Freelancer en proyectos web" : "Freelancer on web projects";
}

