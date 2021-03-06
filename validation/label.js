const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateLabelInput(data) {
  let errors = {}
  // data.name = !isEmpty(data.name) ? data.name : ''
  data.title = !isEmpty(data.title) ? data.title : ''
  // data.handle = !isEmpty(data.handle) ? data.handle : ''

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Titel darf nicht leer sein.'
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
