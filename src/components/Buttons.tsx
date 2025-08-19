import React from 'react'

interface IButtons {
    gameInProgress: boolean
    onHit: () => void
    onStand: () => void
    onDouble: () => void
    onStartGame: () => void
    loading: boolean
    canDouble: boolean
}

const Buttons: React.FC<IButtons> =
    ({gameInProgress, onHit, onStand, onDouble, onStartGame, loading, canDouble }) => {
    if (gameInProgress) {
        return (
            <div className="buttons">
                <button className="button" onClick={onHit} disabled={loading}>{'Hit'}</button>
                {canDouble && (<button className="button" onClick={onDouble} disabled={loading}>{'Double'}</button>)}
                <button className="button" onClick={onStand} disabled={loading}>{'Stand'}</button>
            </div>
        )
    } else {
        return (
            <div className="buttons">
                <button className="button" onClick={onStartGame} disabled={loading}>{'New Game'}</button>
            </div>
        )
    }
}

export default Buttons