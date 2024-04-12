$(document).ready(function () {
  $("#tax-form").submit(function (e) {
    e.preventDefault();
    $(".error-icon").removeClass("show-error");

    const grossIncome = parseFloat($("#gross-annual-income").val());
    const extraIncome = parseFloat($("#extra-income").val());
    const deductions = parseFloat($("#deductions").val());
    const age = parseInt($("#age").val());

    if (
      isNaN(grossIncome) ||
      isNaN(extraIncome) ||
      isNaN(deductions) ||
      isNaN(age)
    ) {
      return;
    }

    let taxableIncome = grossIncome + extraIncome - deductions;
    let taxAmount = 0;

    if (taxableIncome <= 800000) {
      // No tax
    } else {
      switch (age) {
        case 1:
          taxAmount = 0.3 * (taxableIncome - 800000);
          break;
        case 2:
          taxAmount = 0.4 * (taxableIncome - 800000);
          break;
        case 3:
          taxAmount = 0.1 * (taxableIncome - 800000);
          break;
      }
    }

    $("#tax-amount").text(` ${taxAmount.toFixed(2)}`);
    $("#tax-modal").modal("show");
  });

  $("#gross-annual-income, #extra-income, #deductions, #age").change(
    function () {
      $(this).siblings(".error-icon").removeClass("show-error");
    }
  );
});
