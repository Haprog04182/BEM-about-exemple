const cards = document.querySelectorAll(".card");

cards.forEach( (elem) => {
    elem.classList.remove("card_active")
    elem.addEventListener('click', (e) => {
        if(elem !== e.target){
            return;
        }
        cards.forEach( (elem) => {
            elem.classList.remove("card_active")
        })
        e.target.classList.toggle("card_active")
        
    })
})

