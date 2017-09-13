var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, recipes)

  delete newObject.key

  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
<<<<<<< HEAD
  delete object[key];
=======
  delete recipes.key;
>>>>>>> 9b98fa50b2f5a6a19be6880292d218fb1ac8fd62
  return object
}
