setInterval(function() {
    var botao2 = document.getElementById('botao2');
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    botao2.style.left = x + 'px';
    botao2.style.top = y + 'px';
}, 500);
    
document.getElementById('botao1').addEventListener('click', function() {
    alert('I LOVE YOUU <3 aunque seas negro');
});
