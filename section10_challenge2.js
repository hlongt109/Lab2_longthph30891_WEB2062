
(function (){
    const txt = document.querySelector('h1');
    txt.style.color = 'red';

    document.querySelector('body').addEventListener('click', ()=>{
        txt.style.color = 'blue'
    });
})();