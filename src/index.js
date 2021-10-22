import './style.css';
import Pizzeria from './pizza.jpeg'
import homeModule from './modules/home.js'

function onLoad () {
  /*
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
  */
}
const content = document.querySelector('#content')


homeModule.loadHome();



const homeBtn = document.querySelector('#home')
const aboutBtn = document.querySelector('#about')
const contactBtn = document.querySelector('#contact')



