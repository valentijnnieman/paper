// Paper prototype
// ui rendering library using functional javascript paradigms

// define a component
var testComponent = function(){
  var component = {}
  component.click = function() {
    console.log('ha')
  }
  component.list = function() {
    var htmlstring = ""
    for(var i = 0; i < 10; i++) {
      htmlstring += '<li onclick="click">well</li>'
    }
    return htmlstring
  }
  component.render = function() {
    return component.list()
  }
  return component
}

function renderInto(rootID, component) {
  var node = document.createElement('div')
  window.funfunc = component().click
  node.innerHTML = '<li onclick="component().click()">ha</li>' 
  document.getElementById(rootID).appendChild(node)
}
renderInto('root', testComponent)
