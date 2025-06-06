import './inventory.css'

export function createInventory(): HTMLElement {
  const inventory = document.createElement('div')
  inventory.className = 'inventory'

  const title = document.createElement('h2')
  title.className = 'inventory-title'
  title.textContent = 'Мой инвентарь'

  const gridContainer = document.createElement('div');
  gridContainer.className = 'inventory-container';

  const grid = document.createElement('div')
  grid.className = 'grid-container'

  const inventoryItems = [
    'html', 'css', 'ts',
    'js', 'vue', 'kaboom',
    'coin', 'candy', 'bow',
    'cookie', 'coins', '' // Последний слот пустой
  ];

  for (let i = 0; i < 18; i++) {
    const item = document.createElement('div');
    item.className = 'inventory-item';
    grid.appendChild(item);

    if (inventoryItems[i]) {
      // Добавляем изображение для непустых слотов
      const img = document.createElement('div');
      img.className = `item-img ${inventoryItems[i]}`;
      item.appendChild(img);
    }

    grid.appendChild(item);
  }

  const leftTree = document.createElement('div');
  leftTree.className = 'inventory-tree left';

  // Добавляем правое дерево
  const rightTree = document.createElement('div');
  rightTree.className = 'inventory-tree right';

  gridContainer.append(leftTree, grid, rightTree);
  inventory.append(title, gridContainer);
  return inventory;
}