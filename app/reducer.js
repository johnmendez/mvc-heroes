import { combineReducers } from 'redux';

function heroes(state, action) {
  switch (action.type) {
    case 'HERO@FINDALL_COMPLETE':
      return action.heroes;
    case 'HERO@CREATE_COMPLETE':
      return [...state, action.hero];
    case 'HERO@DELETE_COMPLETE':
      return state.filter(hero => hero.id !== action.id);
    default:
      return state || [];
  }
}

function showGrid(state, action) {
  if (action.type === 'SHOW_GRID@TOGGLE') {
    if (action.force === undefined) {
      return !state;
    }

    return action.force;
  }

  return state || false;
}

export default combineReducers({
  heroes,
  showGrid
});
