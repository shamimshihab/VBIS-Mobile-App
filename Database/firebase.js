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
Creates list of staff members
*/
let staffList = [];

get(child(aboutRef, "staff")).then((snapshot) => {
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

/*
Other Resources
Creates a reference to other resources child
and two classes: a Resource Category and a Resource class.
Gets a type for each category and gives it a list of services.
Each service contains a name, description, location, 
and phone number.
*/
const otherRef = ref(getDatabase(), "otherResources");

class ResourceCategory {
    constructor(type){
        this.type = type;
        this.serviceList = [];
    }
}

class Resource {
    constructor(name, description, location, phone){
        this.name = name;
        this.description = description;
        this.location = location;
        this.phone = phone;
    }
}

let resourceDescription = "";
let resourceCategoryList = [];

get(otherRef).then((snapshot) => {
    snapshot.forEach((item) => {
        if(item.key == "description"){
            resourceDescription = item.val();
        }else{
            const temp = new ResourceCategory(item.val().type);
            item.forEach((service) => {
                if(service.key != "type"){
                    const tempService = new Resource(service.val().name, service.val().description, service.val().location, service.val().phone);
                    temp.serviceList.push(tempService);
                }
            });
            resourceCategoryList.push(temp);
        }
    })
})

export { about, staffList, address, email, hours, phone, programList, resourceDescription, resourceCategoryList };