'use strict';

/**
 * @ngdoc function
 * @name rCaririApp.controller:PartiesCtrl
 * @description
 * # PartiesCtrl
 * Controller of the rCaririApp
 */
angular.module('rCaririApp')
  .controller('PartiesCtrl', function ($scope, $rootScope, Parties) {
    $rootScope.pageTitle = 'Festas';
    $rootScope.pageIcon = 'cap';
    $scope.parties = [];
    $scope.loading = {
      status: 'indeterminate'
    };

    $scope.loadParties = function() {
      Parties.getParties(function(data) {
        $scope.parties = data.posts;
        $scope.loading.status = 'null';
      });
    }

    $scope.filterByDate = function(date) {
      return function (party) {
        return party.custom_fields.meta_box_party_date[0] === date;
      };
    };

  });
