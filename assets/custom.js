 $(document).ready(function(){

   jQuery(".custom-vector-icon.pause, .custom-vector.mobile").hide();
      jQuery(".custom-vector.desktop").click(function() {
        
        if (jQuery("#video_id_desktop").get(0).paused) {
          jQuery("#video_id_desktop").trigger('play');
          jQuery(".custom-vector-icon.play").hide();
          jQuery(".custom-vector-icon.pause").show();
        }
          
        else {
          jQuery("#video_id_desktop").trigger('pause');
          jQuery(".custom-vector-icon.play").show();
          jQuery(".custom-vector-icon.pause").hide();
        }
        });

        $('.custom-navigation--header .collection').on('click', function(){
          $('.custom-navigation--body .collections').toggleClass('active');
          $('.custom-navigation--body .concerns').removeClass('active');
          if($('.custom-navigation--body .collections').hasClass('active')) {
            $('.custom-navigation--body').addClass('active')
          }else {
            $('.custom-navigation--body').removeClass('active')
          }
        })
        $('.custom-navigation--header .concern').on('click', function(){
          $('.custom-navigation--body .concerns').toggleClass('active');
          $('.custom-navigation--body .collections').removeClass('active');
          if($('.custom-navigation--body .concerns').hasClass('active')) {
            $('.custom-navigation--body').addClass('active')
          }else {
            $('.custom-navigation--body').removeClass('active')
          }
        })

        var collection_url = "/collections/all";
        var tag = "";

        $('.custom-navigation--body .collection').on('click', function(){
          $('.custom-navigation--header .collection').text($(this).data('collection-title'))
          if ($(this).data('collection-url')) {
            collection_url = $(this).data('collection-url');
          }
          $('.collection--header-content .collection--title').html($(this).data('collection-title') + '<span>'+'(' + $(this).data('product-counts') + ')'+'</span>');
          $('.collection--description').text($(this).data('collection-description'));
          get_products(collection_url, tag);
          $('.custom-navigation--body .collections').removeClass('active');
          $('.custom-navigation--body').removeClass('active');
          $('.custom-navigation--body .concerns').removeClass('active');
        })

        $('.custom-navigation--body .concern').on('click', function(){
          $('.custom-navigation--header .concern').text($(this).text())
          if($(this).data('tag')) {
            tag = $(this).data('tag')
          }
          get_products(collection_url, tag);
          $('.custom-navigation--body .collections').removeClass('active');
          $('.custom-navigation--body').removeClass('active');
          $('.custom-navigation--body .concerns').removeClass('active');
        })

        function get_products(collection_url, tag) {
          var collectionHandle = "";
          if(tag == "") {
            collectionHandle = collection_url;
          } else {
            collectionHandle = collection_url + '/' + tag;
          }
          if (collection_url == "/collections/all") {
            $('.collection--header-content').removeClass('active');
          } else {
            $('.collection--header-content').addClass('active');
          }
          $.get({
            url: collectionHandle + '?view=async',
          })
          .done(function (data) {
            var $content = $(data);
            $('.collection--body--grid').empty();
            $('.collection--body--grid').append($content);
            $('.product--image-wrapper').each(function(){
              $(this).css('height', $(this).width())
            })
            
            $(window).on("resize", function(event){
              $('.product--image-wrapper').each(function(){
                $(this).css('height', $(this).width())
              })
            });
          })
          .fail(function () {
              console.warn('Could not load collection');
          });
        }
        if($(window).scrollTop() > 34) {
          $('.header--root').addClass('active');
        } else {
          $('.header--root').removeClass('active');
        }
        $(window).on("scroll", function(event){
          if($(this).scrollTop() > 34) {
            $('.header--root').addClass('active');
          } else {
            $('.header--root').removeClass('active');
          }
        })

});
      
    