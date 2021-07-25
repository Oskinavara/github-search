import { useState } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { actionCreators } from './store';
import { State as UsersReducerState } from 'src/store/reducers/usersReducer';
import Button, { StyledButton } from 'src/components/atoms/Button';
import Input, { StyledInput } from 'src/components/atoms/Input';
import Spinner from 'src/components/atoms/Spinner';
import SearchResults from 'src/components/organisms/SearchResults';

const App = () => {
  const dispatch = useDispatch();
  const { fetchUsers } = bindActionCreators(actionCreators, dispatch);
  const { users, loading, error } = useSelector((state: { users: UsersReducerState }) => state.users);
  const [searchTerm, setSearchTerm] = useState('');
  const [firstSearch, setFirstSearch] = useState(true);

  const search = () => {
    setFirstSearch(false);
    fetchUsers(searchTerm);
  };

  const Results = () => {
    if (firstSearch) {
      return '';
    } else return loading ? <Spinner /> : <SearchResults users={users}></SearchResults>;
  };

  return (
    <StyledApp>
      <Input
        placeholder='Enter username'
        type='search'
        autofocus
        value={searchTerm}
        changeHandler={(event) => setSearchTerm(event.target.value)}
        enterHandler={search}
      />
      <Button disabled={!searchTerm} clickHandler={search}>
        Search
      </Button>
      {error ? (
        <StyledError>{'Something went wrong. Please try again or contact me if the problem persists.'}</StyledError>
      ) : (
        Results()
      )}
    </StyledApp>
  );
};

const StyledApp = styled.div`
  max-width: 360px;
  margin: 0 auto;
  margin-top: 16px;
  padding: 0 8px;

  ${StyledInput} {
    margin-bottom: 16px;
  }

  ${StyledButton} {
    margin-bottom: 4px;
  }
`;

const StyledError = styled.div`
  color: #ee3f48;
  font-size: 14px;
  line-height: 16px;
  padding-top: 8px;
`;

export default App;
