(function(){
    // @returns an array
    function SongPlayer(){

      var SongPlayer = {};
      /*
      * @desc current song playing
      * @type {object}
      */

      var currentSong = null;
      /*
      * @desc Buzz object audio file
      * @type {Object}
      */
      var currentBuzzObject = null;

      /*
      * @function setSong
      * @desc Stops currently playing song and laods new audio file as currentBuzzObject
      * @param {Object} song
      */

      var setSong = function(song){
        if (currentBuzzObject){
          currentBuzzObject.stop();
          currentSong.playing = null;
        }

        currentBuzzObject = new buzz.sound(song.audioUrl, {
          formats: ['mp3'],
          preload: true
        });

        currentSong = song;
      };
      /*
      * function playSong
      * @desc Plays current song
      * @param {Object} song
      */

      var playSong = function(song){
          currentBuzzObject.play();
          song.playing = true;

      };

      /*
      * function play
      * @desc determines whether to play the song or switch to playing a diffent song
      * @param {Object} song
      */



      SongPlayer.play = function(song){
        if (currentSong !== song){

          setSong(song);
          playSong(song);

        }else if (currentSong === song){
           if (currentBuzzObject.isPaused()){
              playSong(song);
            }
        }


      };
      /*
      * function pause
      * @desc stops the song
      * @param {Object} song
      */

      SongPlayer.pause = function(song){
        currentBuzzObject.pause();
        song.playing = false;
      };


      return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer',SongPlayer);
})();
