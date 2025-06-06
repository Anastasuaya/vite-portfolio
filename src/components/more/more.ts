import './more.css'

export function createGallerySection(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'gallery-section';

  // Фоновый лес (аналогично предыдущим блокам)
  const forest = document.createElement('div');
  forest.className = 'gallery-forest';

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

  // Контейнер для контента
  const content = document.createElement('div');
  content.className = 'gallery-content';

  // Заголовок
  const title = document.createElement('h2');
  title.className = 'gallery-title';
  title.textContent = 'Взглянуть на что-то интересное';

  // Кнопка-свиток
  const scrollButton = document.createElement('a');
  scrollButton.className = 'scroll-button';
  scrollButton.href = 'https://t.me/srcmychannel';
  scrollButton.textContent = 'click';

  content.append(title, scrollButton);
  section.append(forest, content);

  return section;
}
