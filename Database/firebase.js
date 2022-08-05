import { db } from "./firebase-config.js";
import { getDatabase, ref, get, child, onValue, onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";
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
and gets About VBIS description.
Listens for changes and updates variable.
*/
const aboutRef = ref(getDatabase(), "about");

let about = null;

onValue(child(aboutRef, "aboutVBIS"), (snapshot) => {
    about = snapshot.val();
});

/*
Staff
Creates list of staff members.
Listens for changes and updates list.
*/
let staffList = [];

onChildAdded(child(aboutRef, "staff"), (snapshot) => {
    const temp = snapshot.val().split(":");
    temp.push(snapshot.key);
    staffList.push(temp);
});
onChildChanged(child(aboutRef, "staff"), (snapshot) => {
    const index = staffList.findIndex((item) => {
        return item[2] === snapshot.key;
    });
    const temp = snapshot.val().split(":");
    staffList[index][0] = temp[0];
    staffList[index][1] = temp[1];
});
onChildRemoved(child(aboutRef, "staff"), (snapshot) => {
    const index = staffList.findIndex((item) => {
        return item[2] === snapshot.key;
    });

    staffList.splice(index, 1);
});

/*
Contact
Creates reference to contact child
and gets contact information.
Listens for changes and updates all contact info.
*/
const contactRef = ref(getDatabase(), "contact");

let { address, email, hours, phone } = "";

onValue(child(contactRef, "address"), (snapshot) => {
    address = snapshot.val();
});
onValue(child(contactRef, "email"), (snapshot) => {
    email = snapshot.val();
});
onValue(child(contactRef, "hours"), (snapshot) => {
    hours = snapshot.val();
});
onValue(child(contactRef, "phone"), (snapshot) => {
    phone = snapshot.val();
});

/*
Programs
Creates reference to programs child
and creates Program class, then creates a
list of Program objects.
Listens for changes and updates list.
*/
const programsRef = ref(getDatabase(), "programs");

class Program {
  constructor(
    key,
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
    this.key = key;
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

  update(
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

onChildAdded(programsRef, (snapshot) => {
    const temp = new Program(
        snapshot.key,
        snapshot.val().name,
        snapshot.val().description,
        snapshot.val().inperson,
        snapshot.val().online,
        snapshot.val().start,
        snapshot.val().end,
        snapshot.val().monday,
        snapshot.val().tuesday,
        snapshot.val().wednesday,
        snapshot.val().thursday,
        snapshot.val().friday
    );
    programList.push(temp);
});
onChildChanged(programsRef, (snapshot) => {
    const index = programList.findIndex((item) => {
        return item.key === snapshot.key;
    });

    programList[index].update(
        snapshot.val().name, 
        snapshot.val().description, 
        snapshot.val().inperson, 
        snapshot.val().online, 
        snapshot.val().start, 
        snapshot.val().end, 
        snapshot.val().monday, 
        snapshot.val().tuesday, 
        snapshot.val().wednesday, 
        snapshot.val().thursday, 
        snapshot.val().friday
    );
});
onChildRemoved(programsRef, (snapshot) => {
    const index = programList.findIndex((item) => {
        return item.key === snapshot.key;
    });

    programList.splice(index, 1);
});

/*
Other Resources
Creates a reference to other resources child
and two classes: a Resource Category and a Resource class.
Gets a type for each category and gives it a list of services
(Resource objects). Each service contains a name, description, 
location, and phone number.
Listens for changes and updates lists.
*/
const otherRef = ref(getDatabase(), "otherResources");

class ResourceCategory {
    constructor(key, type){
        this.key = key;
        this.type = type;
        this.serviceList = [];
    }

    listenForType() {
        onValue(child(otherRef, `${this.key}/type`), (snapshot) => {
            this.type = snapshot.val();
        });
    }

    listenForServices() {
        const serviceRef = child(otherRef, `${this.key}`);
        onChildAdded(serviceRef, (snapshot) => {
            if(snapshot.key != "type") {
                const tempService = new Resource(
                    snapshot.key,
                    snapshot.val().name, 
                    snapshot.val().description, 
                    snapshot.val().location, 
                    snapshot.val().phone
                );
                this.serviceList.push(tempService);
            }
        });
        onChildChanged(serviceRef, (snapshot) => {
            if(snapshot.key != "type") {
                const index = this.serviceList.findIndex((item) => {
                    return item.key === snapshot.key;
                });
                this.serviceList[index].update(
                    snapshot.val().name, 
                    snapshot.val().description, 
                    snapshot.val().location, 
                    snapshot.val().phone
                );
            }
        });
        onChildRemoved(serviceRef, (snapshot) => {
            if(snapshot.key != "type") {
                const index = this.serviceList.findIndex((item) => {
                    return item.key === snapshot.key;
                });
                this.serviceList.splice(index, 1);
            }
        });
    }
    
}

class Resource {
    constructor(key, name, description, location, phone){
        this.key = key;
        this.name = name;
        this.description = description;
        this.location = location;
        this.phone = phone;
    }

    update(name, description, location, phone) {
        this.name = name;
        this.description = description;
        this. location = location;
        this.phone = phone;
    }
}

let resourceDescription = "";
let resourceCategoryList = [];

onValue(child(otherRef, "description"), (snapshot) => {
    resourceDescription = snapshot.val();
});

onChildAdded(otherRef, (snapshot) => {
    if(snapshot.key != "description") {
        const temp = new ResourceCategory(snapshot.key, snapshot.val().type);
        temp.listenForType();
        temp.listenForServices();
        resourceCategoryList.push(temp); 
    }
});
onChildRemoved(otherRef, (snapshot) => {
    if(snapshot.key != "description") {
        const index = resourceCategoryList.findIndex((item) => {
            return item.key === snapshot.key;
        });
        resourceCategoryList.splice(index, 1);
    }
});

export { about, staffList, address, email, hours, phone, programList, resourceDescription, resourceCategoryList };