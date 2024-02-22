document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();

var showMenu = document.getElementById('showMenu')
var hideMenu = document.getElementById('hideMenu')
var navItems = document.getElementById("navItems");

navItems.style.right = '-200px';
showMenu.onclick = function(){
    if(navItems.style.right == '-200px'){
        navItems.style.right = '0';
    }
    else{
        navItems.style.right = '-200px';
    }
}

hideMenu.onclick = function(){
    if (navItems.style.right == '0') {
        navItems.style.right = '-200px'
    } else {
        navItems.style.right = '-200px'
    }
}
