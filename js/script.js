$(document).ready(function() {
  tinymce.init({ selector:'textarea.editor' });

  // $('.open-review-form').on('click', function() {
    //   var clicks = $(this).data('clicks');
    //   if (clicks) {
    //     $('.simple-review-form').hide();
    //   } else {
    //     $('.simple-review-form').show();
    //   }
    //   $(this).data("clicks", !clicks);
    // });

  $('.open-review-form').on('click', function() {
    $('.simple-review-form').show();
  });

  $('.rate').raty({
    click: function(score, evt) {
    // alert('ID: ' + this.id + "\nscore: " + score);
   }
  });

  $('.review_form').submit(function() {
    var now = new Date();
    var review_data = {
      username: "",
      content: "",
      date: ("0" + now.getDate()).slice(-2) + '.' + ("0" + (now.getMonth() + 1)).slice(-2) + '.' + now.getFullYear(),
      email: "",
      rate: ""
    };

    review_data.checked = $('not-spam').val(); console.log(review_data);
    review_data.username = $('input[name="name"]').val();
    // review_data.email = $('input[name="email"]').val();
    review_data.rate = $('#ID input[name="score"]').val();  console.log(review_data);
    review_data.content = $.trim(tinymce.get('editor-content').getContent());

    var review_clone = $('.review-template').clone();
    review_clone.find('.review-date').html(review_data.date);
    review_clone.find('.review-username').html(review_data.username);
    // review_clone.find('.review-email').html(review_data.email);
    review_clone.find('.review-rate').html(review_data.rate);
    review_clone.find('.review-content').html(review_data.content);

    review_clone.removeClass('review-template');
    $('.review-container').append(review_clone);
    $('.review_form').trigger('reset');
    $('.simple-review-form').hide();

    return false;//остаемся на странице
  });
});