function getNetto(brutto){
    return brutto / 100 * 66.5;
}

$('#submit').on('click', function(event){
    event.preventDefault();

    let netto = getNetto($('#bruttoBer').val());
    let nappalFolyamatos    =   (8 * netto) + (4 * (netto / 100 * 120));
    let ejszakaFolyamatos   =   (4 * (netto / 100 * 130)) + (8 * (netto / 100 * 160));
    let toNappalFolyamatos  =   (8 * (netto * 2)) + (4 * ((netto * 2) / 100 * 120));
    let toEjszakaFolyamatos =   (4 * ((netto * 2) / 100*130)) + 8 * ((netto * 2) / 100 * 160);

    let nappal3muszak       =   (8 * netto + 4 * netto);
    let ejszaka3muszak      =   (4 * (netto / 100 * 130)) + (8 * (netto / 100 * 145));
    let toNappal3muszak     =   (8 * (netto * 2)) + (4 * (netto * 2));
    let toEjszaka3muszak    =   (4 * ((netto * 2) / 100 * 130)) + (8 * ((netto * 2) / 100 * 145));

    let nappalNapszam       =   $('#nappal')    .val();
    let ejszakaNapszam      =   $('#ejszaka')   .val();
    let toNappalNapszam     =   $('#toNappal')  .val();
    let toEjszakaNapszam    =   $('#toEjszaka') .val();
    
    let checkedRadioBtn     =   $('input:checked').val();

    $('.table-container').slideToggle();
    
    if(checkedRadioBtn == "folyamatos"){
        $("#nappalTable")   .text(Math.round(nappalNapszam*nappalFolyamatos));
        $("#ejszakaTable")  .text(Math.round(ejszakaNapszam*ejszakaFolyamatos));
        $("#toNappalTable") .text(Math.round(toNappalNapszam*toNappalFolyamatos));
        $("#toEjszakaTable").text(Math.round(toEjszakaNapszam*toEjszakaFolyamatos));

        $("#sumTable").text(Math.round( nappalNapszam*nappalFolyamatos + 
                                        ejszakaNapszam*ejszakaFolyamatos +
                                        toNappalNapszam*toNappalFolyamatos +
                                        toEjszakaNapszam*toEjszakaFolyamatos));
        } else{
            $("#nappalTable")   .text(Math.round(nappalNapszam*nappal3muszak));
            $("#ejszakaTable")  .text(Math.round(ejszakaNapszam*ejszaka3muszak)); 
            $("#toNappalTable") .text(Math.round(toNappalNapszam*toNappal3muszak));
            $("#toEjszakaTable").text(Math.round(toEjszakaNapszam*toEjszaka3muszak));
        
            $("#sumTable").text(Math.round( nappalNapszam*nappal3muszak + 
                                            ejszakaNapszam*ejszaka3muszak +
                                            toNappalNapszam*toNappal3muszak +
                                            toEjszakaNapszam*toEjszaka3muszak));
        }
});

$('.radio-container, .input-container').on('click', function () {
    $('.table-container').slideUp();
});
