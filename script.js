let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval); // reset if already running

  const dateInput = document.getElementById("date").value;
  const timeInput = document.getElementById("time").value;
  const message = document.getElementById("message");

  if (!dateInput || !timeInput) {
    message.textContent = "⚠️ Please select both date and time.";
    return;
  }

  const targetDate = new Date(`${dateInput}T${timeInput}:00`).getTime();

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      message.textContent = "🎉 Time’s up!";
      return;
    }

    // Calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update UI
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    message.textContent = "";
  }, 1000);
}
