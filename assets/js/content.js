
import data from './data.js';

const url = window.location.href; 
const url_part = url.split('#content')[1].split('%20').join(' ');

const match = data.filter((element) => {
    if (element.name == url_part) {
        return element.name;
    }
})

let extracted_item = match[0];
console.log(extracted_item.name)

// create elements    
const media = document.createElement('div');
const media_item = document.createElement('div');
const media_body = document.createElement('div');
const img = document.createElement('img');
const h3 = document.createElement('h3');
const p = document.createElement('p');

const content = document.querySelector('.content');

// attach elements 
content.appendChild(media);
media.appendChild(media_item);
media_item.appendChild(img);
media.appendChild(media_body);
media_body.appendChild(h3);
media_body.appendChild(p);

// col.classList.add('container');
media.classList.add('media');

img.setAttribute('src', `${extracted_item.pic}`);
media_item.classList.add('media-item');

media_body.classList.add("media-body");
h3.innerHTML = extracted_item.name;
h3.classList.add('media-head');

p.innerHTML = extracted_item.description;
