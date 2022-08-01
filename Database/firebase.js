import { db } from "./firebase-config.js";
import { getDatabase, ref, get, child } from "firebase/database";
import { auth } from "./firebase-config.js";
import { signInAnonymously } from "firebase/auth";

/*
Authentication
Signs in user to an anonymous account
*/
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

/*
About VBIS
Creates reference to about child in database
and gets About VBIS description
*/
const aboutRef = ref(getDatabase(), "about");

let about = null;

get(child(aboutRef, "aboutVBIS")).then((snapshot) => {
  about = snapshot.val();
});

/*
Staff
Creates reference to staff child
and creates list of staff members
*/
const staffRef = ref(getDatabase(), "about/staff");

let staffList = [];

get(staffRef).then((snapshot) => {
  snapshot.forEach((item) => {
    const temp = item.val().split(":");
    staffList.push(temp);
  });
});

/*
Contact
Creates reference to contact child
and gets contact information
*/
const contactRef = ref(getDatabase(), "contact");

let { address, email, hours, phone } = "";

get(contactRef).then((snapshot) => {
  address = snapshot.val().address;
  email = snapshot.val().email;
  hours = snapshot.val().hours;
  phone = snapshot.val().phone;
});

/*
Programs
Creates reference to programs child
and creates Program class, then creates a
list of Program objects
*/
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