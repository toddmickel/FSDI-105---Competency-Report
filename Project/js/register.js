var coverageArea1Triggered = false;
var coverageArea2Triggered = false;
var inputName = $("#pet-name");
var inputAge = $("#age");
var inputGender = $("#gender");
var inputType = $("#pet-type");
var inputBreed = $("#breed");
var inputService = $("#service");
var inputOwner = $("#owner-name");
var inputPhone = $("#phone");
var inputAddress = $("#address");
var inputCity = $("#city");
var inputState = $("#state");
var inputZip = $("#zip");

// Supporting functions
function displayPetNames() {
  let petNames = "";
  for (var i = 0; i < salon.pets.length; i++) {
    if (i === salon.pets.length - 1 && salon.pets.length > 1) {
      petNames += ` and ${salon.pets[i].name} `;
    } else if (salon.pets.length === 1) {
      petNames = ` ${salon.pets[i].name} `;
    } else {
      petNames += ` ${salon.pets[i].name},`;
    }
  }
  return petNames;
}

function register() {
  if (
    $("#pet-name").val() === "" ||
    $("#age").val() === "" ||
    $("#gender").val() === "" ||
    $("#pet-type").val() === "" ||
    $("#breed").val() === "" ||
    $("#service").val() === "" ||
    $("#owner-name").val() === "" ||
    $("#phone").val() === "" ||
    $("#address").val() === "" ||
    $("#city").val() === "" ||
    $("#state").val() === "" ||
    $("zip").val() === ""
  ) {
    alert("You must input information into each field.  Please try again.");
  } else {
    // create a generic obj and pass info from the vars
    var thePet = new Pet(
      $("#pet-name").val(),
      $("#age").val(),
      $("#gender").val(),
      $("#pet-type").val(),
      $("#breed").val(),
      $("#service").val(),
      $("#owner-name").val(),
      $("#phone").val(),
      $("#address").val(),
      $("#city").val(),
      $("#state").val(),
      $("#zip").val()
    );

    // push object into the array
    salon.pets.push(thePet);
    clear();
    reDisplayPetNames();

    displayTable(thePet);
    updateProfits();
    if (testTop()) {
      displayPetCount1();
    } else {
      coverageArea1Triggered = false;
    }

    if (testBottom()) {
      displayPetCount2();
    } else {
      coverageArea2Triggered = false;
    }
  }
}

function clear() {
  $("#pet-name").val("");
  $("#age").val("");
  $("#gender").val("");
  $("#pet-type").val("");
  $("#breed").val("");
  $("#service").val("");
  $("#owner-name").val("");
  $("#phone").val("");
  $("#address").val("");
  $("#city").val("");
  $("#state").val("MT");
  $("#zip").val("");
}

function reDisplayPetNames() {
  document.getElementById("regnum").innerHTML = salon.pets.length;
  var getPetpl = document.getElementsByTagName("petpl");
  document.getElementById("petnames").innerHTML = displayPetNames();
  if (salon.pets.length > 1) {
    for (var i = 0; i < getPetpl.length; i++) {
      document.getElementsByTagName("petpl")[i].innerHTML = "pets";
    }
  } else {
    for (var i = 0; i < getPetpl.length; i++) {
      document.getElementsByTagName("petpl")[i].innerHTML = "pet";
    }
  }
}

function updateProfits() {
  var profit = 0;
  for (var i = 0; i < salon.pets.length; i++) {
    profit += salon.pets[i].price;
  }
  document.getElementById(
    "profits"
  ).innerHTML = `We have made a total of $${profit}.00 today!`;
}

function deletePet(petId) {
  // select the card with the pet
  var delRow = $("#row" + petId);
  // search for the pet in the array
  var indexDelete;
  for (i = 0; i < salon.pets.length; i++) {
    var selected = salon.pets[i];
    if (selected.id == petId) {
      indexDelete = i;
      break;
    }
  }
  // delete the pet from the array
  salon.pets.splice(indexDelete, 1);
  // delete the pet from the html
  delRow.remove();
  updateProfits();
  if (testTop()) {
    displayPetCount1();
  } else {
    coverageArea1Triggered = false;
  }

  if (testBottom()) {
    displayPetCount2();
  } else {
    coverageArea2Triggered = false;
  }
  reDisplayPetNames();
}

