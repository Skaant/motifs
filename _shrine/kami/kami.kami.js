import namesProp from "./_props/names/names.prop.js";
import descriptionProp from "./_props/description/description.prop.js";
import createWay from "./_ways/create/create.way.js";
import readmeWay from "./_ways/readme/readme.way.js";
import getWay from "./_ways/get/get.way.js";

export default {
  id: 'kami',
  names: namesProp,
  description: descriptionProp,
  create: createWay,
  readme: readmeWay,
  get: getWay
}