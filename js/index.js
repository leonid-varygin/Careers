window.onload = function () {


    let li = document.querySelectorAll('#wiev-object'),
        div = document.querySelector('#map'),
        years = document.querySelectorAll('#years'),
        img = document.querySelectorAll('img')


    for (i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function (e) {
            e.preventDefault()

            if (this.classList.contains('belovo')) {
                div.innerHTML = '<object type="text/html" data="belovo.html" ></object>'
                div.style.display = 'block'
            } else if(this.classList.contains('kemerovo')) {
                div.innerHTML = '<object type="text/html" data="index.html"></object>'
                div.style.display = 'block'
            } else if(this.classList.contains('object')) {
                div.innerHTML = '<object type="text/html" data="vynogradovsky.html"></object>'
                div.style.display = 'block'
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

}