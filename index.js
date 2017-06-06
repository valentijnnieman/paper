// define a component
//
function testComponent(){
  this.click = function() {
    console.log('ha')
  }
  this.list = function() {
    var elements = []
    for(var i = 0; i < 10; i++) {
      elements.push("<li>well</li>")
    }
    return elements 
  }
  this.test = function() {
    return [
      "<div class='block'>welcome to</div>",
      "<h1>paper.js</h1>",
    ]
  }
  this.render = function() {
    return this.list()
  }
}

var shadow = createVirtualNode('root')
shadow = renderInto(shadow, testComponent)
updateDom(shadow)
