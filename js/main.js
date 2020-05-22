'use strict'

var hospital;


const eleID_divEspaiModal = document.getElementById("divEspaiModal");

const eleID_barra_missatges = document.getElementById("divBarraMissatges");
const eleID_text_missatge = document.getElementById("h3BarraMissatges");

const eleID_divPresentacio = document.getElementById("divPresentacio");
const eleID_divHospital = document.getElementById("divHospital");
const eleID_divTractament = document.getElementById("divTractament");
const eleID_divPacient = document.getElementById("divPacient");


const eleID_divControls = document.getElementById("divControls");

const eleID_btnGestHospitals = document.getElementById("btnGestHospitals");
const eleID_btnGestPacients = document.getElementById("btnGestPacients");
const eleID_btnGestMalalties = document.getElementById("btnGestMalalties");
const eleID_btnGestMetges = document.getElementById("btnGestMetges");

const eleID_btnGestAplicacio = document.getElementById("btnGestAplicacio");

const eleID_h2ResutltatFormControls = document.getElementById("h2ResutltatFormControls");

/*
taula_missatges[0][intTitol]="No habilitat"
taula_missatges[0][intMissatge]="Ho sento, encara no està habilitat!"

taula_missatges[1][intTitol]="Camp buit"
taula_missatges[1][intMissatge]="Cal que entris un nombre al camp màxim pacients!"

taula_missatges[2][intTitol]="Camp buit"
taula_missatges[2][intMissatge]="Cal que entris un nom al camp Hospital!"

taula_missatges[3][intTitol]="Camp buit"
taula_missatges[3][intMissatge]="Ho sento, encara no està habilitat!"
 */

const taula_missatges=[[]];

const intTitol = 1
const intMissatge = 2;

taula_missatges[0]=[];
taula_missatges[0][intTitol]="No habilitat";
taula_missatges[0][intMissatge]="Ho sento, encara no està habilitat!";

taula_missatges[1]=[];
taula_missatges[1][intTitol]="El camp màxim pacients és obligatori!";
taula_missatges[1][intMissatge]="Cal que entris un nombre al camp màxim pacients!";

taula_missatges[2]=[];
taula_missatges[2][intTitol]="El camp Nom Hospital és obligatori!";
taula_missatges[2][intMissatge]="Cal que entris un nom al camp Hospital!";

function comprovaCampBuit(objecteRebut) {
      if (objecteRebut.value == "") {
            mostraMissatge(2);
      }
      console.log(objecteRebut.value);
}

function comprovaCampNumero(objecteRebut) {
      switch ( isNaN(objecteRebut.value) ? 1 : objecteRebut.value=="" ? 2 : 0 ) {
            case 1:
                  mostraMissatge(1);
                  break;

            case 2:
                  mostraMissatge(2);
                  break;

      }
      // if (isNaN(objecteRebut.value) || (objecteRebut.value=="")) 
      //   {
      //     alert("Must input numbers");
      //     return false;
      //   }
}


function mostraMissatge(codiMissatge) {
      /* Amb format JQuery   */
      $('#divEspaiModal').find('#titolModal').text(taula_missatges[codiMissatge][intTitol]);
      $('#divEspaiModal').find('#missatgeModal').text(taula_missatges[codiMissatge][intMissatge]);
      $('#divEspaiModal').modal('show');
}

function mostraBotons() {
      eleID_btnGestHospitals.disabled = false;
      eleID_btnGestPacients.disabled = false;
      eleID_btnGestMalalties.disabled = false;
      eleID_btnGestMetges.disabled = false;
      eleID_btnGestAplicacio.disabled = false;

      $(eleID_btnGestHospitals).removeClass('btn-dark');
      $(eleID_btnGestHospitals).addClass('btn-primary');

      $(eleID_btnGestPacients).removeClass('btn-dark');
      $(eleID_btnGestPacients).addClass('btn-primary');

      $(eleID_btnGestMalalties).removeClass('btn-dark');
      $(eleID_btnGestMalalties).addClass('btn-primary');

      $(eleID_btnGestMetges).removeClass('btn-dark');
      $(eleID_btnGestMetges).addClass('btn-primary');

      $(eleID_btnGestAplicacio).removeClass('btn-dark');
      $(eleID_btnGestAplicacio).addClass('btn-primary');
}

