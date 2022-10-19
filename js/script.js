window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('h1').addEventListener('click', function(){
        console.log('clique sur le h1');
        document.querySelector('h1').classList.toggle('red-h1');
    });
});