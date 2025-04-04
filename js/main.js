// Function to load HTML components
async function loadComponent(containerId, componentPath) {
    try {
        const response = await fetch(componentPath); 
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading ${componentPath}:`, error);
    }
}

// Load all components when the page is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Load all components first
    await loadComponent('navbar-container', 'html/navbar.html');
    await loadComponent('languages-container', 'html/languages.html');
    await loadComponent('about-container', 'html/about.html');
    await loadComponent('education-container', 'html/education.html');
    await loadComponent('interests-container', 'html/interests.html');
    await loadComponent('projects-container', 'html/projects.html');
    await loadComponent('contact-container', 'html/contact.html');
    await loadComponent('footer-container', 'html/footer.html');
    
    // Set up navbar toggle functionality AFTER all components are loaded
    setupNavbarToggle();
});

// Function to set up navbar toggle
function setupNavbarToggle() {
    // Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
        
        // Close mobile menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    }
}