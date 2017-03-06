"use strict";

app.factory("PatientFactory", function($q, $http, Credentials, DoctorFactory) {
    let getDoctorPatients = function(doctorId) {
        // console.log('doctorId in getDoctorPatients =', doctorId);
        let thisDoctorsPatients = [];
        return $q(function(resolve, reject) {
            $http.get(`${Credentials.databaseURL}/patients.json?orderBy="doctor_id"&equalTo="${doctorId}"`)
            .then(function(patientsObject) {
                // console.log('patientsObject = ', patientsObject);
                let patientData = patientsObject.data,
                    patientInfo = Object.values(patientData);
                // console.log('patientData = ', patientData);
                // console.log('patientInfo = ', patientInfo);
                for (var i =0; i < patientInfo.length; i++) {
                    thisDoctorsPatients.push(patientInfo[i]);
                }
                // console.log('thisDoctorsPatients = ', thisDoctorsPatients);
                resolve(thisDoctorsPatients);
            })
            .catch(function(error) {
                reject(error);
            });
        });
    };
    return {getDoctorPatients};
});