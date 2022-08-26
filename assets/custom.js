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
   jQuery(".custom-vector.mobile").click(function() {
        
        if (jQuery("#video_id_mobile").get(0).paused) {
          jQuery("#video_id_mobile").trigger('play');
          jQuery(".custom-vector-icon.play").hide();
          jQuery(".custom-vector-icon.pause").show();
        }
          
        else {
          jQuery("#video_id_mobile").trigger('pause');
          jQuery(".custom-vector-icon.play").show();
          jQuery(".custom-vector-icon.pause").hide();
        }
        });
});
      
    