
    let mainmenu = document.querySelector('.menu');
    let open = document.getElementById('buton_1');
    let close = document.getElementById('buton_2');
    let body = document.querySelector("body");

    function openMenu(){
        mainmenu.style.right = '0';
        open.style.display = 'none';
        close.style.display = 'block';
        body.style.overflow = "hidden";
    }

    function closeMenu(){
        mainmenu.style.right = '-100%';
        open.style.display = 'block';
        close.style.display = 'none';
        body.style.overflow = "visible";
    }