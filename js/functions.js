document.addEventListener('DOMContentLoaded', () => {

    //Menu scroll
    const prevScroll = window.pageYOffset;

    if (screen.width >= 768) {
        window.addEventListener('scroll', function (e) {            
            if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
                document.getElementById("menu").classList.add('scroll');
            } else {
                document.getElementById("menu").classList.remove('scroll');
            }            
        })
    }

    //Arrow animation
    TweenMax.to(".flecha", 2, { opacity: 0.1, repeat: -1 });   

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }  
   
    document.querySelectorAll('.ir_tienda').forEach(function (e) {
        e.addEventListener('click', function () {
            document.getElementById('modal').classList.add('is-active');
        })
    })
    document.querySelectorAll('.modal-close').forEach(function (e) {
        e.addEventListener('click', function () {
            document.getElementById("modal").classList.remove('is-active');            
        })
    })
    document.querySelectorAll('.modal-background').forEach(function (e) {
        e.addEventListener('click', function () {
            document.getElementById("modal").classList.remove('is-active');
        })
    })


});