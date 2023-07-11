import { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';

const Button = ({
  children,
  className,
  onClick,
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <WrapperButton data-testid="button" onClick={onClick} className={className}>
      {children}
    </WrapperButton>
  );
};

const WrapperButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-out;
  outline: solid 0px transparent;
  background: #008f44;
  border-radius: 8px;
  padding: 8px 12px;

  &:hover {
    outline: solid 4px #0000001e;
  }
`;

export default Button;
