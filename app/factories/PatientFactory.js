"use strict";

app.factory("PatientFactory", function($q, $http, Credentials, DoctorFactory) {
    let getDoctorPatients = function(doctorId) {
        console.log('doctorId in getDoctorPatients =', doctorId);
        let thisDoctorsPatients = [];
        return $q(function(resolve, reject) {
            $http.get(`${Credentials.databaseURL}/patients.json?orderBy="doctor_id"&equalTo="${doctorId}"`)
            .then(function(patientsObject) {
                console.log('patientsObject = ', patientsObject);
                let patientData = patientsObject.data,
                    patientInfo = Object.values(patientData),
                    patientKeys = Object.keys(patientData);
                console.log('patientData = ', patientData);
                console.log('patientKeys = ', patientKeys);
                console.log('patientInfo = ', patientInfo);
                for (var i =0; i < patientKeys.length; i++) {
                    // patientInfo[i].id = patientKeys[i];
                    thisDoctorsPatients.push(patientInfo[i]);
                }
                console.log('thisDoctorsPatients = ', thisDoctorsPatients);
                resolve(thisDoctorsPatients);
            })
            .catch(function(error) {
                reject(error);
            });
        });
    };
    return {getDoctorPatients};
});