import { Component } from 'react';

interface CardProps {
    rank: string;
    suit: string;
    suitImg: string;
}

class CardComponent extends Component<CardProps> {
    render() {
        const { rank, suit , suitImg} = this.props;
        return (
            <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
                <span className="rank">{rank}</span>
                <span className="suit">{suitImg}</span>
            </span>
        );
    }
}

export default CardComponent;
