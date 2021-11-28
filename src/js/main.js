
// all func



// ready func

(function() {

    const header = document.querySelector('.header');

    function toggleMenu() {
        header.classList.toggle("open-menu");
    }


    header.onclick = function(event) {
        let burger = event.target.closest('.js-burger');

        if (burger) {
            toggleMenu();
        }
    }


    

})();


// ready func end