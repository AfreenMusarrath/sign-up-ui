const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const btn = document.getElementById('btn')
const validate = true

form.addEventListener('submit', (e) => {
  e.preventDefault()
  validateInputs()
  if (validate) {
    btn.style.backgroundColor = `rgba(0, 128, 0, 0.459)`
    btn.innerText = 'Done'
    setTimeout(function () {
      window.location.reload()
    }, 1000)
  }
})

function validateInputs() {
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const password2Value = password2.value.trim()

  if (usernameValue === '') {
    setError(username, 'Username cannot be blank')
    validate = false
  } else {
    setSuccess(username)
  }

  if (emailValue === '') {
    setError(email, 'Email cannot be blank')
    validate = false
  } else if (!validateEmail(emailValue)) {
    setError(email, 'Enter a valid email')
    validate = false
  } else {
    setSuccess(email)
  }

  if (passwordValue === '') {
    setError(password, 'Password cannot be blank')
    validate = false
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be 8 or more character')
    validate = false
  } else {
    setSuccess(password)
  }

  if (password2Value === '') {
    setError(password2, 'Password cannot be blank')
    validate = false
  } else if (passwordValue != password2Value) {
    setError(password2, 'Password did not matched')
    validate = false
  } else {
    setSuccess(password2)
  }
}
function validateEmail(email) {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  return re.test(email)
}

function setSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function setError(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')
  small.innerText = message
  formControl.className = 'form-control error'
}
