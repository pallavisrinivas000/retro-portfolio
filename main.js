document.addEventListener('DOMContentLoaded', function () {
    const passwordMock = document.getElementById('password-mock');
    let stars = '';  // To simulate password stars

    // Automatically simulate typing stars for the mock login
    let starInterval = setInterval(function () {
        stars += '*';
        passwordMock.textContent = stars;

        // Once 8 stars are shown, move to the loading screen
        if (stars.length === 8) {
            clearInterval(starInterval);

            setTimeout(() => {
                // Hide the login screen and show the loading screen
                document.getElementById('login-screen').style.display = 'none';
                document.getElementById('loading-screen').style.display = 'flex';

                // Show glitch screen after loading
                setTimeout(function () {
                    document.getElementById('loading-screen').style.display = 'none';
                    document.getElementById('glitch-screen').style.display = 'flex';

                    // Show main content after glitch
                    setTimeout(function () {
                        document.getElementById('glitch-screen').style.display = 'none';
                        document.getElementById('main-content').style.display = 'block';

                        // Load the blog posts after the main content is displayed
                        loadBlogPosts();
                    }, 500);  // Glitch lasts 0.5 seconds
                }, 3500);  // Loading lasts 3.5 seconds (matches the typing effect)
            }, 500);  // Small delay after stars are done
        }
    }, 300);  // Speed of typing stars

});

function toggleMode() {
    const body = document.body;
    const modeToggle = document.querySelector('.mode-toggle');
    if (modeToggle.checked) {
        body.classList.add('light-mode');
        modeToggle.textContent = '☀️';
    } else {
        body.classList.remove('light-mode');
        modeToggle.textContent = '🌙';
    }
}

function toggleMode() {
    const body = document.body;
    body.classList.toggle('light-mode');
    const modeToggle = document.querySelector('.mode-toggle');
    modeToggle.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
}