import homeModule from './home.js'
import Paddys from '../pizza.png';
const content = document.querySelector('#content');

function createBody () {
  const form = document.createElement('form')
  form.innerHTML = 'write to us here and we will get back to u soon'
  form.setAttribute('action', 'submit')

  const br = document.createElement('br')
  form.appendChild(br)

  const input = document.createElement('input')
  input.setAttribute('type', 'text')
  form.appendChild(input)

  const button = document.createElement('button')
  button.innerHTML = 'submit'
  form.appendChild(br);
  form.appendChild(button)

  return form;
}



function createPaddysImage () {
  const paddys = new Image();
  paddys.src = Paddys;
  paddys.classList.add('pizza');
  paddys.setAttribute('id', 'paddys')

  return paddys;
}

function loadContact() {
  homeModule.clearContent();
  homeModule.base();

  const paddys = createPaddysImage()
  content.appendChild(paddys);
  content.appendChild(createBody());
  content.appendChild(homeModule.createFooter())


}

export default loadContact;