// define a component
function testComponent(){
  this.click = function() {
    console.log('ha')
  }
  this.list = function() {
    var elements = []
    for(var i = 0; i < 10; i++) {
      elements.push(createNode("li", "well", this.click))
    }
    return elements 
  }
  this.render = function() {
    return this.list()
  }
}

bindMethods(testComponent, [])
renderInto('root', testComponent)
