
// Auto Scrolling carousal for main page start ...........................
// Source of this block is https://stackoverflow.com/questions/48750804/need-to-create-a-clickable-automatic-slideshow-using-javascript/48751293
var slideIndex = 1;
var t;
showSlides(slideIndex);    // showSlides function is called to start autoscroll. 
// clearTimeout(t)


function plusSlides(n){         // This function is called when user clicks on arrow buttons. 
    clearTimeout(t);

    showSlides(slideIndex += n); // Inside plusSlides function, showSlides function is called with integer input. One click is +/-1. 
    clearTimeout(t);            // Clear timeout is needed for when user clicks left/right arrows which messes up the speed of autoscroll.
    showSlides(slideIndex);
    // console.log(slideIndex);
}

// Don't really need this part. 
// function currentSlide(n){
//     showSlides(slideIndex = n);
// }

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");   // All pictures in class mySlides from html is saved as slides variable.
    
    // Conditions to rotate pictures depending on input n. 
    if (n== undefined){         // not sure when n would be undefined
        n = ++slideIndex
    }
    if (n > slides.length){     // If n has passed slides length, start again from pic1.
        slideIndex = 1
    }
    if (n < 1) {                // n could be 0 or less because of left arrow clicks -1 each time. 
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndex -1].style.display = 'block';   // Display one picture at a time using slideIndex.
    t = setTimeout(showSlides, 5000)                 // Set timeout for delay effect. Timeout needs to be cleared after clicks.
}
// Auto Scrolling carousal for main page end ...........................

