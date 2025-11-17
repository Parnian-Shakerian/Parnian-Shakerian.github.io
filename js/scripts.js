/*!
* Start Bootstrap - Resume v7.0.5 ...
*/

// Scripts
window.addEventListener('DOMContentLoaded', event => {

    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    }

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// not using jquery
window.onload = function(){
    var anchors = document.getElementsByTagName('a');
    for (var i=0; i<anchors.length; i++){
        if (!anchors[i].getAttribute('class') || anchors[i].getAttribute('class') === 'social-icon')
        anchors[i].setAttribute('target', '_blank');
    }
}

// jquery is prettier. :-)


document.querySelectorAll('.certificates img').forEach(img => {
    img.addEventListener('click', () => {
        if (img.classList.contains('zoomed')) {
            img.classList.remove('zoomed');
            document.body.classList.remove('no-scroll');
        } else {
            document.querySelectorAll('.certificates img').forEach(i => i.classList.remove('zoomed'));
            img.classList.add('zoomed');
            document.body.classList.add('no-scroll');
        }
    });
});
