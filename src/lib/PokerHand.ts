import Card from './Card';

class PokerHand {
    private cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    private countRanks(): { [rank: string]: number } {
        const rankCounts: { [rank: string]: number } = {};
        for (const card of this.cards) {
            rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
        }
        return rankCounts;
    }

    private countSuits(): { [suit: string]: number } {
        const suitCounts: { [suit: string]: number } = {};
        for (const card of this.cards) {
            suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
        }
        return suitCounts;
    }

    getOutcome(): string {
        const rankCounts = this.countRanks();
        const suitCounts = this.countSuits();

        const uniqueRanks = Object.keys(rankCounts).length;
        const uniqueSuits = Object.keys(suitCounts).length;

        if (uniqueRanks === 5 && uniqueSuits === 1) {
            return 'Флэш';
        }

        const pairs = Object.values(rankCounts).filter(count => count === 2).length;
        const threes = Object.values(rankCounts).filter(count => count === 3).length;

        if (threes === 1) {
            return 'Тройка';
        }

        if (pairs === 2) {
            return 'Две пары';
        }

        if (pairs === 1) {
            return 'Одна пара';
        }

        return 'Старшая карта';
    }
}

export default PokerHand;
