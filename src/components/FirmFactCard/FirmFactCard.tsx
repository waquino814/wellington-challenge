// src/components/FirmFactCard/FirmFactCard.tsx
import React from 'react';
import Button from '../Button/Button';
import './FirmFactCard.scss';

interface FirmFactCardProps {
  variant: 'default' | 'border';
  buttonText: string;
  icon: boolean;
  isTwoLine: boolean;
  disabledButton?: boolean;
  text?: string;
}

const FirmFactCard: React.FC<FirmFactCardProps> = ({ text, variant, buttonText, icon, isTwoLine, disabledButton }) => {
    console.log('disabledButton', disabledButton);
  return (
    <div className={`firmFactCard ${variant}`}>
      <div className="card-content">
        <Button text={buttonText} icon={icon} isTwoLine={isTwoLine} disabled={disabledButton}/>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FirmFactCard;
