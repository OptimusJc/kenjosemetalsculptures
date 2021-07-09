import data  from './data.js';

window.addEventListener('load', () => {
    
    // create elements    
    const media = document.createElement('div');
    const media_item = document.createElement('div');
    const media_body = document.createElement('div');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    
    const element = data[0];
    
    const container = document.querySelector('.container');
    
    // attach elements 
    container.appendChild(media);
    media.appendChild(media_item);
    media_item.appendChild(img);
    media.appendChild(media_body);
    media_body.appendChild(h3);
    media_body.appendChild(p);
    
    // col.classList.add('container');
    media.classList.add('media');
    
    img.setAttribute('src', `${element.pic}`);
    media_item.classList.add('media-item');
    
    media_body.classList.add("media-body");
    h3.innerHTML = element.name;
    h3.classList.add('media-head');
    
    p.innerHTML = element.description;

});  


// const content = (element) => {

//         // create elements    
//         const media = document.createElement('div');
//         const media_item = document.createElement('div');
//         const media_body = document.createElement('div');
//         const img = document.createElement('img');
//         const h3 = document.createElement('h3');
//         const p = document.createElement('p');
        
//         const element = data[0];
        
//         const container = document.querySelector('.container');
        
//         // attach elements 
//         container.appendChild(media);
//         media.appendChild(media_item);
//         media_item.appendChild(img);
//         media.appendChild(media_body);
//         media_body.appendChild(h3);
//         media_body.appendChild(p);
        
//         // col.classList.add('container');
//         media.classList.add('media');
        
//         img.setAttribute('src', `${element.pic}`);
//         media_item.classList.add('media-item');
        
//         media_body.classList.add("media-body");
//         h3.innerHTML = element.name;
//         h3.classList.add('media-head');
        
//         p.innerHTML = element.description;
// }