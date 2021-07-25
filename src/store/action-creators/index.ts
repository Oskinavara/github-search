import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Dispatch } from 'redux';
import { getUsers, getRepositories } from 'src/api';
import { User } from 'src/interfaces';

export const fetchUsers = (query: string) => {
  return async (dispatch: Dispatch<Action>, getState: any) => {
    dispatch({
      type: ActionType.SET_LOADING,
      payload: true,
    });
    try {
      const { data } = await getUsers(query);
      dispatch({
        type: ActionType.FETCH_USERS,
        payload: data.items,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: ActionType.SET_ERROR,
        payload: error,
      });
    }

    getState().users.users.forEach(async (user: User, index: number) => {
      try {
        const { data } = await getRepositories(user.repos_url);
        dispatch({
          type: ActionType.FETCH_REPOSITORIES,
          payload: { data, index },
        });
      } catch (error) {
        console.error(error);
        dispatch({
          type: ActionType.SET_ERROR,
          payload: error,
        });
      }
    });

    dispatch({
      type: ActionType.SET_LOADING,
      payload: false,
    });
  };
};
