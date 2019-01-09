const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateOrderInput(data) {
  let errors = {}

  data.email = !isEmpty(data.email) ? data.email : ''

  if (Validator.isEmpty(data.email)) {
    errors.email = 'E-mail Adresse darf nicht leer sein.'
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'E-mail Adresse ist ungültig.'
  }
  if (Validator.isEmpty(data.fname)) {
    errors.fname = 'Vorname darf nicht leer sein.'
  }
  if (Validator.isEmpty(data.lname)) {
    errors.lname = 'Nachname darf nicht leer sein.'
  }
  if (Validator.isEmpty(data.street)) {
    errors.street = 'Straße darf nicht leer sein.'
  }
  if (Validator.isEmpty(data.city)) {
    errors.city = 'PLZ / Ort darf nicht leer sein.'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
