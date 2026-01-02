// Initialize Lucide Icons
lucide.createIcons();

// Elements
const navbar = document.getElementById('navbar');
const navTitle = document.getElementById('nav-title');
const navSubtitle = document.getElementById('nav-subtitle');
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll Handler
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        // Scrolled State (White background)
        navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
        navbar.classList.remove('bg-transparent');
        
        navTitle.classList.remove('text-white');
        navTitle.classList.add('text-gray-900');
        
        navSubtitle.classList.remove('text-purple-200');
        navSubtitle.classList.add('text-purple-600');
        
        mobileBtn.classList.remove('text-white');
        mobileBtn.classList.add('text-gray-900');

        navLinks.forEach(link => {
            link.classList.remove('text-white/80', 'hover:text-white');
            link.classList.add('text-gray-600', 'hover:text-purple-600');
        });

    } else {
        // Top State (Transparent background)
        navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
        navbar.classList.add('bg-transparent');
        
        navTitle.classList.add('text-white');
        navTitle.classList.remove('text-gray-900');
        
        navSubtitle.classList.add('text-purple-200');
        navSubtitle.classList.remove('text-purple-600');
        
        mobileBtn.classList.add('text-white');
        mobileBtn.classList.remove('text-gray-900');

        navLinks.forEach(link => {
            link.classList.add('text-white/80', 'hover:text-white');
            link.classList.remove('text-gray-600', 'hover:text-purple-600');
        });
    }
});

// Mobile Menu Handler
mobileBtn.addEventListener('click', () => {
    // Toggle hidden class
    mobileMenu.classList.toggle('hidden');
    
    // Optional: Change icon (you can add logic here to switch between menu and X icon)
});
