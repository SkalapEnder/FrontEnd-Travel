const checkin = document.getElementById('checkin');
const checkout = document.getElementById('checkout');

// Calendar code
const today = new Date().toISOString().split("T")[0];
checkin.setAttribute("min", today);

checkin.addEventListener("change", function() {
    const checkinValue = checkin.value;

    if (checkinValue) {
        checkout.setAttribute("min", checkinValue);
    }
});
