// src/components/FirmFacts/FirmFacts.tsx
import React from 'react';
import FirmFactCard from '../FirmFactCard/FirmFactCard';
import './FirmFacts.scss';

interface Card {
  variant: 'default' | 'border';
  buttonText: string;
  icon: boolean;
  disabledButton?: boolean;
  text?: string;
}

const FirmFacts: React.FC = () => {
  const initialCards: Card[] = [
    { variant: 'border', buttonText: 'This is a two line button that terminates with ...', icon: true },
    { variant: 'default', buttonText: 'This is a two line button that terminates with ...', icon: true },
    { variant: 'border', buttonText: 'This is a one line button', icon: false },
    { variant: 'border', buttonText: 'This is a two line button that terminates with ...', icon: true },
    { variant: 'border', buttonText: 'This is a two line button that terminates with ...', icon: true, text: "initial" },
    { variant: 'border', buttonText: 'This is a two line button that terminates with ...', icon: true, disabledButton: true, text: "disabled" },
    { variant: 'border', buttonText: 'This is a two line button that terminates with ...', icon: true, text: "hover" },
  ];

  return (
    <div className="firmFacts-wrapper">
      <div className="firmFacts-title">
        <h2>Firm Facts</h2>
        <button className="close-button">X</button>
      </div>
      <div className="firmFacts">
        {initialCards.map((card, index) => (
          <FirmFactCard
            key={index}
            {...card}
            isTwoLine={card.buttonText.includes('...')}
          />
        ))}
      </div>
    </div>
  );
};

export default FirmFacts;
