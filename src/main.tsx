import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BlackjackGame from './BlackjackGame.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BlackjackGame />
    </StrictMode>,
)