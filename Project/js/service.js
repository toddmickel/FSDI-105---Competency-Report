function initService(){
    $('#nails-service').hide();
    $('#grooming-service').hide();
    $('#full-service').hide();
    $('#hair-service').hide();
    $('#hair-service').show(750);

    $('#hair').on('click', function() {
        $('#hair-service').show(750);
        $('#nails-service').hide(750);
        $('#grooming-service').hide(750);
        $('#full-service').hide(750);

    });
    
    $('#nails').on('click', function() {
        $('#nails-service').show(750);
        $('#grooming-service').hide(750);
        $('#full-service').hide(750);
        $('#hair-service').hide(750);
    });
    
    $('#grooming').on('click', function() {
        $('#nails-service').hide(750);
        $('#grooming-service').show(750);
        $('#full-service').hide(750);
        $('#hair-service').hide(750);
    });
    
    $('#full').on('click', function() {
        $('#nails-service').hide(750);
        $('#grooming-service').hide(750);
        $('#full-service').show(750);
        $('#hair-service').hide(750);
    });
}