function amagaBotons() {
      eleID_btnGestHospitals.disabled = true;
      eleID_btnGestPacients.disabled = true;
      eleID_btnGestMalalties.disabled = true;
      eleID_btnGestMetges.disabled = true;
      eleID_btnGestAplicacio.disabled = true;

      $(eleID_btnGestHospitals).removeClass('btn-primary');
      $(eleID_btnGestHospitals).addClass('btn-dark');

      $(eleID_btnGestPacients).removeClass('btn-primary');
      $(eleID_btnGestPacients).addClass('btn-dark');

      $(eleID_btnGestMalalties).removeClass('btn-primary');
      $(eleID_btnGestMalalties).addClass('btn-dark');

      $(eleID_btnGestMetges).removeClass('btn-primary');
      $(eleID_btnGestMetges).addClass('btn-dark');

      $(eleID_btnGestAplicacio).removeClass('btn-primary');
      $(eleID_btnGestAplicacio).addClass('btn-dark');
}



function crearHospital() {

      console.log("hospital = " + hospital);

      if (hospital===undefined) {  // hospital NO esta inicialitzat
            document.getElementById("dadesPacient").innerHTML="";
            var nom = document.getElementById("inputNomHospital").value.toString();
            var maximPacients = parseInt(document.getElementById("maximPacientsHospital").value);
            if (nom !== "" && maximPacients > 0) {
                  hospital = new Hospital(nom, maximPacients);
                  ocultaGestioHospital(this);
                  mostraGestioPacients(this);
                  var cadenaFilaPacient_1, cadenaFilaPacient_2, cadenaFilaPacient_3, cadenaFilaPacient_4,cadenaFilaPacient_5;
                  cadenaFilaPacient_1 = '<div class="row">' +
                        '<div class="col mb-3">' +
                        '<label for="nomPacient" class="font-weight-bold"> Nom del pacient: </label>' +
                        '<input type="text" id="nomPacient';
                        
                  cadenaFilaPacient_2 = '" class="form-control" required minlength="1" maxlength="100" />' +
                        '</div>' +
                        '<div class="col mb-3">' +
                        '<label for="cognomPacient" class="font-weight-bold"> Cognom del pacient: </label>' +
                        '<input type="text" id="cognomPacient';

                  cadenaFilaPacient_3 = '" class="form-control" required minlength="1" maxlength="100" />' +
                   '</div>' +      
                   '<div class="col mb-3">' +
                        '<label for="nifPacient" class="font-weight-bold"> Nif del pacient: </label>' +
                        '<input type="text" id="nifPacient';

                  cadenaFilaPacient_4 = '" class="form-control" required minlength="1" maxlength="100" />' +
                        '  </div> <!-- <div class="col mb-3"> -->' +
                        '  <div class="col mb-3">' +
                        '    <label for="malaltia" class="font-weight-bold">Malaltia a tractar: </label>' +
                        '    <select id="malaltia';
                  cadenaFilaPacient_5 = '" class="form-control" required minlength="1" maxlength="100" />' +
                        '  </div> <!-- <div class="col mb-3"> -->' +
                        '</div> <!-- <div class="row"> -->';

                  for (var pacient = 0; pacient < maximPacients; pacient++) {
                        document.getElementById("dadesPacient").innerHTML += ('' +
                              cadenaFilaPacient_1 +
                              pacient.toString() +
                              cadenaFilaPacient_2 +
                              pacient.toString() +
                              cadenaFilaPacient_3+
                              pacient.toString() +
                              cadenaFilaPacient_4+
                              pacient.toString() +
                              cadenaFilaPacient_5);
                              document.getElementById("malaltia" + pacient.toString()).innerHTML = SelectMalalties();
                  }
                  eleID_divHospital.getElementsByClassName("text-center")[0].innerHTML = hospital.nomHospital;
            }
      } else {  /// hospital esta defnit
            alert("L'hospital ja existeix!!! " + hospital.nomHospital);
      }
}
      
      
      function ingressarPacients() {
      
      if (hospital.pacientsIngressats.length==hospital.maximPacients){
            for (var pacient = 0; pacient < hospital.maximPacients; pacient++) {
                  document.getElementById("nomPacient" + pacient).value = hospital.pacientsIngressats[pacient].nom;
                  document.getElementById("cognomPacient" + pacient).value = hospital.pacientsIngressats[pacient].cognom;
                  document.getElementById("nifPacient" + pacient).value = hospital.pacientsIngressats[pacient].nif;
                  document.getElementById("malaltia" + pacient).value = hospital.pacientsIngressats[pacient].malaltia;
            }
      } else {
            


            var nom = "";
            var cognom = "";
            var nif = "";
            var malaltia = "";
            debugger;
            for (var pacient = 0; pacient < hospital.maximPacients; pacient++) {
                  nom = document.getElementById("nomPacient" + pacient.toString()).value.toString();
                  console.log(nom);
                  cognom = document.getElementById("cognomPacient" + pacient.toString()).value.toString();
                  console.log(cognom);
                  nif = document.getElementById("nifPacient" + pacient.toString()).value.toString();
                  console.log(nif);
                  malaltia = document.getElementById("malaltia" + pacient.toString()).value.toString();
                  console.log(malaltia);
      
                  if (nom !== "" && cognom !== "" && nif !== "" && malaltia !== "") {
                        if (hospital !== null) {
                              hospital.ingressarPacient(new Pacient(nom, cognom, nif, malaltia));
                        }
                  }else{
                        alert("Error. Omple tots els camps!");
                        return false;
                  }
            }

      
            if (hospital !== null && (hospital.pacientsIngressats.length <= hospital.maximPacients)) {
                  eleID_divPacient.classList.toggle("d-none");
            eleID_divTractament.classList.toggle("d-none");
      
                  for (var pacient = 0; pacient < hospital.pacientsIngressats.length; pacient++) {
                  document.getElementById("dadesGestio").innerHTML += ('<div class="row" id="dadesGestioPacient' + pacient.toString() + '">' +
                  '<div class="col mb-3">' +
                        '<label for="nomPacientGestio" class="font-weight-bold">Nom: </label>   <p id="nomPacientGestio' + pacient.toString() + '">' + hospital.pacientsIngressats[pacient].nom + '</p>' +
                  '</div>' +
                  '<div class="col mb-3">' +
                        '<label for="cognomPacientGestio" class="font-weight-bold">Nom: </label>   <p id="cognomPacientGestio' + pacient.toString() + '">' + hospital.pacientsIngressats[pacient].cognom + '</p>' +
                  '</div>' +
                  '<div class="col mb-3">' +
                        '<label for="nifPacientGestio" class="font-weight-bold">Nom: </label>   <p id="nifPacientGestio' + pacient.toString() + '">' + hospital.pacientsIngressats[pacient].nif + '</p>' +
                  '</div>' +
                  '<div class="col mb-3">' +
                        '<label for="malaltia" class="font-weight-bold">Malaltia: </label>  <p id="malaltiaGestio' + pacient.toString() + '">' + hospital.pacientsIngressats[pacient].malaltia + '</p>' +
                  '</div>' +
                  '<div class="col mb-3">' +
                        '<button class="btn btn-success" title="Si el pacient s\'ha recuperat, el donarem d\'alta fent clic a aquest botó!" onClick="gestioDonarDalta(' + pacient + ')">Donar d\'alta</button> <button class="btn btn-danger" title="Si el pacient es mor, declarem la defunció fent clic a aquest botó!" onClick="gestioMorir(' + pacient + ')">Morir</button>' +
                  '<div class="col mb-3">' +
                  '</div>');
          }
          
        }
      }
}

      
      function gestioDonarDalta(llitPacient) {
        hospital.donarDaltaPacient(llitPacient);
        document.getElementById("dadesGestioPacient" + llitPacient.toString()).remove();
      
        if (totsLlitsBuits())
        dadesGestio.innerHTML = ('<p class="text-center">L\'Hospital ' + hospital.nom + ' no té cap pacient ingressat en aquests moments.</p>' +
        '<div class="text-center">' +
          '<button type="button" class="btn btn-primary mt-4" onClick="window.location.reload()">Tornar a començar</button>' +
        '</div>');
      }
      
      function gestioMorir(llitPacient) {
        hospital.morirPacient(llitPacient);
        document.getElementById("dadesGestioPacient" + llitPacient.toString()).remove();
      
        if (totsLlitsBuits())
          dadesGestio.innerHTML = ('<p class="text-center">L\'Hospital ' + hospital.nom + ' no té cap pacient ingressat en aquests moments.</p>' +
          '<div class="text-center">' +
            '<button type="button" class="btn btn-primary mt-4" onClick="window.location.reload()">Tornar a començar</button>' +
          '</div>');
      }
      
      function totsLlitsBuits() {
        var llitsBuits = true;
        var llit = 0;
      
        while(llitsBuits && llit < hospital.pacientsIngressats.length) {
          llitsBuits = Object.keys(hospital.pacientsIngressats[llit]).length === 0;
          llit++;
        }
      
        return llitsBuits;
      }
