import { Action } from '../actions';
import { ActionType } from '../action-types';
import { User } from 'src/interfaces';

export interface State {
  error: string;
  loading: boolean;
  users: User[];
}

const initialState: State = { loading: false, users: [], error: '' };

const usersReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_USERS:
      return { ...state, users: action.payload };
    case ActionType.SET_LOADING:
      return { ...state, loading: action.payload };
    case ActionType.FETCH_REPOSITORIES:
      return {
        ...state,
        users: state.users.map((user, userIndex) => {
          if (action.payload.index === userIndex) {
            return {
              ...user,
              repositories: action.payload.data,
            };
          } else return user;
        }),
      };
    case ActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
