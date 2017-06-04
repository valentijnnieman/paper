// Paper prototype
// ui rendering library using functional javascript paradigms

function renderInto(rootID, component) {
  var element = new component()
  for(var i = 0; i < element.render().length; i++) {
    document.getElementById(rootID).appendChild(element.render()[i])
  }
}

function createNode(element, inner, onClick) {
  var node = document.createElement(element)
  node.innerHTML = inner
  if(onClick) {
    node.onclick = onClick
  }
  return node
}

function bindMethods(component, methods) {
  var element = new component()
  var renderedComponent = element.render()
  console.log(renderedComponent)
}
