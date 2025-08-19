import React from 'react'
import './Card.css'

interface CardProps {
    card: {
        suit: string
        rank: string
    }
    hidden?: boolean
}

const Card: React.FC<CardProps> = ({ card, hidden = false }) => {
    const cardImagePath = hidden
        ? `src/assets/cards/back.png`
        : `src/assets/cards/${card.rank || card.rank.toLowerCase()}_of_${card.suit.toLowerCase()}.png`

    return (
        <div className={`${hidden ? 'hidden-card' : 'playing-card'}`}>
            <img
                src={cardImagePath}
                alt={hidden ? 'Hidden Card' : `${card.rank} of ${card.suit}`}
                className="card-image"
            />
        </div>
    )
}

export default Card