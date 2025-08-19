import React from 'react'
import Card from './Card'

interface IPlayer {
    cards: { suit: string, rank: string }[]
    score: number
    altScore?: number
    hideFirstCard?: boolean
}

const Player: React.FC<IPlayer> = ({ cards, score, altScore, hideFirstCard = false}) => {
    return (
        <div className="player">
            <div className="cards-container">
                {cards.map((card, index) => (
                    <Card key={index} card={card} hidden={hideFirstCard && index === 0} />
                ))}
            </div>
            <p>Score:{' '}{altScore && altScore !== score ? `${score} / ${altScore}` : score}</p>
        </div>
    )
}

export default Player