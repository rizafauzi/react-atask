import { ChangeEvent, useCallback } from 'react';
import { styled } from 'styled-components';

interface InputProps {
  value?: string;
  className?: string;
  onChange?: (newValue: string) => void;
}

const Input = ({ value, onChange, className }: InputProps) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.value);
      }
    },
    [onChange]
  );

  return (
    <InputWrapper
      value={value}
      data-testid="input"
      className={className}
      onChange={handleChange}
      placeholder="Search User..."
    />
  );
};

const InputWrapper = styled.input`
  border: none;
  outline: none;
  padding: 6px 12px;
  border-radius: 6px;
  border: solid 0.5px #00000052;
  outline: solid 0px transparent;
  transition: all 0.2s ease-out;

  &:hover {
    outline: solid 3px #0000001e;
  }

  &:focus {
    border: solid 0.5px #000000b3;
  }
`;

export default Input;
