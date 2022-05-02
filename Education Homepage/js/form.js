$(function () {

    function gatewayform() {
  
      $("[jsname=gateway-form]").on("submit", function (e) {
  
        e.preventDefault();
  
        if (!$(this).valid()) return false;
  
      });
    }
  
    if ($("[name=gateway-form]").length == 1) {
      gatewayform();
    }
  });
  