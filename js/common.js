document.addEventListener("DOMContentLoaded", function() {
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

    const profile = document.querySelector('.right__element.profile')
    const burger = document.querySelector('.burger');
    const navigation = document.querySelector('#top__nav');
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    burger.addEventListener('click', function(e){
        navigation.classList.toggle('active');
        profile.classList.remove('pactive')
        burger.classList.toggle('active');
        header.classList.toggle('active');
        body.classList.toggle('ovhidden');
        if(body.classList.contains('ovhidden')){
            document.ontouchmove = function(event){
                e.preventDefault();
                console.log('PREVENTED');
            }
        }
    })
    const arrow_menu = document.querySelector('.profile__cont');
        arrow_menu.addEventListener('click', function(){
            profile.classList.toggle('pactive');
        })
    document.getElementById('auth').onclick = function() {
        document.getElementById('authent').classList.add('active-modal');
    }
})