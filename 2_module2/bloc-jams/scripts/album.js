 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };

 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

 var albumSwift = {
     title: '1989',
     artist: 'Taylor Swift',
     label: 'EM',
     year: '2014',
     albumArtUrl: 'assets/images/album_covers/02.png',
     songs: [
         { title: 'Shake It Off', duration: '3:13' },
         { title: 'Blank Space', duration: '3:01' },
         { title: 'Welcome to New York', duration: '3:21'},
         { title: 'Out of the Woods', duration: '3:14' },
         { title: 'Style', duration: '2:15'}
     ]
 };

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

        if (currentlyPlayingSong !== null) {
            // Revert to song number for currently playing song because user started playing new song.
            var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
            currentlyPlayingCell.html(currentlyPlayingSong);
        }
        if (currentlyPlayingSong !== songNumber) {
            // Switch from Play -> Pause button to indicate new song is playing.
            $(this).html(pauseButtonTemplate);
            currentlyPlayingSong = songNumber;
        } else if (currentlyPlayingSong === songNumber) {
            // Switch from Pause -> Play button to pause currently playing song.
            $(this).html(playButtonTemplate);
            currentlyPlayingSong = null;
        }
    };

     var onHover = function(event) {
        var songNumber = $(this).find('.song-item-number').attr('data-song-number') 
        // .find() method traverse downwards along descendants of DOM elements, all the way down to the last descendan
        
        if (songNumber != currentlyPlayingSong) {
            $(this).find('.song-item-number').html(playButtonTemplate);
        }
     };
     var offHover = function(event) {
        var songNumber = $(this).find('.song-item-number').attr('data-song-number') 

        if (songNumber != currentlyPlayingSong) {
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

 var currentlyPlayingSong = null;


$(document).ready(function() {
 setCurrentAlbum(albumPicasso);
});