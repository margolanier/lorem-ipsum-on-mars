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
  // .factory("LyricsFactory", [
  //   "$resource",
  //   LyricsFactory
  // ])
  // .controller("LyricsController", [
  //   "LyricsFactory",
  //   lyricsIndexController
  // ])

  function Router($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "/assets/html/lyrics-welcome.html"
    })
  };

})();
