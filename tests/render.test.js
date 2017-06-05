var rendering = require('../src/main.js')

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
      "<div>testing</div>"
    ]
  }
  this.render = function() {
    return this.test()
  }
}

test('renderInto appends a child to a node', function() {
  document.body.innerHTML = '<div id="root"></div>'
  rendering.renderInto('root', testComponent)
  var ghostComponent = new testComponent()
  //expect(document.body.children['root'].children[0]).toBe(ghostComponent.render()[0])
  expect(document.body.children['root'].children[0].innerHTML).toBe("testing")
  //expect(document.body.children)
});
