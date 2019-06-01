window.onload = function () {


    let li = document.querySelectorAll('#wiev-object'),
        div = document.querySelector('#map'),
        years = document.querySelectorAll('#years'),
        img = document.querySelectorAll('img'),
        html = document.querySelector('html'),
        body = document.querySelector('body')


    for (i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function (e) {
            e.preventDefault()

            if (this.classList.contains('belovo')) {
                div.innerHTML = '<object type="text/html" data="belovo.html" ></object>'
                div.style.display = 'block'
            } else if (this.classList.contains('kemerovo')) {
                div.innerHTML = '<object type="text/html" data="index.html"></object>'
                div.style.display = 'block'
            } else if (this.classList.contains('vynogradovsky')) {
                div.innerHTML = '<object type="text/html" data="vynogradovsky.html"></object>'
                div.style.display = 'block'
            } else if (this.classList.contains('alekceev')) {
                div.innerHTML = '<object type="text/html" data="alekceev.html"></object>'
                div.style.display = 'block'
            } else if (this.classList.contains('chernigovec')) {
                div.innerHTML = '<object type="text/html" data="chernigovec.html"></object>'
                div.style.display = 'block'
            } else if (this.classList.contains('gramotein')) {
                div.innerHTML = '<object type="text/html" data="gramotein.html"></object>'
                div.style.display = 'block'
            } else if (this.classList.contains('polosuh')) {
                div.innerHTML = '<object type="text/html" data="polosuh.html"></object>'
                div.style.display = 'block'
            } else if (this.classList.contains('shlistvyag')) {
                div.innerHTML = '<object type="text/html" data="shlistvyag.html"></object>'
                div.style.display = 'block'
            } else if (this.classList.contains('shugnaya')) {
                div.innerHTML = '<object type="text/html" data="shugnaya.html"></object>'
                div.style.display = 'block'
            } else if (this.classList.contains('shumayskoe')) {
                div.innerHTML = '<object type="text/html" data="shumayskoe.html"></object>'
                div.style.display = 'block'
            } else if (this.classList.contains('karta-vod')) {
                console.log('object');
                div.innerHTML = '<object type="text/html" data="interactive_map/main.html"></object>'
                div.style.display = 'block'
            } else {
                
            }
            


            // div.innerHTML = '<object type="text/html" data="vynogradovsky.html" ></object>'
            // div.style.display = 'block'

        })

    }



    for (i = 0; i < years.length; i++) {
        years[i].addEventListener('click', function (e) {
            if (this.classList.contains('true')) {
                console.log('object')
            }
        })

    }

    /* A simple and scalable hamburger menu using css transitions. */


    // for (i = 0; i < years.length; i++) {
    //     img[i].addEventListener('click', function(e) {   
    //         console.log('img');
    //     })

    // }

    function checkIndex() {
        if (html.classList.contains('index')) {
            div.innerHTML = '<div style="position:absolute; top:5px; right:50%;">Hello</div>'
            div.innerHTML = '<h1 class="object-header">Кемеровская область</h1><div class="navigation-bar"><a href="#openModal" class="objects" id="passport">Паспорт объекта</a><a href="#openModal" class="objects" id="karta">Дорожная карта</a><div id="openModal" class="modalDialog"><div class="modal-container"><a href="#close" title="Закрыть" class="close">X</a><img src="img/vinograd/passport/passVinograd.jpg" class="map-obj pass"></div></div></div><div id="map"><img src="img/map/karta-ko.jpg" alt="" class="map-obj main-map"></div><h1>Привет</h1>'
            div.style.display = 'block'

        }
    }

    checkIndex()

}