import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import useStyles from './css';
import reducer from './reducer';
import {
  INotificationsContext,
  IReducerAction,
  Notifications as NotificationsType,
} from './types';

const initialState: NotificationsType = {};

const NotificationsContext = createContext<INotificationsContext | Record<string, unknown>>({});
export const useNotifications = (): INotificationsContext => useContext(NotificationsContext);

const Notifications: React.FC = (props) => {
  const [savingInProgress, setSavingInProgress] = useState(false); // this state prevents route transitions, but caches their attempt, shows them a message, and redirects once falsey again
  const [notifications, dispatchNotifications] = useReducer<React.Reducer<NotificationsType, IReducerAction>>(reducer, initialState);

  const { children } = props;

  const setTimedNotification = useCallback(({ id, message, duration = 5000 }) => {
    const timerID = setTimeout(() => {
      dispatchNotifications({
        type: 'DELETE_NOTIFICATION',
        payload: {
          id,
        },
      });
    }, duration);

    dispatchNotifications({
      type: 'ADD_NOTIFICATION',
      payload: {
        id,
        message,
        duration,
      },
    });

    return () => clearTimeout(timerID);
  }, []);

  const handleKeydown = useCallback((e) => {
    const { keyCode, metaKey } = e;
    if (keyCode === 83 && metaKey) {
      e.preventDefault();
      setTimedNotification({
        id: 'cmd+S',
        message: 'Hi!',
        duration: 2000,
      });
    }
  }, [setTimedNotification]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  const classes = useStyles();

  const notifs = Object.keys(notifications || {});

  return (
    <NotificationsContext.Provider
      value={{
        setTimedNotification,
        notifications,
        setSavingInProgress,
        savingInProgress,
      }}
    >
      {children}
      {Array.isArray(notifs) && notifs.length > 0 && (
        <div className={classes.notifications}>
          {notifs.map((notif, index) => {
            const notification = notifications[notif];
            const { message } = notification;
            return (
              <div
                key={index}
                className={classes.notification}
              >
                {message}
              </div>
            );
          })}
        </div>
      )}
    </NotificationsContext.Provider>
  );
};

export default Notifications;
