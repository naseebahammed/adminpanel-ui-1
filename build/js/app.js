const mediaQuery = window.matchMedia("(max-width: 768px)");

if (mediaQuery.matches) {
  function sidebarFunc() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("hide")) {
      sidebar.classList.remove("hide");
      sidebar.classList.add("active");
    } else {
      sidebar.classList.add("hide");
      sidebar.classList.remove("active");
    }
  }
  function rightBarFunc() {
    const sidebar = document.getElementById("mobRightSidebar");
    if (sidebar.classList.contains("hide-right")) {
      sidebar.classList.remove("hide-right");
      sidebar.classList.add("activeRight");
    } else {
      sidebar.classList.add("hide-right");
      sidebar.classList.remove("activeRight");
    }
  }
}
function addFile() {
  document.getElementById("addFile").click();
}

$("#addProd-cato").on("click", function () {
  sizeModalOpen();
});

function modalOpen() {
  var el = document.getElementById("catogDesc");
  el.classList.add("modal-active");
}

$("#btnModalClose").on("click", function () {
  modalClose();
});

function modalClose() {
  var el = document.getElementById("catogDesc");
  el.classList.remove("modal-active");
}

$("#addColorSize").on("click", function () {
  sizeModalOpen();
});

function sizeModalOpen() {
  var el = document.getElementById("sizeColor");
  el.classList.add("modal-active");
}

$("#sizeModalClose").on("click", function () {
  sizeModalclose();
});

function sizeModalclose() {
  var el = document.getElementById("sizeColor");
  el.classList.remove("modal-active");
}

$(".sidebar-nav_btn ul").hide();

$(".sidebar-nav_btn a").click(function () {
  $(this).parent(".sidebar-nav_btn").children("ul").slideToggle("100");
});

$(document).ready(function () {
  $(".manageProd-card_tabs__header button").click(function () {
    var tab_id = $(this).attr("data-tab");

    $(".manageProd-card_tabs__header button").removeClass("tabs-active");
    $(".tab-content").removeClass("tabs-body-active");

    $(this).addClass("tabs-active");
    $("#" + tab_id).addClass("tabs-body-active");
  });
});
