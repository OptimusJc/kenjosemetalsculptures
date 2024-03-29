import data  from './data.js';

window.addEventListener('load', () => {

    // * function renderElement
    const renderElement = (art, index) => {

        // create elements   
        const columnElement = document.createElement('div');
        const media = document.createElement('div');
        const media_item = document.createElement('div');
        const media_body = document.createElement('div');
        const img = document.createElement('img');
        const a = document.createElement('a');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const id = document.createElement('p');
        
        const row = document.querySelector('.row');
        
        // attach elements 
        row.appendChild(columnElement);
        columnElement.appendChild(media);
        media.appendChild(media_item);
        a.appendChild(img)
        media_item.appendChild(a);
        media.appendChild(media_body);
        // a.appendChild(h3);
        media_body.appendChild(h3);
        media_body.appendChild(p);
        media_body.appendChild(id);

        columnElement.classList.add('col');
        columnElement.classList.add('main');
        
        media.classList.add('media');

        // give images with size property 'big' the class 'media-item-large'
        if(`${art.size}` === "big") {
            media_item.classList.add('media-item', 'media-item-large');
            img.setAttribute('src', `${art.pic}`);

        }

        
        // give images with size property 'big' the class 'media-item-large'
        if(`${art.size}` === "big") {
            media_item.classList.add('media-item', 'media-item-large');
            img.setAttribute('src', `${art.pic}`);
            // console.log(`${art.name}`)
        }

        img.setAttribute('src', `${art.pic}`);
        media_item.classList.add('media-item');
        
        a.setAttribute('href', `./content.html#content${art.name}`);
        media_body.classList.add("media-body");
        h3.classList.add('media-head');
        

    }


    data.forEach( (art, index) => renderElement(art, (index+1)));
    
    // get the media width
    let ipad = window.matchMedia('(min-width: 48em) and (max-width: 75em)');
    let laptop = window.matchMedia('(min-width: 75em)');
    let columns = document.querySelectorAll('.col.main');

    // check if the screen size is a minimum of 48ems 
    if(ipad.matches) {
        columns.forEach(column => {
            column.classList.add('col-1-2');
        });
        console.log(`ipad: ${ipad.matches}`);

    } else if(laptop.matches) {
        columns.forEach(column => {
            column.classList.add('col-1-3');
        });
        console.log(`laptop: ${laptop.matches}`);
    }

});  
