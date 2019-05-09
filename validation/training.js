const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateTrainingInput(data) {
  let errors = {}
  // data.name = !isEmpty(data.name) ? data.name : ''
  data.title = !isEmpty(data.title) ? data.title : ''
  // data.addFeeDescription = !isEmpty(data.addFeeDescription)
  //   ? data.addFeeDescription
  //   : ''

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Titel darf nicht leer sein.'
  }
  // if (Validator.isEmpty(data.addFeeDescription)) {
  //   errors.addFeeDescription = 'Beschreibung darf nicht leer sein.'
  // }

  // Only alphanumeric and spaces
  // if (!Validator.isAlphanumeric(Validator.blacklist(data.name, ' '), 'de-DE')) {
  //   errors.titleDE = 'Titel darf keine Sonderzeichen enthalten.'
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
