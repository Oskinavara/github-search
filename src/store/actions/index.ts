import { ActionType } from '../action-types';
import { User } from 'src/interfaces';

interface FetchUsersAction {
  type: ActionType.FETCH_USERS;
  payload: User[];
}

interface SetLoadingAction {
  type: ActionType.SET_LOADING;
  payload: boolean;
}

interface FetchRepositoriesAction {
  type: ActionType.FETCH_REPOSITORIES;
  payload: any;
}

export type Action = FetchUsersAction | SetLoadingAction | FetchRepositoriesAction;
