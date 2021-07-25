import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Dispatch } from 'redux';
import { getUsers, getRepositories } from 'src/api';
import { State } from '../';
import { User } from 'src/interfaces';

export const fetchUsers = (query: string) => {
  return async (dispatch: Dispatch<Action>, getState: () => State) => {
    dispatch({
      type: ActionType.SET_LOADING,
      payload: true,
    });
    const { data } = await getUsers(query);
    dispatch({
      type: ActionType.FETCH_USERS,
      payload: data.items,
    });
    getState().users.users.forEach(async (user: User, index: number) => {
      const { data } = await getRepositories(user.repos_url);
      dispatch({
        type: ActionType.FETCH_REPOSITORIES,
        payload: { data, index },
      });
    });

    dispatch({
      type: ActionType.SET_LOADING,
      payload: false,
    });
  };
};

export const fetchRepositories = (url: string) => {
  return async (dispatch: Dispatch<Action>) => {
    const { data } = await getRepositories(url);
    dispatch({
      type: ActionType.FETCH_REPOSITORIES,
      payload: data,
    });
  };
};
