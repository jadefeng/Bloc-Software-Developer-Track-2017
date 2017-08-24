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
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };

 var setCurrentAlbum = function(album) {
     // select HTML elements required to display on the page
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
     // finds the first child node of an element
     // nodeValue returns or sets the value of a node
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // set the initial value of the innerHTML of the parent to an empty string, so we can loop next step
     albumSongList.innerHTML = '';
 
     // go through all the songs in the specified album object
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
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


window.onload = function() {
     setCurrentAlbum(albumPicasso);
 };

