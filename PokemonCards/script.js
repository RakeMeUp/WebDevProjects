$(document).ready(()=>{

    let cache = {};
    let count = 0;

    const getPokemons = (offset = 0) =>{
        for(let i = 1; i <= offset + 500; i++){
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${i}`,
                success: (response)=>{
                    cache[response.id] = {
                        name    : response.name,
                        imgSrc  : response.sprites.front_default,
                        id      : response.id
                    }
                }                
            })
        }
    }

    getPokemons();



    $(window).scroll(function(){
        toScroll = $(document).height() - $(window).height() - 250;
        if ( $(this).scrollTop() > toScroll && flagToScroll == true) {
            loadCards(20)
        }


    });

    $('#Show').on('mousedown', function () { 
        flagToScroll = true;
        loadCards(20)
     });  

    $('#Reset').on('click', function(){
        $('#container').empty();
        flagToScroll = false;
        count = 0
        $('#modal').removeClass("loading")
    }); 

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const loadCards = (cardNum) =>{
        for(let i = 1; i <= cardNum; i++){
            $('#container')             .append(`<div id="pokemon${i + count}" class="card"></div>`)
            
            $(`#pokemon${i + count}`)   .append(`<a href="https://pokemon.fandom.com/wiki/${cache[i + count].name}" target="_blank"><img src="${cache[i + count].imgSrc}" width="200px" height="200px" ></a>`)
                                        .append(`<span class="idNumber">${cache[i + count].id}</span>`)
                                        .append(`<span class="name">${capitalize(cache[i + count].name)}</span>`)

            $('.idNumber')              .slice( 99 ).addClass('above100');
            
        }   

        count += 20;
        console.log(count)
        if(count % 100 == 0){
            getPokemons(count);
            $('#modal').addClass("loading")
            setTimeout(()=>{
                $('#modal').removeClass("loading")
            }, 1000)


            console.log("gettin more")
        }
        
    }
    
})
