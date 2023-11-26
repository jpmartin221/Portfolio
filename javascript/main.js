console.log("test")

var myDropdown = document.getElementById('dropdown');
var myWork = document.getElementById('work');
myWork.addEventListener('mouseenter', () => { 
    myDropdown.style.display = 'block';
    });

myDropdown.addEventListener('mouseleave', () => { 
    myDropdown.style.display = 'none';
    });

myDropdown.addEventListener('mouseenter', () => {
    myDropdown.style.display = 'block';
});

// var myFirstoption = document.getElementById('firstoption');
// var mySecondoption = document.getElementById('secondoption');
// var myThirdoption = document.getElementById('thirdoption');
// var myFourthoption = document.getElementById('fourthoption');

var myMobilemenu = document.getElementById('mobilemenuu');
var myHamburger = document.getElementById('hamburger');
var myWhitex = document.getElementById('whitex');
var myWorkmenu = document.getElementById('workmenuu');
var myUpdown = document.getElementById('updown');
var myWorktab = document.getElementById('mobilework');
myHamburger.addEventListener('click', () => { 
    myMobilemenu.style.display = 'block';
    });
myWhitex.addEventListener('click', () => { 
    myMobilemenu.style.display = 'none';
    });
myWorktab.addEventListener('click', () => { 
    myWorkmenu.style.top = '0%';
    });
myUpdown.addEventListener('click', () => { 
    myWorkmenu.style.top = '110%';
    });
    myWorkmenu.style.transitionDuration = '2s';