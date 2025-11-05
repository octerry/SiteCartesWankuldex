changeWidth

function changeWidth() {
    var ratio = window.innerWidth / window.innerHeight //Ratio de la fenetre
    var scroll = window.pageYOffset / ratio ;
    var width = 80 - scroll;
    var opacity = 100 - (scroll*10)
    if (opacity < 0){ 
        opacity = 0
    }

    if (ratio >= 1) {
        if (width <= 100) {
            document.getElementById('resizable_title_div').style.width = width + 'vw';
            document.getElementById('title_h2').style.opacity = opacity + '%'
        }
        else {
            document.getElementById('resizable_title_div').style.width = '40vw';
            document.getElementById('title_h2').style.opacity = '0%'
        }
    }
    else {
        if (width <= 100) {
            document.getElementById('resizable_title_div').style.width = width + 'vw';
            document.getElementById('title_h2').style.opacity = opacity + '%'
        }
        else {
            document.getElementById('resizable_title_div').style.width = '50vw';
            document.getElementById('title_h2').style.opacity = '0%'
        }
    }
}

window.addEventListener('scroll', function(){
    this.requestAnimationFrame(changeWidth);
})