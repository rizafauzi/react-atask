import { ChangeEvent, useCallback } from 'react';
import { styled } from 'styled-components';

import { ReactComponent as CloseIcon } from '@assets/icons/close.icon.svg';

interface InputProps {
  value?: string;
  className?: string;
  onChange?: (newValue: string) => void;
  onDiscard?: () => void;
}

const Input = ({ value, onChange, className, onDiscard }: InputProps) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.value);
      }
    },
    [onChange]
  );

  const handleDisCard = useCallback(() => {
    if (onChange) {
      onChange('');
    }
    if (onDiscard) {
      onDiscard();
    }
  }, [onDiscard, onChange]);

  return (
    <InputWrapper>
      <input
        value={value}
        data-testid="input"
        className={className}
        onChange={handleChange}
        placeholder="Search User..."
      />
      {!!value && (
        <button className="icon" onClick={handleDisCard}>
          <CloseIcon height={20} width={20} />
        </button>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  .icon {
    right: 10px;
    position: absolute;

    &:hover {
      cursor: pointer;
    }
  }

  input {
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
  }
`;

export default Input;
