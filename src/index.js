
function title () {
  const element = document.createElement('h1')

  element.innerHTML = "PADDY'S PUB"

  return element;
}
const content = document.querySelector('#content')
content.appendChild(title())