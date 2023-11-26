var myMobilemenu = document.getElementById('mobilemenuu');
var myHamburger = document.getElementById('hamburger');
var myWhitex = document.getElementById('whitex');
myHamburger.addEventListener('click', () => { 
    myMobilemenu.style.display = 'block';
    });
myWhitex.addEventListener('click', () => { 
    myMobilemenu.style.display = 'none';
    });
