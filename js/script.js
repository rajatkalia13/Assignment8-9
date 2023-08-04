window.onload=function(){
    document.getElementById('registerBtn').addEventListener('click', function() {
        validateForm();

      });




}


  function validateForm() {
    clearErrors();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (firstName === '') {
      displayError('firstNameError', 'First name is required.');
    }

    if (lastName === '') {
      displayError('lastNameError', 'Last name is required.');
    }

    if (dob === '') {
      displayError('dobError', 'Date of birth is required.');
    }

    if (!gender) {
      displayError('genderError', 'Gender is required.');
    }

    if (password === '') {
      displayError('passwordError', 'Password is required.');
    }

    if (confirmPassword === '') {
      displayError('confirmPasswordError', 'Confirm password is required.');
    }

    if (password !== confirmPassword) {
      displayError('passwordError', 'Passwords do not match.');
      displayError('confirmPasswordError', 'Passwords do not match.');
    }
  }



  function displayError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
  }

  function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(element) {
      element.textContent = '';
    });
  }



  
