document.addEventListener("DOMContentLoaded", function() {
    let select = function () {
        let selectHeader = document.querySelectorAll('.select__header');
        let selectItem = document.querySelectorAll('.select__item');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }

        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            currentText.innerText = text;
            select.classList.remove('is-active');

        }
        document.addEventListener('click', function(e){
            const target = e.target;
            const select = target == document.querySelector("#select");
            const selectll = document.querySelector('#select');
            if(!selectll.contains(target)){
                selectll.classList.remove('is-active')
            }
        })

    };
    select();
    const favourites = document.querySelectorAll('.graphic__favourite');
    favourites.forEach(element => {
        element.addEventListener('click', function(){
            element.classList.toggle('is-active')
        })
    });
})