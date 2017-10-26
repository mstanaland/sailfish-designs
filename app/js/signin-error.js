(function () {
  'use strict';

  console.log('Click the signin button to see error state');



  document.getElementById('signin-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signin-error').innerHTML = 'That email / password combination is not valid.';
  });
}());
