"use strict";

(function(){

  angular
  .module("lyrics", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    Router
  ])
  .factory("LyricsFactory", [
    "$resource",
    LyricsFactory
  ])
  .controller("LyricsController", [
    "LyricsFactory",
    LyricsController
  ])

  function Router($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "/assets/html/lyrics-welcome.html"
    })
    .state("lyrics", {
      url: "/lyrics",
      templateUrl: "/assets/html/lyrics-generator.html",
      controller: "LyricsController",
      controllerAs: "LyricsViewModel"
    })
  };

  function LyricsFactory($resource){
    var Lyrics = $resource("/api/lyrics", {}, {
      update: {method: "PUT"}
    });

    Lyrics.find = function(property, value, callback){
      Lyrics.all.$promise.then(function(){
        Lyrics.all.forEach(function(lyrics){
          if(lyrics[property] == value) callback(lyrics);
        });
      });
    };

    Lyrics.all = Lyrics.query();

    return Lyrics;
  };

  function LyricsController(lyrics){
    var vm = this;
    vm.lyrics = lyrics.all;

    vm.num1 = randomNumber();
    vm.num2 = randomNumber();
    vm.num3 = randomNumber();
    vm.num4 = randomNumber();
    vm.num5 = randomNumber();
    vm.num6 = randomNumber();
    vm.num7 = randomNumber();
    vm.num8 = randomNumber();
    vm.num9 = randomNumber();
    vm.num10 = randomNumber();
  };

  function randomNumber(){
    var randomDecimal = Math.random() * 32;
    var num = Math.round(randomDecimal);

    return num
  };

})();
