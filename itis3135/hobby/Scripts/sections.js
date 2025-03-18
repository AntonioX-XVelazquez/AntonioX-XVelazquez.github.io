function toggleSection(sectionId) {
    document.querySelectorAll("main section").forEach((section) => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
}
