import './header.css';

export function createHeader(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'header';
  
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a href="https://github.com/Anastasuaya" 
       target="_blank" 
       rel="noopener noreferrer"
       class="github-link">
      github
    </a>
  `;
  
  // Для дебага добавим лог при клике
  const link = nav.querySelector('a')!;
  link.addEventListener('click', (e) => {
    console.log('Click on GitHub link');
  });
  
  header.append(nav);
  return header;
}