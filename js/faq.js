// Select all FAQ items
const faqs = document.querySelectorAll('.faq');
    
// Loop through each FAQ and add a click event listener
faqs.forEach(faq => {
    faq.addEventListener('click', function() {
        // Toggle the 'open' CSS transition
        if(faq.classList.contains("open")){
            faq.classList.remove("open")
        } else{
            faq.classList.add("open")
        }

    });
});