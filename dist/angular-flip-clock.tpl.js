(function() {
'use strict';
angular.module('dyFlipClock').run(['$templateCache', function($templateCache) {
  $templateCache.put('src/js/angular-flip-clock-directive/angular-flip-clock-directive.html',
    '<div class="flip-counter clock flip-clock-wrapper">\n' +
    '  <dy-flip-clock-label text="Hours" hide-divider="true"></dy-flip-clock-label>\n' +
    '  <dy-flip-clock-number value="vm.getHoursTensPlace()"></dy-flip-clock-number>\n' +
    '  <dy-flip-clock-number value="vm.getHoursOnesPlace()"></dy-flip-clock-number>\n' +
    '\n' +
    '  <dy-flip-clock-label text="Minutes"></dy-flip-clock-label>\n' +
    '  <dy-flip-clock-number value="vm.getMinutesTensPlace()"></dy-flip-clock-number>\n' +
    '  <dy-flip-clock-number value="vm.getMinutesOnesPlace()"></dy-flip-clock-number>\n' +
    '\n' +
    '  <dy-flip-clock-label text="Seconds"></dy-flip-clock-label>\n' +
    '  <dy-flip-clock-number value="vm.getSecondsTensPlace()"></dy-flip-clock-number>\n' +
    '  <dy-flip-clock-number value="vm.getSecondsOnesPlace()"></dy-flip-clock-number>\n' +
    '  </ul>\n' +
    '</div>\n' +
    '');
}]);

angular.module('dyFlipClock').run(['$templateCache', function($templateCache) {
  $templateCache.put('src/js/angular-flip-clock-label-directive/angular-flip-clock-label-directive.html',
    '<span class="flip-clock-divider" ng-class="{\'flip-clock-divider-hidden\': !!vm.hideDivider}">\n' +
    '  <span class="flip-clock-label">{{vm.text}}</span>\n' +
    '  <span class="flip-clock-dot top"></span>\n' +
    '  <span class="flip-clock-dot bottom"></span>\n' +
    '</span>\n' +
    '');
}]);

angular.module('dyFlipClock').run(['$templateCache', function($templateCache) {
  $templateCache.put('src/js/angular-flip-clock-number-directive/angular-flip-clock-number-directive.html',
    '<ul class="flip" ng-class="{\'play\': vm.isAnimated()}">\n' +
    '  <li\n' +
    '    ng-repeat="number in ::vm.numbers"\n' +
    '    ng-class="{\'flip-clock-active\': vm.isActive(number), \'flip-clock-before\': vm.isBefore(number)}"\n' +
    '  >\n' +
    '    <a href="#">\n' +
    '      <div class="up">\n' +
    '        <div class="shadow"></div>\n' +
    '        <div class="inn">{{::number}}</div>\n' +
    '      </div>\n' +
    '      <div class="down">\n' +
    '        <div class="shadow"></div>\n' +
    '        <div class="inn">{{::number}}</div>\n' +
    '      </div>\n' +
    '    </a>\n' +
    '  </li>\n' +
    '</ul>\n' +
    '');
}]);
}());