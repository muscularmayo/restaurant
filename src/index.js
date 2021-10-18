import './style.css';
import Pizzeria from './pizza.jpeg'

function onLoad () {
  const element = document.createElement('div')
  element.classList.add('innerContent')

  const header = document.createElement('header')
  const title = document.createElement('h1')
  title.innerHTML = "PADDY'S PUB"
  title.classList.add('title')
  header.appendChild(title)

  //add the image to content

  const pizza = new Image();
  pizza.src = Pizzeria;
  pizza.classList.add('pizza')

  const copy = document.createElement('p');
  copy.innerHTML = `Whattup!
  We're three cool guys looking for other cool guys who wanna hang out in our party mansion.
  NOTHING SEXUAL.
  Dudes in good shape encouraged.
  If you're fat, you should be able to find humour in the little things.
  Again, nothing sexual.`
  copy.classList.add('copy')

  element.appendChild(header);
  element.appendChild(pizza);
  element.appendChild(copy);
  return element;
}
const content = document.querySelector('#content')
content.appendChild(onLoad())

function clearContent() {
  while (content.firstChild) {
    content.removeChild(parent.firstChild);
  }
}

function createHeader (id) {
  const header = document.createElement('header')
  header.setAttribute('id', id);
  const title = document.createElement('h1')
  title.innerHTML = "PADDY'S PUB"
  title.classList.add('title')
  header.appendChild(title)

  return header;
}

function createPicture () {
  const paddys = new Image();
  paddys.src = Pizzeria;
  paddys.classList.add('pizza')

  return pizza;
}

function createButton (id, text) {
  const button = document.createElement('button');
  button.setAttribute('id', id)
  const span = document.createElement('span');
  span.innerHTML = text;

  return button;

}

function createNav () {
  const home = createButton('home', 'home');
  const about = createButton('about', 'about')
  const contact = createButton('contact', 'contact')

  const nav = document.createElement('nav')
  nav.setAttribute('id', 'nav')
  nav.appendChild(home);
  nav.appendChild(about);
  nav.appendChild(contact);

  return nav;
}




