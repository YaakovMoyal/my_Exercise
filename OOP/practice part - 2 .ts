// הגדרת מחלקה ראשית
class Person {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
// הגדרת מחלקת מטופלים
class Patient extends Person {
  patientID: number;
  constructor(firstName: string, lastName: string, patientID: number) {
    super(firstName, lastName);
    this.patientID = patientID;
  }
  getInfoOnPatient() {
    const info = `name: ${this.firstName} ${this.lastName} ID: ${this.patientID}`;
    console.log(info);
  }
}

// הגדרת מחלקת דוקטור
class Doctor extends Person {
  doctorID: number;
  specialization: number;
  constructor(
    firstName: string,
    lastName: string,
    doctorID: number,
    specialization: number
  ) {
    super(firstName, lastName);
    this.doctorID = doctorID;
    this.specialization = specialization;
  }
  getInfoOnDoctor() {
    const info = `name: ${this.firstName} ${this.lastName} , ID: ${this.doctorID},specialization: ${this.specialization}`;
    console.log(info);
  }
}
// הגדרת מחלקת תורים
class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: string;
  time: string;
  constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
  }
  getInfoAppointment() {
    const info = `patient: ${this.patient.getInfoOnPatient()}, doctor: ${this.doctor.getInfoOnDoctor()}, date: ${
      this.date
    }, time: ${this.time}`;
    console.log(info);
  }
}

// הגדרת מחלקת ביה"ח
class Hospital {
  nameHospital: string;
  patients: Patient[];
  doctors: Doctor[];
  appointments: Appointment[];
  constructor(
    nameHospital: string,
    patients: Patient[],
    doctors: Doctor[],
    appointments: Appointment[]
  ) {
    this.nameHospital = nameHospital;
    this.patients = patients;
    this.doctors = doctors;
    this.appointments = appointments;
  }
  //הוספת מטופל
  addPatient(patient: Patient) {
    this.patients.push(patient);
  }
  //הוספת דוקטור
  addDoctor(doctor: Doctor) {
    this.doctors.push(doctor);
  }
  //הוספת תור
  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
  }

  //הצגת כל התורים
  getAllAppointment() {
    this.appointments.forEach((appointment) => {
      console.log(appointment.getInfoAppointment());
    });
  }

  //הצגת כל התורים לפי דוקטור
  getAppointmentByDoctor(doctorID) {
    const data = this.appointments.filter((appointment) => {
      appointment.doctor.doctorID === doctorID;
    });
    console.log(data);
  }

  //הצגת כל התורים לפי מטופל
  getAppointmentByPatient(patientID) {
    const data = this.appointments.filter((appointment) => {
      appointment.patient.patientID === patientID;
    });
    console.log(data);
  }

  //הצגת כל התורים לפי יום
  getAppointmentByDate(date) {
    const data = this.appointments.filter((appointment) => {
      appointment.date === date;
    });
    console.log(data);
  }
}

//תרגיל 7
//תרגיל 8
//תרגיל 9
//תרגיל 10
