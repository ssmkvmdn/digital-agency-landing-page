// menu burger 
const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
    if(headerBurger){
        headerBurger.addEventListener("click", function(e) {
            document.body.classList.toggle('_lock');
            headerBurger.classList.toggle('_active');
            headerNav.classList.toggle('_active');
        });
    }

