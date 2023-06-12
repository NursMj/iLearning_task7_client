import { Container, Row, Col } from "react-bootstrap"
import TicTacToe from '../components/TicTacToe/TicTacToe'
import Buttleship from '../components/Buttleship/Buttleship'
import Gomocu from '../components/Gomocu/Gomocu'
import Chess from '../components/Chess/Chess'

function GamePage() {
    const userName = localStorage.getItem('userName')
    const player2 = 'Waiting for him to join'
    const gameName = localStorage.getItem('game')
    const gameSession = localStorage.getItem('gameSession')
    const game = getGameComponent(gameName as string)

    function getGameComponent(gameName: string) {
        if (gameName === 'tic tac toe') return <TicTacToe />
        if (gameName === 'battleship') return <Buttleship />
        if (gameName === 'gomocu') return <Gomocu />
        if (gameName === 'chess') return <Chess />
    }
  
    return (
        <Container>
            <Row className="mt-5 justify-content-center text-center">
                <Col md={6}>
                    <h4>Game session: {gameSession}</h4>
                    <div className="mt-3 players d-flex justify-content-between gap-5">
                        <span>Player 1: {userName}</span>
                        <span>Player 2: {player2}</span>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4 justify-content-center">
                <Col md={6}>
                    {game}
                </Col>
            </Row>
        </Container>
    )
}

export default GamePage