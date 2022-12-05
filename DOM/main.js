// root node called document object
const windowNode = window
console.log(windowNode)
const rootNode = window.document
console.log(rootNode)
console.log(rootNode.nodeType===Node.DOCUMENT_NODE)
console.log(rootNode.nodeName)
console.log(rootNode.nodeValue)
console.log(rootNode.children) //only element node types of children

//root element,document element,html element
const htmlNode = document.documentElement
console.log(htmlNode)
console.log(htmlNode.nodeName)
console.log(htmlNode.nodeValue)
console.log(htmlNode.nodeType)
console.log(htmlNode.children) //only element types
console.log(htmlNode.childNodes) //include all node types

console.log(document.head)
console.log(document.head.nodeType)
console.log(document.body)

const bodyChilds = document.body.children
console.log(bodyChilds[1])
console.log(bodyChilds[1].parentElement) //only parent that is an element node
console.log(bodyChilds[0].parentNode) //parent node can be any node types

const prevSiblingChild1 = bodyChilds[1].previousElementSibling
console.log(prevSiblingChild1)
console.log(bodyChilds[1].nextElementSibling)
const lastElementNode = bodyChilds[2]
console.log(lastElementNode)

//create new div node
const newDivNode = document.createElement('div')//<div></div>
//create an attrbute node named "stdId"
newDivNode.setAttribute('stdId',1)
// const newStdAttbuteNode = document.createAttribute('stdId')
// newStdAttbuteNode.value = 1 // stdId = 1

// newDivNode.setAttributeNode(newStdAttbuteNode) //<div stdId="1"></div>

//create an textnode
newDivNode.textContent="A"
// newDivNode.innerHTML="<h1>A</h1>"
// const newTextNode = document.createTextNode('A')
// newDivNode.appendChild(newTextNode)// <div stdId="1">A</div>

//appendChile to a div course node
lastElementNode.appendChild(newDivNode)