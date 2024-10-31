document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let submittedData = JSON.parse(localStorage.getItem('submittedData')) || [];
    submittedData.push({ email, password });
    localStorage.setItem('submittedData', JSON.stringify(submittedData));

    document.getElementById('successMessage').classList.remove('hidden');
    setTimeout(() => {
        window.location.href = 'admin.html';
    }, 2000);
});

function showAdminOption() {
    window.location.href = 'admin.html';
}

document.addEventListener('DOMContentLoaded', function () {
    const submittedDataDiv = document.getElementById('submittedData');
    if (submittedDataDiv) {
        const data = JSON.parse(localStorage.getItem('submittedData')) || [];
        submittedDataDiv.innerHTML = data.map((entry, index) =>
            `<p>${index + 1}. Email: ${entry.email}, Password: ${entry.password}</p>`
        ).join('');
    }
});

	
