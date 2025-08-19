export interface Card {
    suit: string
    rank: string
}

export interface Hand {
    cards: Card[]
    score: number
    altScore?: number
}

export interface GameState {
    deck: Card[]
    playerHand: Hand
    dealerHand: Hand
    gameStatus: string
}