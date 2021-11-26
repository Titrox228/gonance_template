document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('auth').onclick = function() {
        document.getElementById('authent').classList.add('active-modal');
    }

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

const burger = document.querySelector('.burger');
var navigation = document.querySelector('#top__nav');
burger.addEventListener('click', function(){
    navigation.classList.toggle('active');
    burger.classList.toggle('active');
})

const arrow_menu = document.querySelector('.profile__cont');
const profile = document.querySelector('.profile');
arrow_menu.addEventListener('click', function(){
    profile.classList.toggle('pactive');
})

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
    element.querySelector('.share__link-copy').addEventListener('click', function(){
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

    document.addEventListener('click', function(e){
        const target = e.target;
        const textL = target == document.getElementById('login');
        const textll = document.getElementById('login');
        const textP = target == document.getElementById('pass');
        const textpp = document.getElementById('pass');

        if(textL || textll.value!=0){
            textll.classList.remove('nonactive-input');
            textll.classList.add('active-input');

        }else if(textll.value==0){
            textll.classList.remove('active-input')
            textll.classList.add('nonactive-input');
        }

        if(textP || textpp.value!=0){
            textpp.classList.remove('nonactive-input');
            textpp.classList.add('active-input');

        }else if(textpp.value==0){
            textpp.classList.remove('active-input')
            textpp.classList.add('nonactive-input');
        }


    })
});