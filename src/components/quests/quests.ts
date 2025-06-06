import './quests.css'

export function createContentSection(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'content-section';

  const tree = document.createElement('div');
  tree.className = 'quest-tree';
  section.appendChild(tree);

  // Основной контейнер
  const container = document.createElement('div');
  container.className = 'quest-container';

  // Контейнер для книги и заголовка (flex)
  const titleContainer = document.createElement('div');
  titleContainer.className = 'title-container';

  // Изображение книги
  const bookImg = document.createElement('div');
  bookImg.className = 'content-img';

  // Заголовок "Квесты"
  const title = document.createElement('h2');
  title.className = 'quest-title';
  title.textContent = 'Квесты';

  // Добавляем книгу и заголовок в один flex-контейнер
  titleContainer.append(bookImg, title);

  // Блок с наградами
  const awards = document.createElement('div');
  awards.className = 'awards';

  const heading = document.createElement('h2');
  heading.className = 'award-title';
  heading.textContent = 'Попасть на стажировку в Яндекс';

  const h3 = document.createElement('h3');
  h3.className = 'award-subtitle';
  h3.textContent = 'Награды:';

  const awList = document.createElement('ul');
  awList.className = 'awList';

  const rewards = [
    '+1000 к опыту фронтенд-разработки',
    'Ментор от топ-1 IT компании',
    'Доступ к энд-гейм контенту'
  ];

  rewards.forEach(reward => {
    const li = document.createElement('li');
    li.className = 'aw-item';
    li.textContent = reward;
    awList.appendChild(li);
  });

  // Собираем структуру
  awards.append(heading, h3, awList);
  container.append(titleContainer, awards);
  section.append(container);

  return section;
}