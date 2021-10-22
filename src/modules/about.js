import homeModule from './home.js'
import Bicep from '../bicep.jpeg'
import Charlie from '../Charlie_Kelly.jpeg'
import Dennis from '../dennis.jpeg'
import Mac from '../mac.jpeg'
import Threesome from '../threesome.jpeg'

const content = document.querySelector('#content');

//homeModule - {loadHome, clearContent, createFooter, createNav, createButton, createHeader, base}

// i should make a function that always createsnav, header, and footer... does createNav still work with createButton here?

function createBody() {
  const copy = document.createElement('p');
  const mac = document.createElement('p');
  const br = document.createElement('br');
  const charlie = document.createElement('p');
  const dennis = document.createElement('p');

  mac.innerHTML = `Ronald "Mac" MacDonald: Co-owner/bouncer/bodyguard/ocular inspector of Paddy's Pub`
  mac.classList.add('copy')
  mac.classList.add('mac')

  copy.appendChild(macImage());
  copy.appendChild(mac);
  copy.appendChild(br);

  charlie.innerHTML = `Charlie Rutherford Kelly: Wild card bitches! Yeehaw!!`
  charlie.classList.add('copy')
  charlie.classList.add('charlie')

  copy.appendChild(charlieImage())
  copy.appendChild(charlie);
  copy.appendChild(br);

  dennis.innerHTML = `THE GOLDEN GOD`;
  dennis.classList.add('dennis');
  dennis.classList.add('copy');

  copy.appendChild(dennisImage())
  copy.appendChild(dennis);
  copy.appendChild(br);

  copy.appendChild(threesomeImage())

  return copy;
}

function bicepImage() {
  const bicep = new Image()
  bicep.src = Bicep;
  bicep.setAttribute('id','bicep')
  bicep.classList.add('pizza')

  return bicep;
}

function macImage() {
  const mac = new Image();
  mac.src = Mac;
  mac.setAttribute('id','mac');
  mac.classList.add('portrait')

  return mac;
}

function charlieImage() {
  const charlie = new Image();
  charlie.src = Charlie;
  charlie.setAttribute('id','charlie')
  charlie.classList.add('portrait')

  return charlie;
}

function dennisImage() {
  const dennis = new Image();
  dennis.src = Dennis;
  dennis.setAttribute('id', 'dennis')
  dennis.classList.add('portrait')

  return dennis;
}

function threesomeImage() {
  const threesome = new Image();
  threesome.src = Threesome;
  threesome.classList.add('threesome')

  return threesome;
}

function loadAbout() {
  homeModule.clearContent();
  homeModule.base();
  const bicep = bicepImage();
  const body = createBody();
  const footer = homeModule.createFooter()
  footer.removeAttribute('id');
  footer.setAttribute('id', 'aboutFooter')
  content.appendChild(bicep)
  content.appendChild(body);

  content.appendChild(footer)



}

export default loadAbout