$("#mujform").validate();
$("#otherform").validate();

$("#custom-radio").click(() => {
  if ($("#default-radio").is(":checked")) {
    $("#default-radio").prop("checked", false);
    $("#custom-radio").removeClass("radio--active");
  } else {
    $("#default-radio").prop("checked", true);
    $("#custom-radio").addClass("radio--active");
  }
});
