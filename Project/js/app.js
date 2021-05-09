var intId;
var regShow = false;

$("#register-link").on("click", function () {
  if (intId) {
    clearInterval(intId);
    intId = "";
  }
  //  $("#div-container").fadeOut(500, loadPage("register.html")).fadeIn(500);
  $("#div-container").load("register.html", function () {
    if (initReg) initReg();
  });
  //    $('#div-container').fadeIn(500);
});

$("#services-link").on("click", function () {
  regShow = false;
  if (intId) {
    clearInterval(intId);
    intId = "";
  }
  $("#div-container").load("services.html", function () {
    if (initService) initService();
  });
});

$("#about-link").on("click", function () {
  regShow = false;
  $("#div-container").load("about.html", function () {
    if (initAbout) initAbout();
  });
});

$("#home-link").on("click", function () {
  regShow = false;
  if (intId) {
    clearInterval(intId);
    intId = "";
  }
  $("#div-container").load("map.html", function () {
    if (initMap) initMap();
  });
});

function loadPage(page, init) {
  $("#div-container").load(page, function () {
    if ((page = "register.html")) {
      if (initReg) initReg();
    }
  });
}

function init() {
  $("#div-container").load("map.html", function () {
    if (initMap) initMap();
  });
}

window.onload = init;
