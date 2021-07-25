import styled from 'styled-components';
import { User } from 'src/interfaces';
import Accordion from 'src/components/molecules/Accordion';

interface Props {
  users: User[];
}

const SearchResults = ({ users }: Props) => {
  return users.length > 0 ? (
    <>
      {users.map((user: User) => (
        <Accordion repositories={user.repositories} key={user.id} triggerText={user.login} />
      ))}
    </>
  ) : (
    <StyledText>No users found. Please try again.</StyledText>
  );
};

const StyledText = styled.p`
  font-size: 16px;
  text-align: center;
  padding: 8px;
`;

export default SearchResults;
