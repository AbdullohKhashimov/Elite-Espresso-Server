console.log("Products frontend javascript file!");

$(function () {
  $(".product-collection").on("change", () => {
    const selectedValue = $(".product-collection").val();

    if (selectedValue === "COFFEE" || selectedValue === "SMOOTHIE") {
      $("#product-volume").show();
      $("#product-collection").hide();
    } else {
      $("#product-volume").hide();
      $("#product-collection").show();
    }
  });

  $("#process-btn").on("click", () => {
    $(".dish-container").slideToggle(500);
    $("#process-btn").css("display", "none");
  });

  $("#cancel-btn").on("click", () => {
    $(".dish-container").slideToggle(400);
    $("#process-btn").css("display", "flex");
  });

  // async function because axios will be in use
  $(".new-product-status").on("change", async function (e) {
    const id = e.target.id;
    const productStatus = $(`#${id}.new-product-status`).val();

    console.log("id:", id);
    console.log("productStatus:", productStatus);

    try {
      const response = await axios.post(`/admin/product/${id}`, {
        productStatus: productStatus,
      });

      console.log("response:", response);

      const result = response.data;
      if (result.data) {
        $(".new-product-status").blur();
      } else {
        alert("product update failed");
      }
    } catch (err) {
      console.log("error productStatus:", err);
      alert("Product update failed!");
    }
  });
});

function validateForm() {
  const productName = $(".product-name").val(),
    productPrice = $(".product-price").val(),
    productLeftCount = $(".product-left-count").val(),
    productCollection = $(".product-collection").val(),
    productDesc = $(".product-desc").val(),
    productStatus = $(".product-status").val();

  if (
    productName === "" ||
    productPrice === "" ||
    productLeftCount === "" ||
    productCollection === "" ||
    productDesc === "" ||
    productStatus === ""
  ) {
    alert("Please insert all required fields!");
    return false;
  } else {
    return true;
  }
}

/**  Product image pre-render check  **/
function previewFileHandler(input, order) {
  const imgClassName = input.className;
  console.log("imgClassName:", imgClassName);

  const file = $(`.${imgClassName}`).get(0).files[0];

  const fileType = file["type"];

  /**  image validation **/
  const validImgType = ["image/jpg", "image/jpeg", "image/png", "image/webp"];

  if (!validImgType.includes(fileType)) {
    alert("Please insert only [jpeg, jpg, webp and png]");
  } else {
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        $(`#image-section-${order}`).attr("src", reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
}
