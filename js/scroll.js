// Change background image based on scroll position.
window.addEventListener('scroll', onScroll);

// Get the background image element.
bg = document.getElementById('bgNormal');

// Get the headshot element which is the point where the background should disappear.
headshot = document.getElementById('headshot');

function onScroll() {
    var scrollTop = document.body.scrollTop;

    // Determine if position is at a certain point
    if (scrollTop > headshot.getBoundingClientRect().top - window.innerHeight/2) {
        bg.className = "hidden bgImage";
    } else {
        bg.className = "visible bgImage";
    }
}