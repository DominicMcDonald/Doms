// pre-supplied code

const opend = document.querySelector('.openbar');
const closed = document.querySelector('.sidebar__btn');
const sidebar = document.querySelector('.sidebar');
const change = document.getElementById('open');



opend.addEventListener('click' , () =>{
    sidebar.classList.add('open');
})
closed.addEventListener('click' , () =>{
    sidebar.classList.remove('open');
})



window.addEventListener('scroll' , () =>{
    let top = window.scrollY;

    if (top > 1400 && top < 2100){
        change.classList.add('show');

    } else if(top > 2900 && top < 3500){
        change.classList.add('show');

    } else if (top > 5200 && top < 5500){
        change.classList.add('show');

    } else{
        change.classList.remove('show')
    }
})
