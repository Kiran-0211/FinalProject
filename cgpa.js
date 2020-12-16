angular.module('CalculatorApp', []).controller('CalculatorController', function($scope) {
    $scope.arrlist = [{ "userid": 1, "name": "PHYSICS" }, { "userid": 2, "name": "CHEMISTRY" }];
    $scope.getdetails = function() {
        if ($scope.userselected.userid == "1") {
            $scope.physics = true;
            $scope.chemistry = false;
            $scope.reset();
        } else if ($scope.userselected.userid == "2") {
            $scope.physics = false;
            $scope.chemistry = true;
            $scope.reset();
        }
    }
    $scope.calculateGrade = function(item) {
        if (item < 40)
            return 0;
        else if (item < 45 && item >= 40)
            return 4;
        else if (item < 50 && item >= 45)
            return 5;
        else if (item < 60 && item >= 50)
            return 6;
        else if (item < 70 && item >= 60)
            return 7;
        else if (item < 80 && item >= 70)
            return 8;
        else if (item <= 89 && item >= 80)
            return 9;
        else if (item >= 90 && item <= 100)
            return 10;
    };
    $scope.reset = function() {
        $scope.sub1 = "";
        $scope.sub2 = "";
        $scope.sub3 = "";
        $scope.sub4 = "";
        $scope.sub5 = "";
        $scope.sub6 = "";
    };
    $scope.result = function() {
        var gradeSub1 = $scope.calculateGrade($scope.sub1);
        var gradeSub2 = $scope.calculateGrade($scope.sub2);
        var gradeSub3 = $scope.calculateGrade($scope.sub3);
        var gradeSub4 = $scope.calculateGrade($scope.sub4);
        var gradeSub5 = $scope.calculateGrade($scope.sub5);
        var gradeSub6 = $scope.calculateGrade($scope.sub6);
        var sgpa = ((gradeSub1 * 4) + (gradeSub2 * 5) + (gradeSub3 * 4) + (gradeSub4 * 4) + (gradeSub5 * 3) + (gradeSub6 * 0)) / 20.0;
        if (isNaN(sgpa)) { return "ENTER THE MARKS"; } else
            sgpa = sgpa.toFixed(3);
        return sgpa;
    };
});