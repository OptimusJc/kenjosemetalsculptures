import data  from './data.js';

window.addEventListener('load', () => {

    // * function renderElement
    const renderElement = (art, index) => {

        // create elements
        const col = document.createElement('div');    
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
        row.appendChild(col);
        col.appendChild(media);
        media.appendChild(media_item);
        media_item.appendChild(img);
        media.appendChild(media_body);
        a.appendChild(h3);
        media_body.appendChild(a);
        media_body.appendChild(p);
        media_body.appendChild(id);
        
        // col.classList.add('container');
        media.classList.add('media');
        // media.setAttribute('data-number', `${art.id}`);
        
        img.setAttribute('src', `${art.pic}`);
        media_item.classList.add('media-item');
        
        a.setAttribute('href', `./content.html#content${art.name}`);
        media_body.classList.add("media-body");
        h3.innerHTML = art.name;
        h3.classList.add('media-head');
        
        p.innerHTML = art.description;
        id.innerHTML = index;

        console.log(index[art]);

    }

    data.forEach( (art, index) => renderElement(art, (index+1)));

});  
