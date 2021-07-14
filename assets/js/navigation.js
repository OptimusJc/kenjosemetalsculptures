// navigation toggle
const menu_bar = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

menu_bar.addEventListener('click', (e) => {
    // e.preventDefault();
    
    if(navigation.style.display == 'none') {
        navigation.style.display = 'block';
        menu_bar.src = '/assets/images/icons/close.svg';
    } else {
        navigation.style.display = 'none';
        menu_bar.src = '/assets/images/icons/menu.svg';
    }
});