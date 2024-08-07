function setReminder() {
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const activity = document.getElementById('activity').value;

    if (!time) {
        alert('Please select a time.');
        return;
    }

    const reminderTime = new Date();
    const [hours, minutes] = time.split(':');
    reminderTime.setHours(hours, minutes, 0, 0);

    const now = new Date();
    let timeDifference = reminderTime - now;

    if (timeDifference < 0) {
        timeDifference += 24 * 60 * 60 * 1000; // Add 24 hours if the time is for the next day
    }

    setTimeout(() => {
        const chime = document.getElementById('chime');
        chime.play();
        alert(`Time for: ${activity}`);
    }, timeDifference);

    alert(`Reminder set for ${day} at ${time} to ${activity}`);
}
