import './style.css';
import { headers, renderSection } from './header';

const content = document.getElementById('content');

function render() {
  content.innerHTML = '';
  content.appendChild(headers());
  let divSection = document.createElement('div');
  divSection.id = 'pageContent';
  content.appendChild(divSection);
  renderSection('home')
}

render()