import Card from './Card';

class CardDeck {
    private deck: Card[];

    constructor() {
        this.deck = [];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['diams', 'hearts', 'clubs', 'spades'];

        suits.forEach((suit) => {
            ranks.forEach((rank) => {
                this.deck.push(new Card(rank, suit));
            });
        });
    }

    public getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.deck.length);
        const card = this.deck.splice(randomIndex, 1)[0];
        return card;
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
