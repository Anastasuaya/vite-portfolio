import './hero.css'

 export function createHero(): HTMLElement {
  const hero = document.createElement('section');
  hero.className = 'hero';

  // Контейнер для фоновых изображений
  const forest = document.createElement('div');
  forest.className = 'forest';

  // Добавляем фоновые изображения
  for (let i = 0; i < 2; i++) {
    const bgImg = document.createElement('div');
    bgImg.className = 'forest-image original';
    forest.appendChild(bgImg);
  }

  for (let i = 0; i < 9; i++) {
    const bgImg = document.createElement('div');
    bgImg.className = 'forest-image small dark';
    forest.appendChild(bgImg);
  }

  // Основной контейнер для контента и эльфа
  const contentContainer = document.createElement('div');
  contentContainer.className = 'content-container';

  // Изображение эльфа
  const elf = document.createElement('div');
  elf.className = 'hero-elf';

  // Контент баннера
  const content = document.createElement('div');
  content.className = 'hero-content';
  content.innerHTML = `<h1>
    <span class="type-line">Привет!</span>
    <span class="type-line">Меня зовут Настя,</span>
    <span class="type-line">я веб-разработчица</span>
  </h1>`;

  contentContainer.append(elf, content);
  hero.append(forest, contentContainer);
  return hero;
} 