document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const screens = document.querySelectorAll('.screen');

    // --- Tab Navigation Logic ---
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);

            // Update active nav item
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Update active screen
            screens.forEach(s => s.classList.remove('active'));
            document.getElementById(`screen-${targetId}`).classList.add('active');
        });
    });

    // --- Video Player Logic ---
    const videoPlayerFullscreen = document.getElementById('video-player-fullscreen');
    const closePlayerButton = document.querySelector('.player-close-button');
    
    // Function to open the player (e.g., when a channel is clicked)
    function openPlayer() {
        videoPlayerFullscreen.classList.add('visible');
    }

    // Function to close the player
    function closePlayer() {
        videoPlayerFullscreen.classList.remove('visible');
        // Optional: stop the video to save bandwidth
        const video = document.getElementById('video-player');
        video.pause();
        video.src = ""; 
    }

    // Example: Open player when a channel is clicked
    document.querySelectorAll('.list-item.channel, .list-item a').forEach(channel => {
        channel.addEventListener('click', (e) => {
            e.preventDefault();
            // Here you would fetch the channel data and set the player source
            openPlayer();
        });
    });

    closePlayerButton.addEventListener('click', closePlayer);
});
