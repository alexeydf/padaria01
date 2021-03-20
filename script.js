const $btnMenu = document.querySelector('#btn-menu');
const $menu = document.querySelector('.top-menu');
const $principal = document.querySelector('main');

$btnMenu.addEventListener('click',()=>{
    $menu.classList.toggle('top-menu-aberto');
});


//fixar menu

const $menuLogo = document.querySelector('.logo-menu');
const $body = window.document

$body.addEventListener('scroll', ()=>{
    let windowHeight = window.pageYOffset;
    console.log(windowHeight)
    if(windowHeight >= 70){
        $menuLogo.className = 'logo-menu-fixo';
        
        $principal.className = 'principal';
    }else{
        $menuLogo.className = 'logo-menu';
        $principal.className = '';
    }
})