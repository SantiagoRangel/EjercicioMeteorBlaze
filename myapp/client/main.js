import './main.html';
import Profiles from "../collections"


Template.profile.created = () => {
    console.log("Created the profile template");
}

Template.profile.rendered = () => {
    console.log("Rendered the profile template");
}

Template.profile.helpers({
    
    /*other helpers*/
    
    
    exampleHelper: () => {
        return "string returned by exampleHelper";
    },

    profileList: ()=>{
      return [
            {
                name: "Juan Rodríguez", age: 25
            },
            {
                name: "María Gómez", age: 30
            },
            {
                name: "Esteban Martínez", age: 15
            },
            {
                name: "Luisa Sánchez", age: 19
            }
        ] 
    },
    passingData: (myString1, myString2) => {
        console.log(`These are the strings ${myString1} ${myString2}`);
      },
      randomHelper: () => {
        return Session.get("randomNumber");
    },
    profilesCollection: () => {
        console.log("se mando aca");
        return Profiles.find({});
        
    }
});

Template.profile.events({
    'click button': (e, i) => {
        console.log("Button clicked");
        Session.set("randomNumber", Math.random(0, 99));
    }
});

Template.formulario.events({

    'submit form': (event)=> {

        event.preventDefault();
        const target = event.target;

        let nombre = target.Nombre.value;
        let descripcion = target.Descripcion.value;
        let responsable = target.Responsable.value;
        let fechaI = target.FechaInicio.value;
        let fechaF = target.FechaFinal.value;
        let ubicacion = target.Ubicacion.value;

        Events.insert(

            {
                nombre: nombre,
                descripcion: descripcion,
                responsable: responsable,
                fechaInicio: fechaI,
                fechaFinal: fechaF,
                ubicacion: ubicacion
            }
        );
    }

}


);

Template.listaEvents.helpers({
    
    /*other helpers*/
    
    
    eventsCollection: () => {
        console.log("se mando aca");
        return Events.find({});
        
    }
});
