$(function () {
//TODO LO QUE SE HAGA EN JQUERY TIENE QUE ESTAR ACA 

$("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente")

})

$(".card-tittle").click(function(){
    $(".card-text").toggle()
})


$("h4").dblclick(function(){
  $(this).css({
      "color": "red",
      });
  });


$(".card-title").click(function(){
  $(".card-text").toggle()
})


})



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
