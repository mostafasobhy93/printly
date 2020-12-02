$(function () {
  /**/
  /* scroll down */
  /**/
  $(".scroll-down-button").on("click", function () {
    $("html, body").animate(
      { scrollTop: $("#pt-start").offset().top },
      { duration: 1500, easing: "easeInOutExpo" }
    );
    return false;
  });
    
    // accordion
    $('.files-section .collapse-btn').click(function (e) {
        e.preventDefault();
        $(this).children('i').toggleClass('fa-minus-circle fa-plus-circle')
        $('#' + $(this).data('collapse')).fadeToggle();
    });
    
    
    // select all
    $('#select-all').click(function () {
        if(this.checked) {
            $('[name^="cb"]').each(function() {
                this.checked = true;                        
            });
        } else {
            $('[name^="cb"]').each(function() {
                this.checked = false;                       
            });
        } 
    });
    
    // payment-toggle
    $('.pt-payment-opts .pay-methods .payment-toggle').click(function (e) {
        e.preventDefault();
        $('.pt-payment-opts .pay-methods .payment-toggle').removeClass('active');
        $(this).addClass('active');
        $('.pt-payment-opts .payment-fade').hide();
        $('#' + $(this).data('toggle')).fadeIn();
    });
    
    // account-toggle
    $('.myaccount-section .account-toggle').click(function (e) {
        e.preventDefault();
        $('.myaccount-section .account-toggle').removeClass('active white');
        $(this).addClass('active white');
        $('.myaccount-section .account-content .account-fade').hide();
        $('#' + $(this).data('account')).fadeIn();
    });
    
    // store-toggle
    $('.store-section .store-toggle .toggle-bg').click(function (e) {
        e.preventDefault();
        $('.store-section .store-toggle .toggle-bg').removeClass('active');
        $(this).addClass('active');
        $('.store-section .pt-layout-product-item').hide();
        $('#' + $(this).data('toggle')).fadeIn();
    });
    
    // if checked
    $('.pt-payment-form form .row-price .custom-radio input').click(function () {
        if($(this).is(':checked')) {
            $('.pt-payment-form form .row-price').removeClass('active');
            $(this).parents('.pt-payment-form form .row-price').addClass('active');
        }
    });
    
    ///// book-details-slider 
    $('.book-details-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true
    });
    // sync thumbnails
    $('.thumbnails-slider > div').click(function() {
        $('.book-details-slider').slick('slickGoTo',$(this).index());
    });

    
    
    ///// image zoom
    $('.img-zoom').zoom();
    
});
