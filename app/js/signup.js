(function () {
  'use strict';



  console.log('This is the signup javascript file');

  function swapInput(tag, type) {
    var newInput = document.createElement('input');

    newInput.id = tag.id;
    newInput.type = type;
    newInput.name = tag.name;
    newInput.value = tag.value;

    if (type === 'text') {
      newInput.spellcheck = 'false';
      newInput.autocorrect = 'off';
      newInput.autocapitalize = 'off';
      newInput.autocomplete = 'off';
    }

    type === 'text' ? newInput.spellcheck = false : null;
    tag.parentNode.insertBefore(newInput, tag);
    tag.parentNode.removeChild(tag);
    newInput.focus();
  }

  function toggle_password(targetId){
    var passwordInput = document.getElementById(targetId);
    var showHideBtn = document.getElementById('show-hide-button');

    if (showHideBtn.innerHTML == 'Show'){
      swapInput(passwordInput, 'text');
      showHideBtn.innerHTML = 'Hide';
    } else {
      swapInput(passwordInput, 'password');
      showHideBtn.innerHTML = 'Show';
    }
  }

  document.getElementById('show-hide-button').addEventListener('click', function() {
    toggle_password('password')
  });

  var emailInput = document.getElementById('email');

  emailInput.onblur = function() {
    var validator = EmailValidator(emailInput.value);
    var warning = document.getElementById('signup-trial-warning');

    if (validator.isGov) {
      warning.classList.remove('show');
    } else if (validator.isValid) {
      warning.classList.add('show');
    }
  }
}());
