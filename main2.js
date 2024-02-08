/*                      CLASE 100
escribir el código para convertir el texto a voz y como configurar y activar la cámara web */

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";

        setTimeout(function(){ 
       recognition.start();
    }, 1000);
} 

recognition.onresult = function(event) {
    console.log(event); 
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    /**1. Agregar la Condición para verificar que el usuario diga Toma mi selfie y asi pueda tomar la foto*/
    /**2. Mover la función speak() dentro de la condición  */
    if(Content=="Toma mi selfie"){
        console.log("tomando selfie");
        speak();
    }
    
   }
/** 3. Reemplaza el código de la función speak
 *  4. Reemplazar el valor de la función speak_data*/
/** 8. Agregar el codigo para tomar la foto despues de 5 segundos
 *  9. Agrgar la función take_snapshot para que tome la selfie
 *  11. Mandar a llamar la función save inmediantamente que se toma la selfie para descargarla
 */
function speak(){
    var synth = window.speechSynthesis;

    
    speak_data = "Tomando su selfie en 5 segundos"
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90 
 });

 camera=document.getElementById("camera");
/** 5. Escribir el código para tomar una selfie */
/** 6. La función snap es una función predefinida en webcam.js que se utiliza para tomar una selfie. 
            - data_uri que se utiliza para mostrar una vista previa de la imagen que se tomará.*/
/** 7. Actualizar el div que hicimos para que contenga la imagen en index.html con data_url, el cual tiene la selfie: */ 
 function take_snapshot(){ 
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
     });
 }


 /** 10. Guardar la foto en nuestra computadora con la función save*
  *  Almacena la etiqueta a para descargar la imagendentro de la variable. 
  *  vamos a obtener la imagen desde la etiqueta img donde hemos guardado la imagen y la almacenaremos dentro de una variable
  *  Ahora vamos a actualizar el href de la etiqueta a con la variable de la imagen
  *  El siguiente código hará clic automático en la etiqueta a*/
 function save(){
     
     link=document.getElementById("link");
     image=document.getElementById("selfie_image").src;
     link.href=image;
     link.click();
 }