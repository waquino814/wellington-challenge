import React from 'react';
import './Button.scss';

interface ButtonProps {
  text: string;
  isTwoLine: boolean;
  icon?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, isTwoLine, icon = false, disabled = false }) => {
  return (
    <button className={`button ${icon ? 'icon' : 'default'} ${isTwoLine ? 'two-line' : ''}`} disabled={disabled}>
      {icon && <span className="icon">🔍</span>}
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
