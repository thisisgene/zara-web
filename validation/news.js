const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateNewsInput(data) {
  let errors = {}
  console.log(data.titleDE)
  // data.name = !isEmpty(data.name) ? data.name : ''
  data.titleDE = !isEmpty(data.titleDE) ? data.titleDE : ''
  // data.handle = !isEmpty(data.handle) ? data.handle : ''

  if (Validator.isEmpty(data.titleDE)) {
    errors.titleDE = 'Titel darf nicht leer sein.'
  }

  // Only alphanumeric and spaces
  // if (!Validator.isAlphanumeric(Validator.blacklist(data.name, ' '), 'de-DE')) {
  //   errors.titleDE = 'Titel darf keine Sonderzeichen enthalten.'
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
