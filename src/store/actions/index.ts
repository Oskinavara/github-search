import { ActionType } from '../action-types';
import { User, Repository } from 'src/interfaces';

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
  payload: { data: Repository; index: number };
}

interface SetErrorAction {
  type: ActionType.SET_ERROR;
  payload: Error;
}

export type Action = FetchUsersAction | SetLoadingAction | FetchRepositoriesAction | SetErrorAction;
