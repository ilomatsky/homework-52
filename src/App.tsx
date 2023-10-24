import React, {useState} from 'react';
import CardComponent from './CardComponent';
import CardDeck from './lib/CardDeck';
import PokerHand from './lib/PokerHand';
import Card from './lib/Card';
import './App.css';

const App: React.FC = () => {
  const [cards, setCards] = useState<CardComponent[]>([]);
  const cardDeck = new CardDeck();

  const dealCards = () => {
    const newCards = cardDeck.getCards(5);
    setCards(newCards);
    const pokerHand = new PokerHand(newCards.map(card => new Card(card.rank, card.suit)));
    const outcome = pokerHand.getOutcome();
    console.log('Текущая комбинация:', outcome);
  };

  return (
    <div className="App">
      <div className="playingCards faceImages">
        {cards.map((card, index) => (
          <CardComponent key={index} rank={card.rank} suit={card.suit}/>
        ))}
      </div>
      <button onClick={dealCards}>Раздать карты</button>
    </div>
  );
};

export default App;
