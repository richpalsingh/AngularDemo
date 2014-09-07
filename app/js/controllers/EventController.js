/**
 * Created with JetBrains WebStorm.
 * User: richpalsingh
 * Date: 8/26/14
 * Time: 10:52 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict'

eventsApp.controller('EventController',
    function EventController($scope)
    {
        $scope.boolValue=true,
            $scope.mystyle={color:'red'};
        $scope.myclass='blue';
        $scope.buttonDisabled='true';
        $scope.snippet='<span style="color:red">hi there</span>';
        $scope.event={
            name:'Angular Boot Camp',
            date:'1/1/2013',
            time: '10:30 am',
            location:{
                address  : 'Google Headquarters',
                city: 'Mountain View'    ,
                province:'CA'
                    },
            imageURL:'/img/angular.png',
            sessions :[{name:'Directives MasterClass',
                    creatorName:'Bob Smith',
                    duration:2,
                    level:'Advanced',
                    abstract:'In this session we learn the ins and outs.',
                upVoteCount:0},

                {name:'scope for fun and profit',
                    creatorName:'Neha Smith',
                    duration:3,
                    level:'Advanced',
                    abstract:'In this session we learn the ins and outs.',
                    upVoteCount:0},
                {name:'my tutorials',
                    creatorName:'Rich Smith',
                    duration:4,
                    level:'Advanced',
                    abstract:'In this session we learn the ins and outs.',
                    upVoteCount:0}]

        }

        $scope.upVoteSession=function(session)
        {
            session.upVoteCount++;

        } ;

        $scope.downVoteSession=function(session)
        {
            session.upVoteCount--;

        }  ;

    }

);

