import React, {useEffect, useState} from 'react'
import type { GameState } from './types/types.ts'
import './BlackjackGame.css'
import { startGame, hit, stand, double } from './services/gameApi'
import Player from './components/Player'
import Buttons from './components/Buttons.tsx'

const BlackjackGame: React.FC = () => {
    const [gameState, setGameState] = useState<GameState | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const newState = localStorage.getItem("blackjack")
        if (newState) setGameState(JSON.parse(newState))
    }, [])

    useEffect(() => {
        if (gameState) localStorage.setItem("blackjack", JSON.stringify(gameState))
    }, [gameState])

    const handleStart = async () => {
        setLoading(true)
        try {
            setGameState(await startGame())
        } catch (err) {
            console.log('Failed to start game')
        } finally {
            setLoading(false)
        }
    }

    const handleHit = async () => {
        setLoading(true)
        try {
            setGameState(await hit())
        } catch (err) {
            console.log('Failed to hit')
        } finally {
            setLoading(false)
        }
    }

    const handleStand = async () => {
        setLoading(true)
        try {
            setGameState(await stand())
        } catch (err) {
            console.log('Failed to stand')
        } finally {
            setLoading(false)
        }
    }

    const handleDouble = async () => {
        setLoading(true)
        try {
            setGameState(await double())
        } catch (err) {
            console.log('Failed to double')
        } finally {
            setLoading(false)
        }
    }

    const newGame = async () => {
        localStorage.removeItem("blackjack")
        await handleStart()
    }

    return (
        <div className="container">
            {!gameState ? (
                <button className="button" onClick={newGame} disabled={loading}>{'Start Game'}</button>
            ) : (
                <>
                    <div className="game-container">
                        <Player
                            cards={gameState.dealerHand.cards}
                            score={gameState.dealerHand.score}
                            hideFirstCard={gameState?.gameStatus === 'In Progress'}
                        />

                        <div className="status">Status: {gameState.gameStatus} ---- {gameState.deck.length}</div>

                        <Player
                            cards={gameState.playerHand.cards}
                            score={gameState.playerHand.score}
                            altScore={gameState.playerHand.altScore}
                        />
                    </div>


                    <Buttons
                        gameInProgress={gameState?.gameStatus === 'In Progress'}
                        onHit={handleHit}
                        onStand={handleStand}
                        onDouble={handleDouble}
                        onStartGame={handleStart}
                        loading={loading}
                        canDouble={gameState.playerHand.cards.length === 2 && gameState?.gameStatus === 'In Progress'}
                    />
                </>
            )}
        </div>
    )
}

export default BlackjackGame