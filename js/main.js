
document.addEventListener("DOMContentLoaded", function() {
    var likes = document.querySelectorAll(".block__like");
    for (let i = 0; i < likes.length; i++) {
        likes[i].addEventListener("click", function() {
            var likesClasses = likes[i].classList;
            var likesAmount = Number(likes[i].querySelector('div.block__like-amount').textContent);
            if(likesClasses.contains("liked")){
                likesClasses.remove("liked");
                likes[i].querySelector('div.block__like-amount').textContent = likesAmount - 1;
            }
            else{
                likesClasses.add("liked");
                likes[i].querySelector('div.block__like-amount').textContent = likesAmount + 1;
            }
        });
    }

    var favs = document.querySelectorAll(".favourites__img");
    for (let i = 0; i < favs.length; i++) {
        favs[i].addEventListener("click", function() {
            var favsClasses = favs[i].classList;
            if (favsClasses.contains("factive")){
                favsClasses.remove("factive");
            }
            else{
                favsClasses.add("factive")
            }
            
        });
    };

    const socials = document.querySelectorAll('.block__social');
    socials.forEach(element => {
        const button = element.querySelector('.share__img')
        const nav = element.querySelector('.share__modal') 
        const linkshare = element.querySelector('.share__link')
        document.addEventListener('click', e => { 
            const target = e.target
            if (nav.classList.contains('shactive')){
                if(target != nav && target != linkshare && nav.classList.contains('shactive') ){
                    nav.classList.remove('shactive');
                }
            }else if(target==button){
                nav.classList.add('shactive');
                console.log(linkshare.getAttribute('link-attr'));
                linkshare.value = linkshare.getAttribute('link-attr');
                linkshare.select();
            }
        })
        element.querySelector('.share__btn-fake').addEventListener('click', function(){
            navigator.clipboard.writeText(linkshare.getAttribute('link-attr'));
        })
    });

    var littleSliders = document.querySelectorAll('.under__slider');
    var iter = 0;
    var timeOut = 3000;
    littleSliders.forEach(element => {
        if(iter==2){
            timeOut = 3300;
        };
        if(iter==4){
            timeOut = 3600;
        };
        setInterval(() => {
            element.classList.toggle('dn');
        }, timeOut);
        iter += 1;
    });

    var win = window,
    $logo = document.getElementById('header'),
    analytics = document.querySelector('.analytics').getBoundingClientRect().top;
    if (analytics <= 61){
        $logo.classList.add('scrolled')
    }
    else{
        $logo.classList.remove('scrolled')
    }
    win.onscroll = function(){
        analytics = document.querySelector('.analytics').getBoundingClientRect().top;
        if (analytics <= 61){
            $logo.classList.add('scrolled')
        }
        else{
            $logo.classList.remove('scrolled')
        }
    };
});