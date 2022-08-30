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
      
    