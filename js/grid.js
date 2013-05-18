$(function(){

    var square = '<div class="square" style="height: 10%; width: 9.7%;"></div>'
    var x = 100;
    for(i=0; i<x; i++){
        $('#grid').append(square);
    }


    $('.square').hover(
        function(){
            $(this).addClass('highlight');
        },
        function(){
            $(this).removeClass('highlight');
        });

    $('.square').click(function(){
        if($(this).hasClass('selected')){
            $(this).removeClass('selected');
        }else{
            $(this).addClass('selected');
        }
        count();
    });

    $('#clear-all').on('click', function(){
        $('.square').removeClass('selected');
        count();
    });

});

function count(){
    $('#total-selected').html($('.selected').length);
};