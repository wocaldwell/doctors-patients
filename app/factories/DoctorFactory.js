"use strict";

app.factory("DoctorFactory", function($q, $http, Credentials) {
    let getDoctors = function() {
        let doctorKeys = [],
            doctors = [];
        return $q(function(resolve, reject) {
            $http.get(`${Credentials.databaseURL}/doctors.json`)
            .then(function(doctorsObject) {
                // console.log('doctorsObject = ', doctorsObject);
                let doctorData = doctorsObject.data,
                    doctorInfo = Object.values(doctorData);
                doctorKeys = Object.keys(doctorData);
                // console.log('doctorData = ', doctorData);
                // console.log('doctorKeys = ', doctorKeys);
                // console.log('doctorInfo = ', doctorInfo);
                for (var i =0; i < doctorKeys.length; i++) {
                    doctorInfo[i].id = doctorKeys[i];
                    doctors.push(doctorInfo[i]);
                }
                // console.log('doctors = ', doctors);
                resolve(doctors);
            })
            .catch(function(error) {
                reject(error);
            });
        });
    };
    return {getDoctors};
});