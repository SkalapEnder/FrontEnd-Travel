  document.addEventListener("DOMContentLoaded", function () {
      const icon = document.getElementById("icon");

      icon.addEventListener("click", () => {
          document.body.classList.toggle("dark-mode");
          icon.src = document.body.classList.contains("dark-mode") ? "pictures/light_mode.png" : "pictures/dark_mode.webp";
      });
  });
    document.addEventListener('DOMContentLoaded', function() {   
    let timerId = null;

    // Calculate difference and turn off function
    function countdownTimer() {
      let diff = new Date();
      
      // Checks if one of time parts is greater than 0
      // Divide on 1000 to convert ms to seconds
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 + 5 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

      // Add additional 0 to start if one of them less than 10
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    const $hours = document.querySelector('.hours');
    const $minutes = document.querySelector('.minutes');
    const $seconds = document.querySelector('.seconds');

    countdownTimer();

    // Calling function each second (1000 ms)
    timerId = setInterval(countdownTimer, 1000);
  });