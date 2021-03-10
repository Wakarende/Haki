
  $(document).ready(function() {
    $("#form-info").submit(function(event) {
      event.preventDefault();
    
    $("#info-btn").click(function() {
      var fullName = $("#fullname").val();
      var dayOfApp = $("#day").val();
      var monthOfApp = $("#month").val();
      var yearOfApp = $("#year").val();
      // var serviceType = $("#service option:selected").val();

      let date = new Date(yearOfApp + "/" + monthOfApp + "/" + dayOfApp);
      

      if (fullName == ""|| date == "" ||) {
        alert("please fill in your information below")
      }else {
        $("#displayAppointment").text("Dear " + fullName + "," + "your appointment is on " + date + ".")
        // $("#modeOfComm").text("Your consultation will be held via " + serviceType);
      }
    });
    });
  });