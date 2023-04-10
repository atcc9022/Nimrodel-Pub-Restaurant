$(document).ready(function () {

  // ___________ form vista sm __________

$('#conoscamonos').click(function(){
  $('#comuniquemonos').toggle()
})

$('#reservas').click(function(){
  $('#reservacion').toggle()
})

// ______________ modal ____________________


$('.open').click(function(){
  $('.modal').toggle()
});

// __________________modalnosotros_________________

$('#nosotros-modal').click(function(){
   $('#sobreNosotros').toggle()
})

// _____ validacion form comuniquemonos_____________

  $("#boton").click(function () {
    let nombre = $("#nombre").val();
    let correo = $("#correo").val();
    let telefono = $("#telefono").val();
    let motivo = $("#motivo").val();
    let select = $("#select").val();

    if (nombre == "") {
      alert('El campo "Nombre" es requerido');
    } else if (correo == "") {
      alert('El campo "Correo" es requerido');
    } else if (telefono == "") {
      alert('El campo "Teléfono" es requerido');
    } else if (motivo == "") {
      alert('El campo "Motivo" es requerido');
    } else if (select == "") {
      alert('El campo "texto" es requerido');
    } else {
      alert(
        "Muchas gracias " +
          nombre +
          " hemos recibido su sugerencia y enviaremos una pronta respuesta al correo " +
          correo
      );
    }
  });

  // ________________ validacion form reserva ________________________

  $("#botonReserva").click(function (){
    let nombre = $('#nombre').val();
    let correo = $('#correo').val();
    let telefono = $('#telefono').val();
    let fecha = $('#fecha').val();
    let time = $('#time').val();
    let asistentes = $('#asistentes')

    if (nombre == "") {
      alert('Rellene el campo Nombre');
    } else if (correo == "") {
      alert('Rellene el campo Correo');
    } else if (telefono == "") {
      alert('Rellene el campo Teléfono');
    } else if (fecha == "") {
      alert('Rellene el campo Fecha');
    } else if (time == "") {
      alert('Rellene el campo Hora');
    } else if (asistentes == "") {
      alert('Rellene el campo Asistentes');
    } else
            alert(
              "Muchas gracias " +
              nombre +
              " hemos recibido su sugerencia y enviaremos una pronta respuesta al correo " +
              correo
    );
  })

});


