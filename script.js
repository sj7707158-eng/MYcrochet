document.addEventListener('DOMContentLoaded', function () {
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = this.name.value.trim() || 'Friend';
            alert(`Thanks for your message, ${name}! We will reply soon.`);
            this.reset();
        });
    }
});
