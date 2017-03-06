"use strict";

app.controller("DoctorCtrl", function($scope, DoctorFactory, PatientFactory, $routeParams) {
    DoctorFactory.getDoctors()
    .then(function callback(doctors) {
        // console.log('stuff from DoctorFactory = ', doctors);
        $scope.doctors = doctors;
    });
});