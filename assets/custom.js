 $(document).ready(function(){

   
    /*  $(".videomute").click(function(){
        
                     jQuery("#video_id").prop('muted', !jQuery("#video_id").prop('muted'));
                  
                    if (jQuery(this).html() == ' <img src="//cdn.shopify.com/s/files/1/0280/0035/4364/t/56/assets/unmute.png?v=71497788011133582291658480708" class="unmute">') {
                      jQuery(this).html(' <img src="//cdn.shopify.com/s/files/1/0280/0035/4364/t/56/assets/mute.png?v=126087702582074586071658480708" class="mute">');
                    } 
                    
                    else {
                      jQuery(this).html(' <img src="//cdn.shopify.com/s/files/1/0280/0035/4364/t/56/assets/unmute.png?v=71497788011133582291658480708" class="unmute">');
                         }
        
      });*/
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
        
        

      
        // if($(window).width() < 768) {
        //   setTimeout(() => {
        //     jQuery(".custom-vector.mobile").click();
        //     console.log('play click')  
        //   }, 1000);
          
        // }
  //       var iframe_video = document.querySelector('#video_id_mobile');
  //       var player_video = new Vimeo.Player(iframe_video);
  //       player_video.on('ended', function() {
  //         player_video.pause();
  //       });
  //  jQuery(".custom-vector.mobile .play").click(function() {
  //   console.log('play video')
    
  //     player_video.play();
  //     jQuery(".custom-vector-icon.play").hide();
  //     jQuery(".custom-vector-icon.pause").show();
  //   });
});
      
    