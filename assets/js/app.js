document.write(
  '<script type="text/javascript" src="js/jquery-ui.min.js" ></script>'
);

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

$(function () {
  $("#datepicker").datepicker({
    dateFormat: "dd-mm-yy",
    duration: "fast",
  });
  $("#datepiccker").datepicker({
    dateFormat: "dd-mm-yy",
    duration: "fast",
  });
});

$("#popDetails").hide();

$("#popBtn").click(function () {
  $("#popDetails").slideToggle(600);
});

function deleteRow(r) {
  $("#rowDelete").closest("tr").remove();
}

function tableRowAdd() {
  $(".invoice__table tbody").append(
    '<tr><td></td><td><input type="text"id="itemName"name="itemName"placeholder="Item Name"/></td><td><input type="number" id="gst" name="gst" placeholder="GST" /><span>%</span></td><td><input type="number" id="qty" name="qty" placeholder="Quanity" /></td><td><span>&#8377;</span><input type="number" id="rate" name="rate" placeholder="Rate" /></td><td><span>&#8377;</span><input type="number"id="amount"name="amount" placeholder="Amount" /> </td> <td> <button id="rowDelete" onclick="deleteRow();"> <ion-icon name="close-outline"></ion-icon></button></td></tr>'
  );
}

$("#gst").keyup(function () {
  var gst = $("#gst").val();

  $("#invoiceFinalAmount").html(gst);
});

$("#invoiceFinalAmount").html("100");
/*
$("#invoiceFinalAmountWords").html(
  numberToWords.toWords($("#invoiceFinalAmount").value)
);*/

$("#date").html(function () {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = today.getMonth() + 1;
  //var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  var month;
  switch (mm) {
    case 1:
      month = "Jan";
      break;
    case 2:
      month = "Feb";
      break;
    case 3:
      month = "Mar";
      break;
    case 4:
      month = "Apr";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "Jun";
      break;
    case 7:
      month = "Jul";
      break;
    case 8:
      month = "Aug";
      break;
    case 9:
      month = "Sep";
      break;
    case 10:
      month = "Oct";
      break;
    case 11:
      month = "Nov";
      break;
    case 12:
      month = "Dec";
      break;
  }
  today = dd + "-" + month + "-" + yyyy;
  $("#date").html(today);
});

$("")