import './abtMe.css'

export function createAboutSection(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'about-section';

  // Фоновый лес
  const forest = document.createElement('div');
  forest.className = 'about-forest';

  // Добавляем деревья (2 больших и 9 маленьких)
  for (let i = 0; i < 2; i++) {
    const tree = document.createElement('div');
    tree.className = 'forest-tree original';
    forest.appendChild(tree);
  }

  for (let i = 0; i < 9; i++) {
    const tree = document.createElement('div');
    tree.className = 'forest-tree small';
    forest.appendChild(tree);
  }
  
  // Изображение эльфийки справа
  const elf = document.createElement('div');
  elf.className = 'about-elf';
  // Текстовый блок
  const textBlock = document.createElement('div');
  textBlock.className = 'about-text';

  const title = document.createElement('h1');
  title.className = 'about-title';
  title.textContent = 'Я — начинающая разработчица с горящими глазами';

  const subtitle = document.createElement('h2');
  subtitle.className = 'about-subtitle';
  subtitle.textContent = 'Мой JS — это база + Vue.js на уровне пет-проектов';

  const paragraph = document.createElement('p');
  paragraph.className = 'about-paragraph';
  paragraph.textContent = 'Портфолио скромное, но сделано с душой';

  textBlock.append(title, subtitle, paragraph);

  section.append(forest, textBlock, elf);

  return section;
}
