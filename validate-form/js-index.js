// Day, Month, Year
let day = `<option value ="">Date</option>`;
let month = `<option value ="">Month</option>`;
let year = `<option value ="">Year</option>`;
function chooseDay() {
  for (let i = 1; i <= 31; i++) {
    day += `<option value ="${i}">${i}</option>`;
  }
}
function chooseMonth() {
  for (let i = 1; i <= 12; i++) {
    month += `<option value ="${i}">${i}</option>`;
  }
}
function chooseYear() {
  for (let i = 1930; i <= 2020; i++) {
    year += `<option value ="${i}">${i}</option>`;
  }
}
chooseDay();
chooseMonth();
chooseYear();
document.getElementById("day").innerHTML = day;
document.getElementById("month").innerHTML = month;
document.getElementById("year").innerHTML = year;

// Validate form

$("#form-register").on("submit", function () {
  let isValue = true;
  // check name
  if ($("#name").val().trim() == "") {
    $("#name-span").text("Your name cannot be empty");
    isValue = false;
  } else {
    $("#name-span").text("");
  }
  //check email
  if (
    $("#email")
      .val()
      .match(/^.+@[^\.].*\.[a-z]{2,}$/) == null
  ) {
    $("#email-span").text("Email is malformed. Maybe 123@gmail.com");
    isValue = false;
  } else {
    $("#email-span").text("");
  }
  // check facebook
  if ($("#facebook").val().trim() == "") {
    $("#facebook-span").text("Your facebook address cannot be empty");
    isValue = false;
  } else {
    $("#facebook-span").text("");
  }
  // check address
  if ($("#address").val().trim() == "") {
    $("#address-span").text("Your address cannot be empty");
    isValue = false;
  } else {
    $("#address-span").text("");
  }

  // check pass
  if ($("#password").val().trim() == "") {
    $("#password-span").text("Your password cannot be empty");
    isValue = false;
  } else {
    $("#password-span").text("");
  }

  // check phone number
  if (
    $("#phone-number")
      .val()
      .match(
        /^([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})((x|ext|extension)?[0-9]{1,4}?)$/
      ) == null
  ) {
    $("#phone-number-span").text(
      "Phone number is malformed. Maybe +84 966867690"
    );
    isValue = false;
  } else {
    $("#phone-number-span").text("");
  }

  // check gander
  if ($("input:radio").is(":checked") == false) {
    $("#gender-span").text("Not gender select");
  } else {
    $("#gender-span").text("");
  }
  // check day
  if (
    $("select#day").val() == "" ||
    $("select#month").val() == "" ||
    $("select#year").val() == ""
  ) {
    $("#day-span").text("Not day or month or year select");
  } else {
    $("#day-span").text("");
  }
  return isValue;
});
