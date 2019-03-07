'use strict';

/* App Module */

var cookApp = angular.module('cookApp', [
  'ngRoute',

  'cookControllers',
  'cookServices'
]);

cookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pages', {
        templateUrl: 'partials/pages.html',
        controller: 'PageListCtrl'
      }).
      when('/pages/INQ/:pageId', {
        templateUrl: function(params) {return 'partials/INQ/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
      when('/pages/PIN/:pageId', {
        templateUrl: function(params) {return 'partials/PIN/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
      when('/pages/DEP/:pageId', {
        templateUrl: function(params) {return 'partials/DEP/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
      when('/pages/NCDEP/:pageId', {
        templateUrl: function(params) {return 'partials/NCDEP/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
      when('/pages/CWD/:pageId', {
        templateUrl: function(params) {return 'partials/CWD/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
 	    when('/pages/EC/:pageId', {
        templateUrl: function(params) {return 'partials/EC/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }). 
      when('/pages/TRF/:pageId', {
        templateUrl: function(params) {return 'partials/TRF/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
	  when('/pages/TFC/:pageId', {
        templateUrl: function(params) {return 'partials/TFC/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
	  when('/pages/DCW/:pageId', {
        templateUrl: function(params) {return 'partials/DCW/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
	  when('/pages/AGENT/:pageId', {
        templateUrl: function(params) {return 'partials/AGENT/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
      when('/pages/PLATFORM/:pageId', {
        templateUrl: function(params) {return 'partials/PLATFORM/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }). 
      when('/pages/CARD/:pageId', {
        templateUrl: function(params) {return 'partials/CARD/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
	  when('/pages/FINANCIAL/:pageId', {
        templateUrl: function(params) {return 'partials/FINANCIAL/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
	  when('/pages/PASS/:pageId', {
        templateUrl: function(params) {return 'partials/PASS/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
	  when('/pages/LOANS/:pageId', {
        templateUrl: function(params) {return 'partials/LOANS/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
	  when('/pages/SIGN/:pageId', {
        templateUrl: function(params) {return 'partials/SIGN/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
	  when('/pages/BANK/:pageId', {
        templateUrl: function(params) {return 'partials/BANK/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
	  when('/pages/ACCOUNT/:pageId', {
        templateUrl: function(params) {return 'partials/ACCOUNT/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
      when('/pages/SOCIAL/:pageId', {
        templateUrl: function(params) {return 'partials/SOCIAL/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
	  when('/pages/CITIZEN/:pageId', {
        templateUrl: function(params) {return 'partials/CITIZEN/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
      when('/pages/MEDIA/:pageId', {
        templateUrl: function(params) {return 'partials/MEDIA/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
      when('/pages/ADMIN/:pageId', {
	    // params is $routeParams
        templateUrl: function(params) {return 'partials/ADMIN/' + params.pageId + '.html'; },
        controller: 'AdminPageCtrl'
      }).
       
      when('/pages/:pageId', {
	    // params is $routeParams
        templateUrl: function(params) {return 'partials/' + params.pageId + '.html'; },
        controller: 'PageCtrl'
      }).
      
      otherwise({
        redirectTo: '/pages'
      });
  }]);

  function robotClick(text) {
    $(":button").each(function(index, el){
        if(el.textContent == text) {
            el.click();
        }
    })
}
