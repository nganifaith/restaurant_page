import './style.css';
import { headers, renderSection } from './header';

const content = document.getElementById('content');
content.classList.add('h-100')
function render() {
  content.innerHTML = '';
  content.appendChild(headers());
  const divSection = document.createElement('div');
  divSection.id = 'pageContent';
  content.appendChild(divSection);
  renderSection('home');
}

render();