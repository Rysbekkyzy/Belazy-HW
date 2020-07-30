// first slide
var images = [
    "img/slide-1.png",
    "img/b2.jpg",
    "img/b1.jpg"
    // "img/slide-3.png"
]

var prev_btn = $('#prev');
var next_btn = $('#next');
var image = $('#image');

var currentindex = 0;

prev_btn.on('click', function () {
    if (currentindex > 0) {
        currentindex--;
    } else {
        currentindex = images.length - 1;
    }
    image.attr('src', images[currentindex]);
});

next_btn.on('click', function () {
    if (currentindex < images.length - 1) {
        currentindex++;
    } else {
        currentindex = 0;
    }
    image.attr('src', images[currentindex]);
});

// middle slide
var images_middle = [
    "img/slide-2.png",
    "img/b2.jpg",
    "img/b1.jpg"
]

var prev_btn = $('#prev');
var next_btn = $('#next');
var middle_img = $('#middle-img');

var middle_currentindex = 0;

prev_btn.on('click', function () {
    if (middle_currentindex > 0) {
        middle_currentindex--;
    } else {
        middle_currentindex = images_middle.length - 1;
    }
    middle_img.attr('src', images_middle[middle_currentindex]);
});

next_btn.on('click', function () {
    if (middle_currentindex < images.length - 1) {
        middle_currentindex++;
    } else {
        middle_currentindex = 0;
    }
    middle_img.attr('src', images_middle[middle_currentindex]);
});

// last

// middle slide
var images_last = [
    "img/slide-3.png",
    "img/b2.jpg",
    "img/b1.jpg"
]

var prev_btn = $('#prev');
var next_btn = $('#next');
var last_img = $('#last-img');

var last_currentindex = 0;

prev_btn.on('click', function () {
    if (last_currentindex > 0) {
        last_currentindex--;
    } else {
        last_currentindex = images_last.length - 1;
    }
    last_img.attr('src', images_last[last_currentindex]);
});

next_btn.on('click', function () {
    if (last_currentindex < images_last.length - 1) {
        last_currentindex++;
    } else {
        last_currentindex = 0;
    }
    last_img.attr('src', images_last[last_currentindex]);
});