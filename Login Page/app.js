const signUpChoices = () => {
    const popup = document.getElementById("choice");
    const btn = document.getElementById("signUp");
    const span = document.getElementsByClassName("close")[0];

    btn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    span.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == popup) {
            popup.style.display = 'none';
        }
    });
}

signUpChoices();