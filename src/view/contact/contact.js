// Set up form submission
// Document ready!
// $(document).ready(function() {
function toggleThankYou() {
  $("#form-submit-thank-you").fadeIn(800).delay(2000).fadeOut(800);
}
$(document).ready(function() {
  $.ajax({
    url: "//formspree.io/amcmaho4@nd.edu",
    method: "POST",
    data: { name: "anna", email: "amcmaho4@nd.edu", content: "hello" },
    dataType: "json"
  });
//$('button#form-submit-button').on('click', function(e) {
$('form-submit-button').click(function(){
  //e.preventDefault();

  var name = $('#form-input-name').val();
  var email = $('#form-input-email').val();
  var message = $('#form-input-content').val();

  $('#form-input-name').val('');
  $('#form-input-email').val('');
  $('#form-input-content').val('');

  //toggleThankYou();

  $.ajax({
    url: "//formspree.io/amcmaho4@nd.edu",
    method: "POST",
    data: { name: name, email: email, content: message },
    dataType: "json"
  });
});
$("#form-submit-thank-you").hide();
});
