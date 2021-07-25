import styled from 'styled-components';

interface Props {
  type: string;
  autofocus?: boolean;
  value: string;
  placeholder: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  enterHandler: () => void;
}

const Input: React.FC<Props> = ({ type, autofocus, value, placeholder, changeHandler, enterHandler }: Props) => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      enterHandler();
    }
  };

  return (
    <StyledInput
      onKeyPress={handleKeyPress}
      onChange={changeHandler}
      type={type}
      autoFocus={autofocus}
      value={value}
      placeholder={placeholder}
    />
  );
};

export const StyledInput = styled.input`
  height: 40px;
  width: 100%;
  max-width: 360px;
  background: ${({ theme }) => theme.grayLight};
  border: 2px solid ${({ theme }) => theme.gray};
  font-size: 14px;
  padding: 0 12px;

  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.grayDark};
  }
`;

export default Input;
