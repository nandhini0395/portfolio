// Animation JavaScript functionality

// Animate Skill Bars on Scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const position = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (position < screenPosition) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
// Trigger once on page load in case skills are already in view
animateSkillBars();

// Animate Elements on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill-category, .timeline-item');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (position < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
// Trigger once on page load
animateOnScroll();

// Parallax Effect for Background Shapes
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach(shape => {
        const speed = shape.classList.contains('shape-1') ? 0.5 : 
                     shape.classList.contains('shape-2') ? 0.3 : 
                     shape.classList.contains('shape-3') ? 0.7 : 
                     shape.classList.contains('shape-4') ? 0.4 :
                     shape.classList.contains('shape-5') ? 0.6 :
                     shape.classList.contains('shape-6') ? 0.8 :
                     shape.classList.contains('shape-7') ? 0.2 : 0.5;
        
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.05}deg)`;
    });
});

// Add hover effects to interactive elements
document.querySelectorAll('.btn, .skill-category, .timeline-content').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Intersection Observer for more advanced animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-category, .timeline-item, .contact-item').forEach(el => {
    observer.observe(el);
});