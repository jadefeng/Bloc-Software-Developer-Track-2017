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
 
     return $(template);
 };

 var setCurrentAlbum = function(album) {
     // select HTML elements required to display on the page
      var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');

     // finds the first child node of an element
     // nodeValue returns or sets the value of a node
     // albumTitle.firstChild.nodeValue = album.title;
     // albumArtist.firstChild.nodeValue = album.artist;
     // albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     // albumImage.setAttribute('src', album.albumArtUrl);

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


var findParentByClassName = function(element, targetClass) {
    if (element) { // check if there is an element
        var currentParent = element.parentElement;
        while (currentParent.className !== targetClass && currentParent.className !== null) {
            currentParent = currentParent.parentElement;
        }
        return currentParent;
    }
};

// Assignment challenge - not completely happy with the outcome.
// var findParentByClassName = function( element, parentClassName ) {
//     // QUESTION: why do we need to check for the existance of the elemClassName within this argument
//     if (element) {
//         // var obj = document.getElementsByClassName(elemClassName)[0];

//         var currentParent = element.parentElement;
//         // While currentParent is NOT the parent class name and is NOT null, then repeat the loop

//         while (currentParent.className !== null && currentParent.className !== parentClassName) {
//             if (currentParent.className == parentClassName) { // if we found that the current parent does match the class name
//                 currentParent = currentParent.parentElement;
//             } else {
//                 // parent does NOT patch the class name
//                 console.log("No parent found")
//             }
//             return currentParent
//         }

//         return currentParent
//         console.log("No parent found with that class name")

//     }
// }

// QUESTION: Could we go over this function from https://github.com/Bloc/curriculum-public/blob/master/web-development/frontend/foundation/27-dom-scripting-play-pause-part-2/get-song-item.js
var getSongItem = function(element) {
     switch (element.className) {
        case 'album-song-button':
        case 'ion-play': // Where did ion-play come from?
        case 'ion-pause':
            return findParentByClassName(element, 'song-item-number');
        case 'album-view-song-item':
            return element.querySelector('.song-item-number');
        case 'song-item-title':
        case 'song-item-duration':
            return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
        case 'song-item-number':
            return element;
        default:
            return;
    }     
}

 var clickHandler = function(targetElement) {

     var songItem = getSongItem(targetElement);

     if (currentlyPlayingSong === null) {
         songItem.innerHTML = pauseButtonTemplate;
         currentlyPlayingSong = songItem.getAttribute('data-song-number');
     } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
         songItem.innerHTML = playButtonTemplate;
         currentlyPlayingSong = null;
     } else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
         var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
         currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
         songItem.innerHTML = pauseButtonTemplate;
         currentlyPlayingSong = songItem.getAttribute('data-song-number');
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

var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');

var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
 var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

 var currentlyPlayingSong = null;


window.onload = function() {
 setCurrentAlbum(albumPicasso);

 songListContainer.addEventListener('mouseover', function(event) {

         // Only target individual song rows during event delegation
         if (event.target.parentElement.className === 'album-view-song-item') {
             // Change the content from the number to the play button's HTML
              event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
            var song = getSongItem(event.target);

            console.log("the song is ", song.getAttribute("data-song-number"), currentlyPlayingSong);
            if (song.getAttribute('data-song-number') !== currentlyPlayingSong) {
                song.innerHTML = playButtonTemplate;
            }


         }
 });

  for (var i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {
            // caching the song we're leaving
            console.log("leaving the mouse");
             var songItem = getSongItem(event.target);
             var songItemNumber = songItem.getAttribute('data-song-number');
        
            console.log("the mouse is leaving ", songItemNumber, currentlyPlayingSong);

             // conditional check that the item the mouse is leaving is NOT the current song
             if (songItemNumber !== currentlyPlayingSong) {
                 songItem.innerHTML = songItemNumber;
             }

         });


         songRows[i].addEventListener('click', function(event) {
             clickHandler(event.target);
         });
 }
}