export type Notifications = {
  [key: string]: {
    message: string
  }
}

export interface INotificationsContext {
  setTimedNotification?: (IReducerPayload) => void,
  notifications?: Notifications,
  setSavingInProgress?: () => void,
  savingInProgress?: boolean
}

export interface IReducerPayload {
  id: string,
  message?: string,
  duration?: number
}

export interface IReducerAction {
  type: 'DELETE_NOTIFICATION' | 'ADD_NOTIFICATION';
  payload: IReducerPayload
}
