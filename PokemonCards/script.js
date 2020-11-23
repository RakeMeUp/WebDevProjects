$(document).ready(function () {
    let countObject = {countNumber:1};
    let iterationEnd = 20;
    let flagToScroll = false;

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
      
    $('#Show').on('mousedown', function () { 
        loadCards();
        flagToScroll = true;
     });  

    $('#Reset').on('click', function(){
        $('#container').empty();
        countObject = {countNumber:1};
        iterationEnd = 20;
        flagToScroll = false;
    });

    $(window).scroll(function(){
        toScroll = $(document).height() - $(window).height() - 250;
        if ( $(this).scrollTop() > toScroll && flagToScroll == true) {
            loadCards();
        }
    });

    function loadCards() {

        let pokeURL = "https://pokeapi.co/api/v2/pokemon/";

        for (let i = countObject.countNumber; i <= iterationEnd; i++) {
            //ajax method so we can set it to synchronous
            $.ajax({

                type: "GET",
                url: pokeURL + i,
                //needs to be synchronous so it dont messes up the order
                async: false,
                success: function (response) {
                    $('#container').append(`<div id="pokemon${i}" class="card">
                                            </div>`);

                    $(`#pokemon${i}`)    .append(`<img src="${response.sprites.front_default}">`)
                                                .append(`<span class="idNumber">${response.id}</span>`)
                                                .append(`<span class="name">${capitalize(response.name)}</span>`)
                    $('.idNumber').slice( 99 ).addClass('above100');

                }
            });
            countObject.countNumber++;
        }
        /* console.log(countObject.countNumber) */
        iterationEnd += 20;
    };
});
