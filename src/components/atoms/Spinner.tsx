import styled from 'styled-components';

const Spinner = () => (
  <StyledSpinner viewBox='0 0 50 50'>
    <circle className='path' cx='25' cy='25' r='20' fill='none' strokeWidth='4' />
  </StyledSpinner>
);

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 36px;
  height: 36px;
  margin: 0 auto;
  display: block;

  & .path {
    stroke: ${({ theme }) => theme.primary};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;
