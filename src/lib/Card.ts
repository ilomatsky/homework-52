class Card {
    public rank: string;
    public suit: string;
    public suitImg: string;

    constructor(rank: string, suit: string, suitImg: string) {
        this.rank = rank;
        this.suit = suit;
        this.suitImg = suitImg;
    }
}

export default Card;
