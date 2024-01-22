// Smooth scroll to anchors
let links = document.querySelectorAll('a[href^="#"]');
for (let item of links) {
    item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href');
        let target = document.querySelector(hashval);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        history.pushState(null, null, hashval);
        e.preventDefault();
    });
}

// Assistant display message
const assistant = document.querySelector('#assistant');
const assistantMsg = document.querySelector('#assistant-msg');
const closeBtn = document.querySelector('#close');

assistant.addEventListener('click', () => {
    if (assistantMsg.style.display === 'block') {
        assistantMsg.style.display = 'none';
    } else {
        assistantMsg.style.display = 'block';
    }
});

closeBtn.addEventListener('click', () => {
    assistantMsg.style.display = 'none';
});

// Mobile menu
const mobileMenu = document.querySelector('#mobile__nav');
const burgerBtn = document.querySelector('#burger');
const overlay = document.querySelector('#overlay');
const mobileMenuLinks = document.querySelectorAll('.mobile__menu a');

burgerBtn.addEventListener('click', () => {
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        overlay.style.opacity = '0';
        burgerBtn.style.display = 'block'; // Показываем кнопку бургера после закрытия
    } else {
        mobileMenu.style.display = 'block';
        overlay.style.opacity = '1';
        burgerBtn.style.display = 'none'; // Скрываем кнопку бургера при открытии
    }
});

for (let link of mobileMenuLinks) {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        overlay.style.opacity = '0';
        burgerBtn.style.display = 'block'; // Показываем кнопку бургера при закрытии по клику на ссылку
    });
}
