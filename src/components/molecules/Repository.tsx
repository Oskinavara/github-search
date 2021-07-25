import { ReactComponent as Star } from 'src/assets/icons/star.svg';
import styled from 'styled-components';

interface Props {
  title: string;
  description: string;
  starsAmount: number;
  url: string;
}

const Repository = ({ title, description, starsAmount, url }: Props) => {
  return (
    <StyledRepository target='_blank' href={url}>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </div>
      <StyledStars>
        <span>{starsAmount}</span> <Star />
      </StyledStars>
    </StyledRepository>
  );
};

const StyledRepository = styled.a`
  color: black;
  text-decoration: none;
  display: block;
  margin: 4px 0 4px 20px;
  display: flex;
  justify-content: space-between;
  padding: 12px 8px;
  background: ${({ theme }) => theme.gray};

  svg {
    max-width: 16px;
    max-height: 16px;
  }
`;

const StyledTitle = styled.h4`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
`;

const StyledDescription = styled.p`
  font-size: 14px;
  line-height: 16px;
`;

const StyledStars = styled.div`
  display: flex;
  line-height: 16px;

  span {
    margin-top: 1px;
    font-weight: 700;
  }
  svg {
    margin-left: 4px;
  }
`;

export default Repository;
