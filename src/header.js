import homePage from './home';
import contactPage from './contact';
import menuPage from './menu';

export const renderSection = (section) => {
  const divSection = document.getElementById('pageContent');
  divSection.innerHTML = '';
  if (section === 'home') {
    divSection.appendChild(homePage());
  } else if (section === 'contact') {
    divSection.appendChild(contactPage());
  } else if (section === 'menu') {
    divSection.appendChild(menuPage());
  }
};

export function headers() {
  const navBar = document.createElement('nav');
  navBar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');
  navBar.innerHTML = `
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#" data-target="home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" data-target="menu">Menu</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" data-target="contact">Contact</a>
      </li>
    </ul>
  </div>
  `;

  navBar.querySelectorAll('a').forEach((item) => {
    item.addEventListener('click', () => {
      renderSection(item.dataset.target);
    });
  })
  return navBar;
}