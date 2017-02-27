export function createHero(name, power) {
  return {
    type: 'HERO@CREATE_COMPLETE',
    hero: { name, power, id: new Date() }
  };
}

export function toggleGrid(force) {
  if (force === undefined) {
    return { type: 'SHOW_GRID@TOGGLE' };
  }

  return { type: 'SHOW_GRID@TOGGLE', force };
}
