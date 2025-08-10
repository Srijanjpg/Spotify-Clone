const volumeBar = document.getElementById('volume-bar');

if (volumeBar) {
    volumeBar.addEventListener('input', function () {
        this.style.setProperty('--val', `${this.value}%`);
    });
    // Initialize on load
    volumeBar.style.setProperty('--val', `${volumeBar.value}%`);
}
const progressBar = document.getElementById('progress-bar');

if (progressBar) {
    progressBar.addEventListener('input', function () {
        this.style.setProperty('--val', `${this.value}%`);
    });
    // Initialize on load
    progressBar.style.setProperty('--val', `${progressBar.value}%`);
}