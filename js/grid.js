$(function(){
    var clicking = false;
    var square = '<div class="square grass"></div>'
    var x = 100;
    for(i=0; i<x; i++){
        $('#grid').append(square);
    }
    count();
    $('.square').on({
        mouseenter:  function(){
            $(this).addClass('highlight');
        },
        mouseleave: function(){
            $(this).removeClass('highlight');
        }
        });

    $('.square').on('click', function(){
        if($(this).hasClass('selected')){
            $(this).removeClass('selected');
        }else{
            $(this).addClass('selected');
        }
    });

    $('#clear-selected').on('click', function(){
        $('.square').removeClass('selected');
        count();
    });

    $('.world-item').on('click', function(){
        var item = $(this).attr('ref');
        $('.selected').attr('class','square '+item);
        $('#clear-selected').trigger('click');
    });

    $('#reset').on('click', function(){
        $('.square').attr('class','square grass');
        count();
    });
});

function count(){
    $('#total-selected').html($('.selected').length);
    $('#total-grass').html($('.grass').length);
    $('#total-rock').html($('.rock').length);
    $('#total-water').html($('.water').length);
    $('#total-tree').html($('.tree').length);
};