function searchPet(keyup) {
  // get the value from the input box
  var ss = $("#searchPet").val();
  // search for the pet in the array (to get the ID)
  salon.pets.forEach((pet) => {
    if (
      pet.name.toLowerCase().includes(ss.toLowerCase()) ||
      pet.service.toLowerCase().includes(ss.toLowerCase()) ||
      pet.type.toLowerCase().includes(ss.toLowerCase())
    ) {
      $("#row" + pet.id).removeClass("inactive");
      found = true;
    } else {
      $("#row" + pet.id).addClass("inactive");
    }
  });
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function displayPetCount1() {
  const dogCount = document.getElementById("dog-num");
  const catCount = document.getElementById("cat-num");
  var dogNum = 0;
  var catNum = 0;
  salon.pets.forEach((pet) => {
    if (pet.type.toLowerCase().includes("dog")) {
      dogNum++;
    } else if (pet.type.toLowerCase().includes("cat")) {
      catNum++;
    }
  });
  animateValue(dogCount, dogNum + 100, dogNum, 500);
  animateValue(catCount, catNum + 100, catNum, 500);
}

function displayPetCount2() {
  const birdCount = document.getElementById("bird-num");
  const otherCount = document.getElementById("other-num");
  var birdNum = 0;
  var otherNum = 0;
  salon.pets.forEach((pet) => {
    if (pet.type.toLowerCase().includes("dog")) {
    } else if (pet.type.toLowerCase().includes("cat")) {
    } else if (pet.type.toLowerCase().includes("bird")) {
      birdNum++;
    } else {
      otherNum++;
    }
  });
  animateValue(birdCount, birdNum + 100, birdNum, 500);
  animateValue(otherCount, otherNum + 100, otherNum, 500);
}

function testTop() {
  var scrollTop = $(window).scrollTop(),
    windowHeight = $(window).height(),
    elem = $("#dog-num-cont").offset().top,
    final = elem - windowHeight,
    distance = final - scrollTop;
  if (distance < -75) {
    return true;
  }
}

function testBottom() {
  var scrollTop = $(window).scrollTop(),
    windowHeight = $(window).height(),
    elem = $("#bird-num-cont").offset().top,
    final = elem - windowHeight,
    distance = final - scrollTop;
  if (distance < -75) {
    return true;
  }
}

function watchForDel() {
  /*   $('.del-btn').on('click', function() {
        deletePet(this.id)
    });*/
}

const pet1 = new Pet(
  "Scooby",
  50,
  "Male",
  "Dog",
  "Dane",
  "Grooming",
  "Shaggy",
  "555-555-5555",
  "1224 Sesame Ct",
  "Sunnyvale",
  "CA",
  "94087"
);

const pet2 = new Pet(
  "Scrappy",
  40,
  "Male",
  "Dog",
  "Dane",
  "Full Service",
  "Shaggy",
  "555-555-5555",
  "1224 Sesame Ct",
  "Sunnyvale",
  "CA",
  "94087"
);

const pet3 = new Pet(
  "Speedy",
  60,
  "Male",
  "Bird",
  "Mixed",
  "Nails Cut",
  "Bugs Bunny",
  "888-888-8888",
  "35 Arlene Ct",
  "Hauppauge",
  "NY",
  "11788"
);

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

function initReg() {
  regShow = true;
  reDisplayPetNames();

  for (var i = 0; i < salon.pets.length; i++) {
    displayTable(salon.pets[i]);
  }

  reDisplayPetNames();
  updateProfits();
  coverageArea1Triggered = false;
  coverageArea2Triggered = false;
  // hook events
  $("#register-btn").click(register);
  $("#search-btn").on("click", searchPet);

  $(window).scroll(function () {
    if (!coverageArea1Triggered) {
      if (regShow) {
        if (testTop()) {
          displayPetCount1();
          coverageArea1Triggered = true;
        }
      }
    }
  });
  $(window).scroll(function () {
    if (!coverageArea2Triggered) {
      if (regShow) {
        if (testBottom()) {
          displayPetCount2();
          coverageArea2Triggered = true;
        }
      }
    }
  });

  watchForDel();
  $("#zip").keypress(function (e) {
    if (e.key === "Enter") {
      register();
    }
  });

  $("#searchPet").on("keyup", searchPet);
}
