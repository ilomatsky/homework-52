import React from 'react';

interface CardProps extends React.PropsWithChildren {
  rank: string;
  suit: 'diams' | 'hearts' | 'clubs' | 'spades';
}

const Card: React.FC<CardProps> = ({rank, suit}) => {
  const suitsSymbols: { [key: string]: string } = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠',
  };

  return (
    <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suitsSymbols[suit]}</span>
        </span>
  );
};

export default Card;
