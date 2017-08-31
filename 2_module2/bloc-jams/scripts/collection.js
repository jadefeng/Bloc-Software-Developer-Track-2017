var buildCollectionItemTemplate = function() {
     var template =
       '<div class="collection-album-container column fourth">'
     + '  <img src="assets/images/album_covers/01.png"/>'
     + '  <div class="collection-album-info caption">'
        ...
     + '  </div>'
     + '</div>'
     ;
 
     // #2
     return $(template);
 };

 $(window).load(function() {
     // #1
     var $collectionContainer = $('.album-covers');
     // Replacing .innerHTML with .empty()
     collectionContainer.empty();
 
     // #3
     for (var i = 0; i < 12; i++) {
         var $newThumbnail = buildCollectionItemTemplate();
         $collectionContainer.append($newThumbnail);
         // append the $newThumbnail to the container in a loop

     }
 })
