$('.question').click(
    function( e )
    {
        e.preventDefault(); 
        e.stopPropagation();

        
        if( $(this).parent().find('.answer').hasClass('answer-closed') )
        {
        $(this).parent().find('.answer').removeClass('answer-closed');
          $(this).parent().find('.answer').addClass('answer-open');
          
        $(this).find('h2 span').removeClass('closed');
          $(this).find('h2 span').addClass('open');

      } else {
        $(this).parent().find('.answer').removeClass('answer-open');
        $(this).parent().find('.answer').addClass('answer-closed');

        $(this).find('h2 span').removeClass('open');
        $(this).find('h2 span').addClass('closed');
        
      }
    });




$(".dropdown-toggle li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});



$(".dropdown-toggle").click(function(){
  $('.dropdown-selector-list').toggle('dropdown-selector-list.show')
  $('#dropdown-product-btn').toggleClass('open')
});



$('.dropdown-menu a').on('click', function() {
    $('#dropdown-product-btn').html( $(this).context.innerHTML + '<span class="caret"></span>');
    $('#dropdown-product-btn').addClass('product-selected');

    $('#hiddenInput input').val( $(this).context.innerHTML );
});

