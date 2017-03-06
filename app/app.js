"use strict";

var app = angular.module("DoctorPatientsApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/doctors-view.html",
        controller: "DoctorCtrl"
    })
    .when("/doctors/:doctorId", {
        templateUrl: "partials/patients-view.html",
        controller: "PatientCtrl"
    });
});