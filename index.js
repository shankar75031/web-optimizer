react = require('react')
ReactDOM = require('react-dom')
var s = Document.getElementById('Chefs')
const reactElement = react.render(s);
react.addServiceWorker(reactElement);
if(reactElement === null){
    console.log("Null exception");
}