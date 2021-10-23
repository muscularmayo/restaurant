import Pizzeria from '../pizza.jpeg'
import loadAbout from './about.js'
import loadContact from './contact.js'
const content = document.querySelector('#content');


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
  const picture = new Image();
  picture.src = Pizzeria;
  picture.classList.add('pizza')

  return picture;
}

function createButton (id, text) {
  const button = document.createElement('button');
  button.setAttribute('id', id)
  const span = document.createElement('span');
  span.innerHTML = text;
  button.appendChild(span);

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

  home.addEventListener('click', loadHome);
  about.addEventListener('click', loadAbout);
  contact.addEventListener('click', loadContact)

  //im going to have to import the loadabout/loadcontact modules and addeventlistener here too


  return nav;
}

function createBody () {
  const copy = document.createElement('p');
  copy.innerHTML = `Whattup!
  We're three cool guys looking for other cool guys who wanna hang out in our party mansion.
  NOTHING SEXUAL.
  Dudes in good shape encouraged.
  If you're fat, you should be able to find humour in the little things.
  Again, nothing sexual.`
  copy.classList.add('copy')

  return copy;
}

function createFooter () {
  const footer = document.createElement('footer')
  footer.setAttribute('id', 'footer')
  const inner = document.createElement('h5')
  inner.innerHTML = 'funded by Atwater Corp - founded by the Warthog'
  footer.appendChild(inner);

  return footer;
}

function loadHome () {
  const header = createHeader('homeHeader')
  const picture = createPicture();
  const nav = createNav();
  const body = createBody();
  const footer = createFooter();
  clearContent();

  content.appendChild(header)
  content.appendChild(nav)
  content.appendChild(picture)
  content.appendChild(body);
  content.appendChild(footer);

  console.log('HOME CLICK')



}
function base() {
  const header = createHeader('homeHeader')
  const nav = createNav();

  content.appendChild(header)
  content.appendChild(nav)

}

function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

const homeModule = {loadHome, clearContent, createFooter, createNav, createButton, createHeader, base}
export default homeModule;
