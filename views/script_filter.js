$(document).ready(function () { 
 //$('#title').click(function () { 
  $('#title').on('change', function () { 
    $('#time').val('0')
    var selected = $("select option:selected")
    var titleValue = $(selected).attr('data-filter')
    var timeObj = $("[data-time]"); 
     var selectedTime = $('option[data-time="' + titleValue + '"]') 
      $(timeObj).hide()
      $(selectedTime).show()
  });
  

  var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    if(dd<10){
      dd='0'+dd
    } 
    if(mm<10){
      mm='0'+mm
    } 

    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("date").setAttribute("min", today);
});
       

       
