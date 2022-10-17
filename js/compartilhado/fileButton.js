  $(function() {
    $('#labelbotom').hover(function() {

      $('#pathfile').css('fill', '#f5f5f5');
      
    }, function() {

      // on mouseout, reset the background colour
      $('#pathfile').css('fill', '');

    });
  });

  $(function() {
    $('#labelbotom').hover(function() {

      $('#spanfile').css('color', '#f5f5f5');
      
    }, function() {

      // on mouseout, reset the background colour
      $('#spanfile').css('color', '');

    });
  });