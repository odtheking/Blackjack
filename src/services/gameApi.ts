import type { GameState } from '../types/types'

const API_BASE = 'https://blackjack-backend-1-7g84.onrender.com'

export const startGame = async (): Promise<GameState> => {
    const response = await fetch(`${API_BASE}/game/start`, { method: 'POST' })
    return await response.json()
}

export const hit = async (): Promise<GameState> => {
    const response = await fetch(`${API_BASE}/game/hit`, { method: 'POST' })
    return await response.json()
}

export const stand = async (): Promise<GameState> => {
    const response = await fetch(`${API_BASE}/game/stand`, { method: 'POST'})
    return await response.json()
}

export const double = async (): Promise<GameState> => {
    const response = await fetch(`${API_BASE}/game/double`, { method: 'POST' })
    return await response.json()
}