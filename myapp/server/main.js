import { Meteor } from 'meteor/meteor';
import Profiles from "../collections";
import Events from "../collections";

Meteor.startup(() => {
  console.log("que paso nenenanane");
  if (Profiles.find().count() === 0) {
    console.log("There are no profiles");
    let dummyProfiles = [
      { name: "Ana Toledo", age: 50 },
      { name: "Maribel Gómez", age: 40 },
      { name: "Carlos Torres", age: 60 },
      { name: "Andrea Cadena", age: 65 },
    ];

    dummyProfiles.forEach(e => {
      Profiles.insert(e);
    })
  }
  if (Events.find().count() === 0) {
    console.log("There are no events");
    let dummyEvents = [
      { nombre: "Farra", descripcion: "mega super farra sisa", responsable: "Mendez el mai", fechaInicio: "2019-08-04", fechaFinal: "2019-08-05", ubicacion: "en la casa del rector" }
      
    ];

    dummyEvents.forEach(e => {
      Events.insert(e);
    })
  }

});