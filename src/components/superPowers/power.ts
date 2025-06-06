import './power.css'

export function createSuperpowersSection(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'superpowers-section';

  // Фоновые деревья
  const bigTreeLeft = document.createElement('div');
  bigTreeLeft.className = 'superpowers-tree big left';

  const bigTreeRight = document.createElement('div');
  bigTreeRight.className = 'superpowers-tree big right';

  // Декоративные элементы дерева
  const woodPieceTopLeft = document.createElement('div');
  woodPieceTopLeft.className = 'wood-piece top-left';

  const woodPieceBottomRight = document.createElement('div');
  woodPieceBottomRight.className = 'wood-piece bottom-right';

  // Основной контент
  const container = document.createElement('div');
  container.className = 'superpowers-container';

  // Заголовок
  const title = document.createElement('h2');
  title.className = 'superpowers-main-title';
  title.textContent = 'У меня есть то, что важнее любых навыков:';

  // Квадратный блок с суперсилами
  const powersBox = document.createElement('div');
  powersBox.className = 'powers-box';

  const subtitle = document.createElement('h3');
  subtitle.className = 'powers-subtitle';
  subtitle.textContent = 'Мои суперсилы:';

  const powersList = document.createElement('ul');
  powersList.className = 'powers-list';

  // Список суперсил
  const powers = [
    'Скорость обучения — новые концепты схватываю буквально на лету',
    'Адаптивность — не теряюсь, когда что-то идёт не по плану',
    'Огромная страсть — код для меня не работа, а любимое хобби'
  ];

  powers.forEach(power => {
    const li = document.createElement('li');
    li.className = 'power-item';
    li.textContent = power;
    powersList.appendChild(li);
  });

  // Собираем структуру
  powersBox.append(subtitle, powersList);
  container.append(title, powersBox);
  section.append(bigTreeLeft, bigTreeRight, woodPieceTopLeft, woodPieceBottomRight, container);

  return section;
}
