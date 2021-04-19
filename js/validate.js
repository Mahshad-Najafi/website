function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  // console.log('TODO - validate the longitude, latitude values before submitting');
  var latitude = document.getElementById("lat").value;
  var longitude = document.getElementById("long").value;
  res = true;
  if (!(latitude <= 90 && latitude >= -90)){
    document.getElementById("laterrmsg").innerText = "* must be a valid Latitute (-90 to 90)";
    res = false;
  }
  if (!(longitude <= 180 && longitude >= -180)){
    document.getElementById("longerrmsg").innerText = "* must be a valid Longitude (-180 to 180)";
    res = false;
  }
  return res;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
