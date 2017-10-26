(function () {
  'use strict';

  console.log('Click the submit button to see error state');

  document.getElementById('change-password-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signin-error').innerHTML = "<ul><li>Password must be at least 12 characters, with one character from each of the following classes: lowercase, uppercase, numeric, non-alphanumeric.</li><li>Password and password confirmation do not match.</li></ul>";
  });
}());
