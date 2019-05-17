window.onload = function () {

    let years = document.querySelectorAll('#years')

    for (i = 0; i < years.length; i++) {

        years[i].addEventListener('click', function(e) {
            // e.preventDefault()
            if(this.classList.contains('true')) {
                console.log('object')
                
            }
        })
        
    }

}



// years[i].addEventListener('click', function() {

//     console.log(years[i]);


//     // // e.preventDefault()
//     // console.log(years[i])

//     // if(years[i].classList.contains = 'true') {
//     //     console.log('пы')
//     // }

    
    
// })