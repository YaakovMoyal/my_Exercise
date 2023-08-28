// הגדרת מחלקה ראשית
abstract class Person {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getInfo() {
    const info = `name: ${this.firstName} ${this.lastName}`;
    console.log(info);
  }
}
// הגדרת מחלקת מטופלים
class Patient extends Person {
  patientID: number;
  constructor(firstName: string, lastName: string, patientID: number) {
    super(firstName, lastName);
    this.patientID = patientID;
  }
  getInfo() {
    const info = `name: ${this.firstName} ${this.lastName} ID: ${this.patientID}`;
    console.log(info);
  }
}

// הגדרת מחלקת דוקטור
class Doctor extends Person {
  doctorID: number;
  specialization: string;
  constructor(
    firstName: string,
    lastName: string,
    doctorID: number,
    specialization: string
  ) {
    super(firstName, lastName);
    this.doctorID = doctorID;
    this.specialization = specialization;
  }
  getInfo() {
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
    const info = `patient: ${this.patient.getInfo()}, doctor: ${this.doctor.getInfo()}, date: ${
      this.date
    }, time: ${this.time}`;
    console.log(info);
  }
}

// הגדרת מחלקת ביה"ח
class Hospital {
  nameHospital: string;
  private patients: Patient[];
  doctors: Doctor[];
  private appointments: Appointment[];
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
    return this;
  }
  //הוספת דוקטור
  addDoctor(doctor: Doctor) {
    this.doctors.push(doctor);
    return this;
  }
  //הוספת תור
  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
    return this;
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
// just on class Person

//תרגיל 8
// add get info in class Person

//תרגיל 9
// patients, doctors

//תרגיל 10
const patient1 = new Patient("yaakov", "moyal", 208309856);
const patient2 = new Patient("israel", "israeli", 123456789);
const patient3 = new Patient("moshe", "cohen", 987654321);

const doctor1 = new Doctor("eli", "levi", 12345, "legs");
const doctor2 = new Doctor("rooty", "israeli", 54321, "head");

const appointment1 = new Appointment(patient1, doctor1, "13/9/2023", "14:00");
const appointment2 = new Appointment(patient2, doctor2, "21/8/2023", "9:00");
const appointment3 = new Appointment(patient3, doctor2, "21/8/2023", "10:00");

const arrPatient = [patient1, patient2, patient3];
const arrDoctor = [doctor1, doctor2];
const arrAppointment = [appointment1, appointment2, appointment3];

const hospital = new Hospital("Shiba", arrPatient, arrDoctor, arrAppointment);

//תרגיל 11
hospital.addPatient(patient1);
hospital.addDoctor(doctor1);
hospital.addAppointment(appointment1);
hospital.getAllAppointment();
hospital.getAppointmentByDate("21/8/2023");
hospital.getAppointmentByDoctor(12345);
hospital.getAppointmentByPatient(123456789);
