import { IReducerAction, Notifications } from './types';

const notificationsReducer = (state: Notifications, action: IReducerAction): Notifications => {
  const reducedState = { ...state };
  const { type, payload } = action;

  switch (type) {
    case 'ADD_NOTIFICATION': {
      const {
        id,
        message,
      } = payload;

      reducedState[id] = {
        message,
      };

      break;
    }
    case 'DELETE_NOTIFICATION': {
      const { id } = payload;
      if (reducedState[id]) delete reducedState[id];
      break;
    }
    default: {
      break;
    }
  }

  return reducedState;
};

export default notificationsReducer;
