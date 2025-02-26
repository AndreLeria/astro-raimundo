document.querySelector('.hamburger')?.addEventListener('click', () => {
    document.querySelector('body > header > nav')?.classList.toggle('expanded');
});