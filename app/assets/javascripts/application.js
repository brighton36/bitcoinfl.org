//= require jquery_ujs
//= require jquery.fancybox.pack
//= require jquery.mousewheel-3.0.6.pack
//= require responsiveslides.min
//= require jquery.scrollTo
//= require jquery.nav
//= require jquery.easytabs.min
//= require jquery.inview.min
//= require tinynav.min
//= require jquery.fancybox-media
//= require custom

$(document).ready(function() {
  $('.fancybox-learn-more').fancybox();

  $('#county_selector').change(function() {
    goto_url = $(this).find('option:selected').val();

    if (goto_url == null || goto_url == '')
      $('#visit_meetup').hide();
    else
      $('#visit_meetup').show();
  });

  $('#visit_meetup').click(function(e) {
    e.preventDefault();
    $('#visit_meetup').addClass('disabled');
    $('#visit_meetup_spinner').show();

    goto_url = $('#county_selector option:selected').val();
    location.href = goto_url;
  });
});
