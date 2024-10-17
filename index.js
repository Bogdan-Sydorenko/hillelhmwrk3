document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('messageError').innerText = '';

    let isValid = true;

    if (name === "") {
        document.getElementById('nameError').innerText = "Enter name!!!";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Incorrect email address";
        isValid = false;
    }

    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = "Phone number must start at +380 and include 12 numbers";
        isValid = false;
    }

    if (message.length < 5) {
        document.getElementById('messageError').innerText = "Message must include no less 5 symbols";
        isValid = false;
    }

    if (isValid === true) {
        console.log({
            name: name,
            email: email,
            phone: phone,
            message: message,
        });
    }
});
