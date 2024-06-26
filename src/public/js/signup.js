console.log("Signup front javascript file");

/**  Uploading image check (pre-render) **/
// helps the user to check what kind of picture is being uploaded before uploading
$(function () {
  const fileTarget = $(".file-box .upload-hidden");
  let filename;

  fileTarget.on("change", function () {
    if (window.FileReader) {
      const uploadFile = $(this)[0].files[0];

      const fileType = uploadFile["type"];
      const validImgType = ["image/jpg", "image/jpeg", "image/png"];
      if (!validImgType.includes(fileType)) {
        alert("Please check the image types");
      } else {
        if (uploadFile) {
          console.log(URL.createObjectURL(uploadFile));
          $(".upload-img-frame")
            .attr("src", URL.createObjectURL(uploadFile))
            .addClass("success");
        }
        filename = $(this)[0].files[0].name;
      }
      $(this).siblings(".upload-name").val(filename);
    }
  });
});

function signupFormValidation() {
  const memberNick = $(".member-nick").val(),
    memberPhone = $(".member-phone").val(),
    memberPassword = $(".member-password").val(),
    confirmPassword = $(".confirm-password").val();

  if (
    memberNick === "" ||
    memberPhone === "" ||
    memberPassword === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill in all the required inputs!");
    return false;
  }

  if (memberPassword !== confirmPassword) {
    alert("Password does not match, Please check again!");
    return false;
  }
  /**  image pre-render validation **/
  const memberImage = $(".member-image").get(0).files[0]
    ? $(".member-image").get(0).files[0].name
    : null;

  if (!memberImage) {
    alert("Please upload restaurant image!");
    return false;
  }
}
