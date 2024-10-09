// Select all FAQ items
const faqs = document.querySelectorAll('.faq');
    
// Loop through each FAQ and add a click event listener
faqs.forEach(faq => {
    faq.addEventListener('click', function() {
        // Toggle the 'open' class on the clicked FAQ
        this.classList.toggle('open');
        
        // Toggle the plus/minus sign in the span
        const sign = this.querySelector('span');
        sign.textContent = sign.textContent === '+' ? '-' : '+';
    });
});