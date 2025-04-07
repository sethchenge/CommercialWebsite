// YouTube API Integration
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // Player is ready
    const playButton = document.getElementById('custom-play-button');
    
    // Add click event to custom play button
    playButton.addEventListener('click', function() {
        player.playVideo();
        playButton.style.opacity = '0';
        setTimeout(() => {
            playButton.style.display = 'none';
        }, 300);
    });
}

function onPlayerStateChange(event) {
    const playButton = document.getElementById('custom-play-button');
    
    // When video is paused
    if (event.data === YT.PlayerState.PAUSED) {
        playButton.style.display = 'flex';
        setTimeout(() => {
            playButton.style.opacity = '1';
        }, 10);
    }
    
    // When video ends
    if (event.data === YT.PlayerState.ENDED) {
        playButton.style.display = 'flex';
        setTimeout(() => {
            playButton.style.opacity = '1';
        }, 10);
    }
}

// Initialize tooltips and popovers if needed
document.addEventListener('DOMContentLoaded', function() {
    // Prevent automatic play when page loads
    setTimeout(() => {
        const iframe = document.getElementById('youtube-video');
        if (iframe) {
            iframe.setAttribute('src', iframe.getAttribute('src'));
        }
    }, 1000);
    
    // Mobile detection for better user experience
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.querySelector('.video-wrapper').classList.add('mobile-device');
    }
});