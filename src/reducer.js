import { fromJS } from 'immutable';

export const types = {
  UPDATE_STATE: 'UPDATE_STATE',
};

export const Actions = {
  updateState: change => ({ type: types.UPDATE_STATE, change }),
};

const updateState = (state, change) => state.updateIn(change.key, () => change.value);

export const initialState = fromJS({
  spokenWords: 'WElCOME! TO GET MY ATTENTION, say the keyword "Hannah" followed by a command',
});

export default function (state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_STATE: { return updateState(state, action.change); }
    default: { return state; }
  }
}