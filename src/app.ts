import { createHeader } from './components/header/header';
import { createHero } from './components/hero/hero';
import { createInventory } from './components/inventory/inventory';
import { createGallerySection } from './components/more/more';
import { createAboutSection } from './components/abtMe/abtMe';
import { createSuperpowersSection } from './components/superPowers/power';
import { createContentSection } from './components/quests/quests';

export function createApp(): DocumentFragment {
  const fragment = document.createDocumentFragment();
  
  fragment.append(
    createHeader(),
    createHero(),
    createInventory(),
    createContentSection(),
    createAboutSection(),
    createSuperpowersSection(),
    createGallerySection()
  );
  
  return fragment;
}