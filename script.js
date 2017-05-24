$(function() {
  $("form").on("submit", function(e) {
     var output = '';
     var checkboxes = $(this).find('input[type="checkbox"]');
     console.log(checkboxes);
     for(var i = 0; i< checkboxes.length; i++){
      var checkbox = $(checkboxes[i]);
      if (checkbox.prop('checked')) {
        output += checkbox.attr('value') + '\n';
      }
     }

    alert('あなたが選んだ果物:\n' + output);
    e.preventDefault();
  });
});