$(document).ready(() => {
    const menu_icon = $('img').filter('.menu');
    const nav = $('nav');
    
    menu_icon.click((e) => {
        if(nav.css('left') == 0) {

            e.target.src = '/assets/images/icons/menu.svg';
            nav.css('left', '-110%');
        } else {
            
            e.target.src = '/assets/images/icons/close.svg';
            nav.css('left', 0);
        }
    })

})