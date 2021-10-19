
import data from './data.js';

const url = window.location.href; 
const url_part = url.split('#content')[1].split('%20').join(' ');

const match = data.filter((element) => {
    if (element.name == url_part) {
        return element.name;
    }
})

let extracted_item = match[0];

// create elements    
const media = document.createElement('div');
const media_item = document.createElement('div');
const media_body = document.createElement('div');
const img = document.createElement('img');
const h3 = document.createElement('h3');
const p = document.createElement('p');
const list = document.createElement('ul');
const list_item1 = document.createElement('li');
const list_item2 = document.createElement('li');
const list_item3 = document.createElement('li');

const content = document.querySelector('.content');

// attach elements 
content.appendChild(media);
media.appendChild(media_item);
media_item.appendChild(img);
media.appendChild(media_body);
media_body.appendChild(h3);
media_body.appendChild(list);
list.appendChild(list_item1);
list.appendChild(list_item2);
list.appendChild(list_item3);

media.classList.add('media');
list.classList.add('list')

  // give images with size property 'big' the class 'media-item-large'

if(`${extracted_item.size}` === "big") {

    media_item.classList.add('media-item', 'media-item-large');
    img.setAttribute('src', `${extracted_item.pic}`);
}

img.setAttribute('src', `${extracted_item.pic}`);
media_item.classList.add('media-item');

media_body.classList.add("media-body");
h3.innerHTML = extracted_item.name;
h3.classList.add('media-head');

// list_items.innerHTML = `height: ${extracted_item.description.height}`
list_item1.innerText = `Height: ${extracted_item.description.height}`
list_item2.innerText = `Weight: ${extracted_item.description.weight}`
list_item3.innerText = `Length: ${extracted_item.description.length}`


// get the media width
let media_width = window.matchMedia('(min-width: 48em)');

// check if the screen size is a minimum of 48ems 
if(media_width.matches) {
    content.firstChild.childNodes.forEach(item => {
        if(item.classList.contains('media-body')) {
            item.classList.add('space-down');
        }
        item.classList.add('col-1-2');
    })

}