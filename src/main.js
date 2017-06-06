// Paper prototype
// ui rendering library using functional javascript paradigms

function _map(array, method) {
  var newArray = []
  for(var i = 0; i < array.length; i++) {
    newArray[i] = method(array[i])
  }
  return newArray
}

function createVirtualNode(id) {
  return document.getElementById(id).cloneNode()
}

function renderInto(virtualNode, component) {
  var element = new component()
  console.log(virtualNode)
  element.render().map(function(element){
    return createNode(element)
  }).map(function(node) {
    virtualNode.appendChild(node)
  })
  return virtualNode
}

function updateDom(virtualNode) {
  document.getElementById(virtualNode.id).replaceWith(virtualNode)
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