/* https://developer.mozilla.org/en-US/docs/Web/API/Element/classList 
document.getElementById("MyElement").classList.add('MyClass');

document.getElementById("MyElement").classList.remove('MyClass');

if ( document.getElementById("MyElement").classList.contains('MyClass') )

document.getElementById("MyElement").classList.toggle('MyClass');



https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript

*/

function conteClass(element, nomClass) {
      return (' ' + element.classList + ' ').indexOf(' ' + nomClass + ' ') > -1;
  }



function eliminaClass(elementRebut, nomClass) {
      var arrLlistaClasses;
      
      arrLlistaClasses = elementRebut.className.split(" ");
      if (arrLlistaClasses.indexOf(nomClass) == -1) {  // ens indica que no existeix
            elementRebut.className += " " + nomClass;
      }
}

    function afegirClass(elementRebut, nomClass) {
      var arrLlistaClasses;
      
      arrLlistaClasses = elementRebut.className.split(" ");
      if (arrLlistaClasses.indexOf(nomClass) == -1) {  // ens indica que no existeix
            elementRebut.className += " " + nomClass;
      }
    }


    
    function mostraGestioApp(objecte){
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divControls.classList.toggle("d-none");
      amagaBotons();
   }


    function mostraGestioMetges(objecte){
          mostraMissatge(0);
    }

    function mostraGestioMalaties(objecte){
       mostraMissatge(0);
    }
    


