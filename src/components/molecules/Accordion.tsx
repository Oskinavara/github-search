import { useState } from 'react';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';
import { ReactComponent as Chevron } from 'src/assets/icons/chevron-right.svg';
import Repository from 'src/components/molecules/Repository';
import { Repository as IRepository } from 'src/interfaces';

interface TriggerProps {
  text: string;
  open: boolean;
}

interface AccordionProps {
  triggerText: string;
  repositories: IRepository[];
}

const Accordion: React.FC<AccordionProps> = ({ triggerText, repositories }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <StyledAccordion>
      <Collapsible
        onOpening={toggleOpen}
        onClosing={toggleOpen}
        transitionTime={150}
        transitionCloseTime={150}
        trigger={<Trigger text={triggerText} open={open} />}
      >
        {repositories && repositories.length > 0 ? (
          repositories.map((repo) => (
            <Repository
              url={repo.html_url}
              key={repo.id}
              title={repo.name}
              description={repo.description}
              starsAmount={repo.stargazers_count}
            />
          ))
        ) : (
          <StyledText>This user has no repositories yet.</StyledText>
        )}
      </Collapsible>
    </StyledAccordion>
  );
};

const Trigger = ({ text, open }: TriggerProps) => (
  <StyledTrigger open={open} text={text}>
    <p>{text}</p>
    <Chevron />
  </StyledTrigger>
);

const StyledTrigger = styled.div<TriggerProps>`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.grayLight};
  padding: 12px 8px;
  font-family: Roboto;
  cursor: pointer;
  margin-top: 4px;

  svg {
    transition: transform 0.15s;
    transform: rotate(${({ open }) => (open ? '-90deg' : '90deg')});
  }

  p {
    font-family: 'Open Sans';
  }
`;

const StyledAccordion = styled.div`
  .Collapsible__contentInner {
    max-height: 300px;
    overflow: auto !important;
  }
`;

const StyledText = styled.p`
  font-size: 16px;
  text-align: right;
  padding: 16px;
  margin: 4px 0 4px 20px;
  padding: 12px 8px;
  background: ${({ theme }) => theme.gray};
`;

export default Accordion;
