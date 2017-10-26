(function () {
  'use strict';

  console.log('Click the submit button to see error state');



  document.getElementById('forgot-password-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signin-error').innerHTML = 'Your information didn\'t match any existing accounts.';
  });
}());
