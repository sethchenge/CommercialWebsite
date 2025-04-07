// Blog page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Enhanced animation for the executive title
    const executiveTitle = document.querySelector('.executive-title');
    
    if (executiveTitle) {
        // Add additional animation class for more dynamic effect
        executiveTitle.classList.add('animated-text');
        
        // Optional: Add letter-by-letter animation for more complex effect
        const text = executiveTitle.textContent;
        let animatedText = '';
        
        for (let i = 0; i < text.length; i++) {
            const delay = i * 0.05; // Staggered delay for each character
            animatedText += `<span style="animation-delay: ${delay}s;">${text[i]}</span>`;
        }
        
        // Apply only if there's a reasonable number of characters
        if (text.length < 30) {
            executiveTitle.innerHTML = animatedText;
            
            // Add CSS for the spans
            const style = document.createElement('style');
            style.textContent = `
                .animated-text span {
                    display: inline-block;
                    animation: letterFloat 3s ease-in-out infinite;
                }
                
                @keyframes letterFloat {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-2px); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Diagonal lines animation
    const diagonalLines = document.querySelector('.diagonal-lines');
    if (diagonalLines) {
        // Add subtle movement to the diagonal lines
        diagonalLines.style.animation = 'shiftLines 8s linear infinite';
        
        const lineStyle = document.createElement('style');
        lineStyle.textContent = `
            @keyframes shiftLines {
                0% { background-position: 0 0; }
                100% { background-position: 20px 0; }
            }
        `;
        document.head.appendChild(lineStyle);
    }
    
    // Scroll animations for blog posts
    const blogPosts = document.querySelectorAll('.blog-post');
    
    // Simple fade-in effect when scrolling
    if (blogPosts.length > 0) {
        // Initial state - slightly transparent
        blogPosts.forEach(post => {
            post.style.opacity = '0';
            post.style.transform = 'translateY(20px)';
            post.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
                rect.bottom >= 0
            );
        }
        
        // Function to handle scroll events
        function handleScroll() {
            blogPosts.forEach(post => {
                if (isInViewport(post)) {
                    post.style.opacity = '1';
                    post.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Initial check and add scroll listener
        handleScroll();
        window.addEventListener('scroll', handleScroll);
    }
});