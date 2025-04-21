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

//navbar collapse
document.addEventListener('DOMContentLoaded', function() {
    // Handle close button click
    const closeBtn = document.querySelector('.sidebar-close-btn .btn-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            // More direct approach to close the navbar
            const navbar = document.getElementById('navbarNav');
            navbar.classList.remove('show');
            
            // Also toggle the aria-expanded attribute on the toggler
            const navbarToggler = document.querySelector('.navbar-toggler');
            if (navbarToggler) {
                navbarToggler.setAttribute('aria-expanded', 'false');
                navbarToggler.classList.add('collapsed');
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const navbar = document.getElementById('navbarNav');
        const navbarToggler = document.querySelector('.navbar-toggler');
        
        if (navbar.classList.contains('show') && 
            !navbar.contains(event.target) && 
            !navbarToggler.contains(event.target)) {
            // Direct approach to close the navbar
            navbar.classList.remove('show');
            
            if (navbarToggler) {
                navbarToggler.setAttribute('aria-expanded', 'false');
                navbarToggler.classList.add('collapsed');
            }
        }
    });
    
    // Add escape key listener to close menu
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const navbar = document.getElementById('navbarNav');
            if (navbar.classList.contains('show')) {
                navbar.classList.remove('show');
                
                const navbarToggler = document.querySelector('.navbar-toggler');
                if (navbarToggler) {
                    navbarToggler.setAttribute('aria-expanded', 'false');
                    navbarToggler.classList.add('collapsed');
                }
            }
        }
    });
    
    // Handle dropdown behavior on mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        dropdownToggle.addEventListener('click', function(e) {
            // On mobile, prevent default toggle behavior and manually toggle dropdown
            if (window.innerWidth < 992) {
                e.preventDefault();
                e.stopPropagation();
                
                // Close other open dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown && otherDropdown.querySelector('.dropdown-menu').classList.contains('show')) {
                        otherDropdown.querySelector('.dropdown-menu').classList.remove('show');
                    }
                });
                
                // Toggle current dropdown
                dropdownMenu.classList.toggle('show');
            }
        });
    });
});