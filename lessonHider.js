angular.module('directivePractice')

.directive('lessonHider', function () {
  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    controller: function ($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    scope: {
      lesson: '=',
      dayAlert: '&',

    },
    link: function (scope, element, attributes) {
      scope.getSchedule.then(function (response) {
        scope.schedule = response.data;
        console.log(response);

      scope.schedule.forEach(function (day) {
        if (day.lesson === scope.lesson) {
          element.css('text-decoration','line-through');
          scope.lessonDay = day.weekday;
          return;
        }
      })
      });
    }
  }
})
