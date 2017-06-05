// Paper prototype
// ui rendering library using functional javascript paradigms

function _map(array, method) {
  var newArray = []
  for(var i = 0; i < array.length; i++) {
    newArray[i] = method(array[i])
  }
  return newArray
}

function renderInto(rootID, component) {
  var element = new component()
  element.render().map(function(element){
    return createNode(element)
  }).map(function(node) {
    document.getElementById(rootID).appendChild(node)
  })
}

function createNode(htmlString, onClick) {
  var node = document.createElement('template')
  node.innerHTML = htmlString
  if(onClick) {
    node.onclick = onClick
  }
  return node.content
}

function bindMethods(component, methods) {
  var element = new component()
  var renderedComponent = element.render()
}

module.exports = {
  renderInto: renderInto
}