function mostraGestioHospital(objecte){
      document.getElementById('tancaDivHospital').onclick = function tanca() {
            eleID_divPresentacio.classList.toggle("d-none");
            eleID_divHospital.classList.toggle("d-none");
            mostraBotons();
      }
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divHospital.classList.toggle("d-none");
      amagaBotons();
   }

   function mostraGestioPacient(objecte){
      document.getElementById('tancaDivPacient').onclick = function tanca() {
            eleID_divPresentacio.classList.toggle("d-none");
            eleID_divPacient.classList.toggle("d-none");
            mostraBotons();
      }
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divPacient.classList.toggle("d-none");
      amagaBotons();
   }
   

function ocultaGestioHospital(objecteRebut){
            eleID_divPresentacio.classList.toggle("d-none");
            eleID_divHospital.classList.toggle("d-none");
            mostraBotons();
   }

function mostraGestioPacients(objecteRebut){
      if (!conteClass(eleID_divPacient,"d-none")) {
            afegirClass(eleID_divPacient,"d-none");
      }
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divPacient.classList.toggle("d-none");
      amagaBotons();
}

function ocultaGestioPacients(objecteRebut){
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divPacient.classList.toggle("d-none");
      mostraBotons();
   }

   function ocultaControls(objecteRebut){
      eleID_divPresentacio.classList.toggle("d-none");
      eleID_divControls.classList.toggle("d-none");
      mostraBotons();
   }
   