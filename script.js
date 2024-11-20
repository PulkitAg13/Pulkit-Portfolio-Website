const backToTopButton = document.createElement('button');
backToTopButton.textContent = "Back To Top";
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.display = 'none';
backToTopButton.style.backgroundColor = '#4b6cc1';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.padding = '10px';
backToTopButton.style.borderRadius = '8px';
backToTopButton.style.zIndex = '1000';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


