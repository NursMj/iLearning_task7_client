import { useState } from 'react'
import { Container, Row, Col, Card, Modal } from "react-bootstrap"
import tttPath from '../assets/ttt.png'
import bsPath from '../assets/bs.png'
import gPath from '../assets/g.png'
import cPath from '../assets/c.png'
import { Card as mCard } from '@mui/material'
import { styled } from '@mui/system'
import { useNavigate } from "react-router-dom"
import CreateRoomForm from '../components/CreateRoomForm'

const HoverScaleCard = styled(mCard)`
  margin-bottom: 2rem;
  cursor: pointer;
  transition: transform 0.3s;
  background: inherit;
  &:hover {
    transform: scale(1.1);
  }
`;

function HomePage() {
  const games = [
    {title: 'tic tac toe', img: tttPath },
    {title: 'battleship', img: bsPath },
    {title: 'gomocu', img: gPath },
    {title: 'chess', img: cPath },
  ]
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  function handleClose() {setShow(false)}
  function handleShow() {setShow(true)}

  function goToGamePage() {
    navigate('/game')
  }

  function storeGameSession(gameSession: string) {
    localStorage.setItem('gameSession', gameSession)
  }

  function storeGame(game: string) {
    localStorage.setItem('game', game)
  }

  function handleClickOnGameTab(game: string) {
    storeGame(game)
    handleShow()
  }

  function handleSubmitSecssion(session: string) {
    storeGameSession(session)
    handleClose()
    goToGamePage()
  }

  return (
    <Container className="mt-5 mb-5">
      <Modal show={show}>
        <Modal.Body className='bg-dark'>
          <CreateRoomForm 
            handleSubmitSecssion={handleSubmitSecssion}
          />
        </Modal.Body>
      </Modal>
      <Row>
        {games.map(g => {
          return (
            <Col key={g.title} xs={6} md={3}>
              <HoverScaleCard onClick={()=>handleClickOnGameTab(g.title)}>
                <Card bg='dark' className="text-white w-100">
                  <div className="p-3 pb-1">
                    <Card.Img variant="top" src={g.img} />
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title>{g.title.toUpperCase()}</Card.Title>
                  </Card.Body>
                </Card>
              </HoverScaleCard>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default HomePage