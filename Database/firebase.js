import { db } from "../firebase-config.js";
import { getDatabase, ref, get, child } from "firebase/database";
import { auth } from "../firebase-config.js";
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

export { about, staffList, address, email, hours, phone };