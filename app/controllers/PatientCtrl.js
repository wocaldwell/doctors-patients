"use strict";

app.controller("PatientCtrl", function($scope, PatientFactory, DoctorFactory, $routeParams) {
    console.log('$routeParams.doctorId = ', $routeParams.doctorId);
    let doctorId = $routeParams.doctorId;
    PatientFactory.getDoctorPatients(doctorId)
    .then(function callback(patients) {
        console.log('stuff from PatientFactory = ', patients);
        $scope.patients = patients;
    });
});