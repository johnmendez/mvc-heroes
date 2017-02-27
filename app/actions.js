export function create(hero) {
  return {
    type: 'HERO@CREATE_COMPLETE',
    hero
  };
}

export function findAll(str) {
  return {
    type: 'HERO@FINDALL_COMPLETE',
    heroes: JSON.parse(str)
  };
}

export function toggleGrid(force) {
  if (force === undefined) {
    return { type: 'SHOW_GRID@TOGGLE' };
  }

  return { type: 'SHOW_GRID@TOGGLE', force };
}
