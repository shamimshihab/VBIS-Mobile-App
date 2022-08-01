import { db } from "./firebase-config.js";
import { getDatabase, ref, get, child } from "firebase/database";
import { auth } from "./firebase-config.js";
import { signInAnonymously } from "firebase/auth";

//Authentication
signInAnonymously(auth)
  .then(() => {
    //TO DO
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    //TO DO: error handling
  });

//About VBIS
const aboutRef = ref(getDatabase(), "about");

let about = null;

get(child(aboutRef, "aboutVBIS")).then((snapshot) => {
  about = snapshot.val();
});

//Staff
const staffRef = ref(getDatabase(), "about/staff");

let staffList = [];

get(staffRef).then((snapshot) => {
  snapshot.forEach((item) => {
    const temp = item.val().split(":");
    staffList.push(temp);
  });
});

//Contact
const contactRef = ref(getDatabase(), "contact");

let { address, email, hours, phone } = "";

get(contactRef).then((snapshot) => {
  address = snapshot.val().address;
  email = snapshot.val().email;
  hours = snapshot.val().hours;
  phone = snapshot.val().phone;
});

//Programs
const programsRef = ref(getDatabase(), "programs");

class Program {
  constructor(
    name,
    description,
    inperson,
    online,
    start,
    end,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday
  ) {
    this.name = name;
    this.description = description;
    this.inperson = inperson;
    this.online = online;
    this.start = start;
    this.end = end;
    this.monday = monday;
    this.tuesday = tuesday;
    this.wednesday = wednesday;
    this.thursday = thursday;
    this.friday = friday;
  }
}

let programList = [];
get(programsRef).then((snapshot) => {
  snapshot.forEach((item) => {
    const temp = new Program(
      item.val().name,
      item.val().description,
      item.val().inperson,
      item.val().online,
      item.val().start,
      item.val().end,
      item.val().monday,
      item.val().tuesday,
      item.val().wednesday,
      item.val().thursday,
      item.val().friday
    );
    programList.push(temp);
  });
});

export { about, staffList, address, email, hours, phone, programList };