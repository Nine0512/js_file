let subject = ['INT201-Client Side I', 'INT202-Server Side','INT100 Information Technology']
for (const i of subject) {
    const liElement = document.createElement('li')
    liElement.setAttribute('class', 'dev')
    liElement.textContent = i
    const ulElement = document.querySelector('ul')
    ulElement.appendChild(liElement)
}
const classDev = document.getElementsByClassName("dev")
console.log(classDev)
