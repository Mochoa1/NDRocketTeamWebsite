'use strict';

angular
    .module('crBootstrapNavbarApp', [
        'ui.router',
        'cr.bootstrap.navbar',
        'ngPrettyJson'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

        var demoController = function($scope, $state){
            $scope.currentState = $state.current.data;
            $scope.parentState = {
                name : $state.current.parent,
                //data : $state.get($state.current.parent).data
            };
        };

        $stateProvider
            // First group of nav links
            .state('home', {
                url         : '/home',
                templateUrl : 'src/view/home/home.html',
                data        : {
                    bsNav : {
                        type        : 'brand',
                        textDisplay : 'home',
                        group       : 0
                    }
                }
            })
            .state('photos', {
                url         : '/photos',
                templateUrl : 'src/view/photos/photos.html',
                controller  : demoController,
                data        : {
                    bsNav : {
                        textDisplay : 'Photo Gallery',
                        group       : 1
                    }
                }
            })
            .state('calendar', {
                url         : '/calendar',
                templateUrl : 'src/view/calendar/calendar.html',
                controller  : demoController,
                data        : {
                    bsNav : {
                        textDisplay : 'Calendar',
                        group       : 1
                    }
                }
            })
            .state('team', {
                url         : '/team',
                templateUrl : 'src/view/team/team.html',
                controller  : demoController,
                data        : {
                    bsNav : {
                        textDisplay : 'Team',
                        group       : 1
                    }
                }
            })

            .state('docs', {
                url         : '/docs',
                templateUrl : 'src/view/docs/docs.html',
                controller  : demoController,
                data        : {
                    bsNav : {
                        textDisplay : 'Documents',
                        group       : 1
                    }
                }
            })
            .state('contact', {
                url         : '/contact',
                templateUrl : 'src/view/contact/contact.html',
                controller  : demoController,
                data        : {
                    bsNav : {
                        textDisplay : 'Contact',
                        group       : 1
                    }
                }
            })
    }]);
