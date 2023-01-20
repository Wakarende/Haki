$(document).ready(function() {
    // Form submit handler
    $("#form-info").submit(function(event) {
      event.preventDefault();
      var fullName = $("#fullname").val();
      var timeOfApp = $("#time option:selected").val();
      var serviceType = $("#service option:selected").val();
      var communication = $("#comm option:selected").val();
      var date = new Date($("#get-date").val()).toDateString();
  
      // Check if form is filled
      if (fullName == ""|| date == "" || timeOfApp == "" || serviceType == "" || communication == "") {
        alert("please fill in your information below")
      } else {
        $("#displayAppointment").text("Dear " + fullName + "," + "your appointment is on " + date + "," + " at " + timeOfApp);
        $("#modeOfComm").text("Your consultation will be held via " + communication);
        $("#serviceType").text(serviceType);
      }
    });
  
    // Payment click handler
    $("#pay").click(function() {
      $("#payment").slideDown();
    });
  
    // Payment submit handler
    $("#payment").submit(function(event) {
      event.preventDefault();
      var paymentName = $("#pname").val();
      var email = $("#emailaddress").val();
  
      // Check if payment form is filled
      if (paymentName == " " || email == " ") {
        alert("Kindly input your payment information.");
      } else {
        alert ("Dear " + paymentName + "." + "Thank you for your "  + "transaction.")
        alert("We will send your receipt and more information on your session to " + email + ".");
      }
    });
  });
  
