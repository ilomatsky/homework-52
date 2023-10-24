import Card from './Card';

class CardDeck {
  private cards: Card[];

  constructor() {
    this.cards = [];
    for (const suit of ['diams', 'hearts', 'clubs', 'spades']) {
      for (const rank of ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']) {
        const card = new Card(rank, suit);
        this.cards.push(card);
      }
    }
  }

  public getCard(): Card {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(randomIndex, 1)[0];
  }

  public getCards(howMany: number): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      const card = this.getCard();
      cards.push(card);
    }
    return cards;
  }
}

export default CardDeck;
