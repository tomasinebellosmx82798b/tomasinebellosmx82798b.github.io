// Create floating hearts background
document.addEventListener('DOMContentLoaded', function() {
    const heartsContainer = document.getElementById('heartsContainer');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        
        // Random properties
        const size = Math.random() * 25 + 15; // 15-40px
        const left = Math.random() * 100; // 0-100%
        const duration = Math.random() * 10 + 10; // 10-20s
        const delay = Math.random() * 5; // 0-5s
        
        heart.style.fontSize = `${size}px`;
        heart.style.left = `${left}%`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
        
        // Random color variations
        const heartTypes = ['❤️', '💖', '💕', '💗', '💝', '🧡', '💛', '💚', '💙', '💜'];
        heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, (duration + delay) * 1000);
    }

    // Create initial hearts
    for (let i = 0; i < 15; i++) {
        createHeart();
    }

    // Continuously create new hearts
    setInterval(createHeart, 2000);
});

// Gift box interaction
document.addEventListener('DOMContentLoaded', function() {
    const giftBox = document.getElementById('giftBox');
    const messageModal = document.getElementById('messageModal');
    const closeBtn = document.getElementById('closeBtn');
    
    // Gift box click handler
    giftBox.addEventListener('click', function() {
        // Open the gift box
        giftBox.classList.add('opened');
        
        // Show message modal after a short delay
        setTimeout(() => {
            messageModal.classList.add('show');
            // Add celebration effect
            createCelebration();
        }, 500);
        
        // Disable further clicks
        giftBox.style.pointerEvents = 'none';
    });
    
    // Close modal handlers
    closeBtn.addEventListener('click', closeModal);
    messageModal.addEventListener('click', function(e) {
        if (e.target === messageModal) {
            closeModal();
        }
    });
    
    // ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && messageModal.classList.contains('show')) {
            closeModal();
        }
    });
    
    function closeModal() {
        messageModal.classList.remove('show');
    }
});

// Celebration effect
function createCelebration() {
    // Create additional hearts explosion
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createCelebrationHeart();
        }, i * 100);
    }
    
    // Confetti effect on message modal
    setTimeout(() => {
        createConfetti();
    }, 1000);
}

function createCelebrationHeart() {
    const heart = document.createElement('div');
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '-50px';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heart.innerHTML = ['❤️', '💖', '💕', '💗', '💝', '🧡', '💛'][Math.floor(Math.random() * 7)];
    heart.style.zIndex = '9999';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'celebrationFall 3s linear forwards';
    
    document.body.appendChild(heart);
    
    // Add CSS for celebration animation
    if (!document.getElementById('celebrationStyle')) {
        const style = document.createElement('style');
        style.id = 'celebrationStyle';
        style.textContent = `
            @keyframes celebrationFall {
                0% {
                    transform: translateY(-50px) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 3000);
}

// Confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#ffa500', '#ff1493', '#ffd700', '#00d4aa', '#4ecdc4'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.width = '8px';
        confetti.style.height = '8px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.zIndex = '9998';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = 'confettiFall 4s linear forwards';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 4000);
    }
    
    // Add confetti animation CSS
    if (!document.getElementById('confettiStyle')) {
        const style = document.createElement('style');
        style.id = 'confettiStyle';
        style.textContent = `
            @keyframes confettiFall {
                0% {
                    transform: translateY(-10px) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.querySelector('.gift-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});