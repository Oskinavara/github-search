import styled from 'styled-components';

interface Props {
  disabled: boolean;
  children: React.ReactNode;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ children, clickHandler, disabled }: Props) => {
  return (
    <StyledButton disabled={disabled} onClick={clickHandler}>
      {children}
    </StyledButton>
  );
};

export const StyledButton = styled.button`
  color: white;
  height: 40px;
  width: 100%;
  max-width: 360px;
  background: ${({ disabled, theme }) => (disabled ? theme.grayDark : theme.primary)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:focus,
  &:active {
    border: 2px solid ${({ theme }) => theme.secondary};
  }
`;

export default Button;
