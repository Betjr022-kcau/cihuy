document.getElementById('tombolTampilkan').addEventListener('click', function () {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.classList.remove('hidden');

    const video = document.getElementById('videoSaya');
    video.play(); // Putar otomatis setelah muncul
});
