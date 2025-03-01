function loadLanguage() {
    const language = document.getElementById('language').value;
    fetch(language)
        .then(response => response.text())
        .then(data => {
            document.documentElement.innerHTML = data;
        })
        .catch(error => console.error('Error loading language file:', error));
}
