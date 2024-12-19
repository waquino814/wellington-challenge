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
  // Data for cards, defining variant, text, and icon visibility
  const cards: Card[] = [
    { variant: 'border', buttonText: 'This is a two line button that terminates with ...', icon: true },
    { variant: 'default', buttonText: 'This is a two line button that terminates with ...', icon: true },
    { variant: 'border', buttonText: 'This is a one line button', icon: false },
    { variant: 'border', buttonText: 'This is a two line button that terminates with ...', icon: true },
    { variant: 'border', buttonText: 'This is a two line button that terminates with ...', icon: true, text:"inital" },
    { variant: 'border', buttonText: 'This is a two line button that terminates with ...', icon: true, disabledButton: true , text:"disabled" },
    { variant: 'border', buttonText: 'This is a two line button that terminates with ...', icon: true, text:"hover" },
  ];

  return (
    <div className="firmFacts-wrapper">
      <div className="firmFacts-title">
        <h2>Firm Facts</h2>
        <button className="close-button">X</button>
      </div>
      <div className="firmFacts">
        {cards.map((card, index) => (
          <FirmFactCard
            key={index}
            variant={card.variant}
            buttonText={card.buttonText}
            icon={card.icon}
            disabledButton={card.disabledButton}
            text={card.text}
            isTwoLine={card.buttonText.includes('...')}
          />
        ))}
      </div>
    </div>
  );
};

export default FirmFacts;
