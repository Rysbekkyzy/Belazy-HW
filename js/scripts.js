var images = [
    "img/b1.jpg",
    "img/b3.jpg",
    "img/b2.jpg"
];

var prevBtn = $('#prev');
var nextBtn = $('#next');
var image = $('#image');

var currentIndex = 0;

prevBtn.on('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        // currentIndex = currentIndex - 1
    } else {
        currentIndex = images.length - 1;
    }
    image.attr('src', images[currentIndex]);
});

nextBtn.on('click', function () {
    if (currentIndex < images.length) {
        currentIndex++;
        // currentIndex = currentIndex + 1
    } else {
        currentIndex = 0;
    }
    image.attr('src', images[currentIndex]);
});