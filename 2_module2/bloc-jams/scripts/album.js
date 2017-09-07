  var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
     + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     var $row = $(template);

    var clickHandler = function() {
        var songNumber = $(this).attr('data-song-number');

        if (currentlyPlayingSongNumber !== null) {
            // Revert to song number for currently playing song because user started playing new song.
            var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]');
            currentlyPlayingCell.html(currentlyPlayingSongNumber);
            updatePlayerBarSong();
        }
        if (currentlyPlayingSongNumber !== songNumber) {
            // Switch from Play -> Pause button to indicate new song is playing.
            $(this).html(pauseButtonTemplate);
            $('.main-controls .play-pause').html(playerBarPlayButton);
            currentlyPlayingSongNumber = songNumber;
            currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
        } else if (currentlyPlayingSongNumber === songNumber) {
            // Switch from Pause -> Play button to pause currently playing song.
            $(this).html(playButtonTemplate);
            currentlyPlayingSongNumber = null;
            currentSongFromAlbum = null;
        }
    };

     var onHover = function(event) {
        var songNumber = $(this).find('.song-item-number').attr('data-song-number') 
        // .find() method traverse downwards along descendants of DOM elements, all the way down to the last descendan
        
        if (songNumber != currentlyPlayingSongNumber) {
            $(this).find('.song-item-number').html(playButtonTemplate);
        }
     };
     var offHover = function(event) {
        var songNumber = $(this).find('.song-item-number').attr('data-song-number') 

        if (songNumber != currentlyPlayingSongNumber) {
            $(this).find('.song-item-number').html(songNumber)
        }

     };


     $row.find('.song-item-number').click(clickHandler);
     // Within the template, find the .song-item-number and add a clickHandler function when clicked
     $row.hover(onHover, offHover);
     // create a new function to happen when hovering over, and another when offHover
     return $row
     // return it with event listeners attached
 };


 var setCurrentAlbum = function(album) {
     // select HTML elements required to display on the page
     currentAlbum = album
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');

     // text() method to replace the content of the text nodes i.e. nodeValue
      $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);

     // set the initial value of the innerHTML of the parent to an empty string, so we can loop next step
     // albumSongList.innerHTML = '';
     $albumSongList.empty();
 

     // go through all the songs in the specified album object
     for (var i = 0; i < album.songs.length; i++) {
         // albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);
     }
 };

 var trackIndex = function(album, song) {
     return album.songs.indexOf(song);
 };

 var updatePlayerBarSong = function() {
    // could also use .text()
    $('.currently-playing .song-name').html(currentSongFromAlbum.title);
    $('.currently-playing .artist-name').html(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').html(currentSongFromAlbum.title + " - " + currentAlbum.artist);
    
    $('.main-controls .play-pause').html(playerBarPauseButton);

 }

var albumList = [ albumPicasso, albumMarconi, albumSwift ];
var albumCounter = 1;
var albumImage = document.getElementsByClassName('album-cover-art')[0];

// set an event listener on the Image
albumImage.addEventListener("click", function() {
    setCurrentAlbum( albumList[albumCounter] );
    if (albumCounter == 2){
        albumCounter = 0;
    } else {
        albumCounter++;
    }
})

 var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
 var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
 var playerBarPlayButton = '<span class="ion-play"></span>';
 var playerBarPauseButton = '<span class="ion-pause"></span>';
 // var currentlyPlayingSong = null;
 var currentAlbum = null;
 var currentlyPlayingSongNumber = null;
 var currentSongFromAlbum = null;


$(document).ready(function() {
 setCurrentAlbum(albumPicasso);
});