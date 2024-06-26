console.log("Users frontend javascript");

$(function () {
  $(".member-status").on("change", function (e) {
    const id = e.target.id;

    const memberStatus = $(`#${id}.member-status`).val();
    console.log("memberStatus:", memberStatus);

    // TODO: Axios updatechosen user
    axios
      .post("/admin/user/edit", { _id: id, memberStatus: memberStatus })
      .then((res) => {
        console.log("res:", res);

        const result = res.data;

        if (res.data) {
          console.log("User updated!");
          $(".member-status").blur();
        } else {
          alert("User update failed!");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("User update failed!");
      });
  });
});
