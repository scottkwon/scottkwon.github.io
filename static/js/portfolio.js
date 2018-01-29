if( !sessionStorage.hasVisited ) {
    $('#loading').css('display', 'block');
    setTimeout( function() {
        console.log("timeout block", sessionStorage.hasVisited, typeof sessionStorage.hasVisited);
        sessionStorage.hasVisited = true;
        $('#loading').slideUp();
    }, 2300)
}

// When the user scrolls the page, execute stickyNav 
if (window.innerWidth >= 1100) {
    window.onscroll = function() { 
        stickyNav()
    };
}


var navbar = document.getElementById("nav");
var sidenav = document.getElementById("side-nav");

// Get the offset position of the navbar + a litle extra for smoother effect
var sticky = (navbar.offsetTop + window.screen.height) * 0.8;

// Add (Remove sticky class) if you (dont) pass the nav bar
function stickyNav() {
    console.log(window.screen.width);
    var isSticky = $('#side-nav').hasClass('fixed')
    if (window.pageYOffset >= sticky && !isSticky) {
        $('#side-nav').fadeIn("fast");
        sidenav.classList.add("fixed");
    }
    if (window.pageYOffset >= sticky && isSticky) {
        return
    }
    if (window.pageYOffset <= sticky && isSticky){
        $('#side-nav').hide();
        sidenav.classList.remove("fixed");
    }
}

// project image slider
$('.slider').sss({
    slideShow: false,
    startOn: 0,
})

