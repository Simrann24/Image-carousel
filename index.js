let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let listitem = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');
}

function autoPlayCarousel() {
    setInterval(function() {
        showSlider('next');
    }, 9000); 
}

autoPlayCarousel();

function showSlider(type){
    let  itemslider = carouselDom.querySelectorAll('.carousel .list .item');
    let  itemthumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    if(type ==='next'){
        listitem.appendChild(itemslider[0]);
        thumbnailDom.appendChild(itemthumbnail[0]);
        carouselDom.classList.add('next');
    }
    else if (type === 'prev') {
        listitem.prepend(itemslider[itemslider.length - 1]);
        thumbnailDom.prepend(itemthumbnail[itemthumbnail.length - 1]);
        
    }
}