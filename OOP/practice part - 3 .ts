// הגדרת מחלקה ראשית
abstract class Person {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }
  getInfo() {
    const info = `name: ${this.firstName} ${this.lastName}`;
    console.log(info);
  }
}
// הגדרת מחלקת מטופלים
class Patient extends Person {
  patientID: number;
  phoneNumber: number;
  emergencyContact: number;
  medicalHistory: Appointment[];
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    patientID: number,
    phoneNumber: number,
    emergencyContact: number,
    medicalHistory: Appointment[]
  ) {
    super(firstName, lastName, age, address);
    this.patientID = patientID;
    this.phoneNumber = phoneNumber;
    this.emergencyContact = emergencyContact;
    this.medicalHistory = medicalHistory;
  }
  //קבלת פרטים על מטופל
  getInfo() {
    const info = `name: ${this.firstName} ${this.lastName} ID: ${this.patientID}`;
    console.log(info);
  }
  //עדכון היסטורייה רפואית
  editMedicalHistory(newData: Appointment) {
    this.medicalHistory = Object.assign(this.medicalHistory, newData);
    return this;
  }
}

// הגדרת מחלקת צוות
abstract class MedicalStaff extends Person {
  staffID: number;
  position: string;
  department: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    staffID: number,
    position: string,
    department: string
  ) {
    super(firstName, lastName, age, address);
    this.staffID = staffID;
    this.position = position;
    this.department = department;
  }
}

// הגדרת מחלקת דוקטור
class Doctor extends MedicalStaff {
  doctorID: number;
  specialization: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    staffID: number,
    position: string,
    department: string,
    doctorID: number,
    specialization: string
  ) {
    super(firstName, lastName, age, address, staffID, position, department);
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

const demoArrAppointment: Appointment[] = [];
const patient1 = new Patient(
  "yaakov",
  "moyal",
  27,
  "elad",
  208309856,
  53330000,
  54840000,
  demoArrAppointment
);
const patient2 = new Patient(
  "israel",
  "israeli",
  30,
  "jerusalem",
  123456789,
  5480000,
  54500,
  demoArrAppointment
);
const patient3 = new Patient(
  "moshe",
  "cohen",
  18,
  "tlv",
  987654321,
  54550000,
  5540000,
  demoArrAppointment
);

const doctor1 = new Doctor(
  "eli",
  "levi",
  53,
  "tlv",
  12345,
  "?",
  "?",
  12345,
  "legs"
);
const doctor2 = new Doctor(
  "rooty",
  "israeli",
  48,
  "tlv",
  54321,
  "?",
  "?",
  54321,
  "head"
);

const appointment1 = new Appointment(patient1, doctor1, "13/9/2023", "14:00");
const appointment2 = new Appointment(patient2, doctor2, "21/8/2023", "9:00");
const appointment3 = new Appointment(patient3, doctor2, "21/8/2023", "10:00");

const arrPatient = [patient1, patient2, patient3];
const arrDoctor = [doctor1, doctor2];
const arrAppointment = [appointment1, appointment2, appointment3];

const hospital = new Hospital("Shiba", arrPatient, arrDoctor, arrAppointment);
