import namesProp from './_props/names/names.prop.js'
import descriptionProp from './_props/description/description.prop.js'

export default {
  id: 'extract',
  names: namesProp,
  description: descriptionProp,
  regExp: /\/_extracts\/(.*)\/(.*)\.extract\.js/
}