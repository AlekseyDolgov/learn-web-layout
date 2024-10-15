const images = {
    small: [
        'url("../img/banner/adaptive/small/small1.png")',
        'url("../img/banner/adaptive/small/small2.png")',
        'url("../img/banner/adaptive/small/small3.png")'
    ],
    medium: [
        'url("../img/banner/adaptive/medium/medium1.png")',
        'url("../img/banner/adaptive/medium/medium2.png")',
        'url("../img/banner/adaptive/medium/medium3.png")'
    ],
    large: [
        'url("../img/banner/banner.jpg")',
        'url("../img/banner/banner2.jpg")',
        'url("../img/banner/banner3.jpg")'
    ]
};

let currentIndex = 0;

const header = document.getElementById('header');


function getCurrentImageSet() {

    const screenWidth = window.screen.availWidth

    console.log('Current screen width:', screenWidth);

    if (screenWidth < 1024) {
        console.log(screenWidth + ' - Using small images');
        return images.small;
    } else if (screenWidth < 1920 && screenWidth >= 1024)  {
        console.log(screenWidth + ' - Using medium images');
        return images.medium;
    } else if (screenWidth > 1024 && screenWidth >= 1920) {
        console.log(screenWidth + ' - Using big images');
        return images.large;
    }
}

function changeBackground() {
    const currentImages = getCurrentImageSet();
    header.style.backgroundImage = currentImages[currentIndex];


    currentIndex = (currentIndex + 1) % currentImages.length;
}


setInterval(changeBackground, 3000);
changeBackground();

window.addEventListener('resize', changeBackground);