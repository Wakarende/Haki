
  $(document).ready(function() {
    $("#form-info").submit(function(event) {
      event.preventDefault();
    $("#info-btn").click(function() {
      var fullName = $("#fullname").val();
      var timeOfApp = $("#time option:selected").val();
      var serviceType = $("#service option:selected").val();
      var communication = $("#comm option:selected").val();

      var date = new Date($("#get-date").val()).toDateString();
      if (fullName == ""|| date == "" || timeOfApp == "" || serviceType == "" || communication == "") {
        alert("please fill in your information below")
      }else {
        $("#displayAppointment").text("Dear " + fullName + "," + "your appointment is on " + date + "," + " at " + timeOfApp);
        $("#modeOfComm").text("Your consultation will be held via " + communication);
        $("#serviceType").text(serviceType);
      }
    });
    });
  });

  // Payment click functions

  $(document).ready(function() {
    $("#pay").click(function() {
      $("#payment").slideDown();
    })
  
  //  $("#paymentconfirm").click(function(event) {
  //     event.preventDefault();
  //     $("#payment").slideUp();
    });
  

  // Payment output

  // $(document).ready(function() {
  //   $("#payment").submit(function(event) {
  //     event.preventDefault();
  //   $("#paymentconfirm").click(function() {
  //     var paymentName = $("#pname").val();
  //     var paymentEmail = $("#email").val();
  //     var paymentMode = $("#modeOfPayment option:selected").val();

  //   if (paymentName == " ") {
  //     alert("Kindly input your payment information.");
  //   }else if(paymentEmail == "" || paymentMode == "") {
  //     alert("Kindly input your payment information.");
  //   }else{
  //     alert ("Dear " + paymentName + "." + "Thank you for your "  + "transaction." + "We will send your receipt and more information on your session to your email address" )
  //   }
  //   });
    
  //   });
    
    
  // })

