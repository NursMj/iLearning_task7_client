import { useState, useEffect } from 'react'
import { Form, Button, Tab, Tabs } from 'react-bootstrap'
import { Alert } from '@mui/material'

function CreateRoomForm({handleSubmitSecssion}: any) {
    const [session, setSession] = useState('')
    const [key, setKey] = useState('Create game')
    const [error, setError] = useState('')
    const sessionOptions = ['555', '991', 'qwerty']

    function handleSubmit(e: any) {
        e.preventDefault()
        if (session === '') return setError('Please enter a session ID')
        setError('')
        handleSubmitSecssion(session)
    }

    function handleOnChange(e: any) {
        setError('')
        setSession(e.target.value)
    }

    useEffect(() => {
        key == 'Create game' ? setSession('') : setSession(sessionOptions[0])
    }, [key])

    return (
        <Tabs
            fill
            activeKey={key}
            onSelect={(k) => setKey(k as string)}
            defaultActiveKey="Create game"
            className="mb-3"
        >
            <Tab eventKey="Create game" title="Create game">
                <Form className='w-300 text-center' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Create game session</Form.Label>
                        {error && <Alert severity="error">{error}</Alert>}
                        <Form.Control 
                            className='mt-2'
                            type="text" 
                            placeholder="Enter session ID"
                            onChange={handleOnChange}
                        />
                        <Form.Text className="text-white">
                            Create a game session, so your friend or any one can join this game!
                        </Form.Text>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Create session
                    </Button>
                </Form>
            </Tab>
            <Tab eventKey="Join game" title="Join game">
                <Form className='w-300 text-center' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Choose session, to join the game</Form.Label>
                        <Form.Select 
                            aria-label="Default select example"
                            onChange={handleOnChange}
                        >
                            {sessionOptions.map(o=> {
                                return <option key={o} value="o">{o}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Join the game
                    </Button>
                </Form>
            </Tab>
        </Tabs>
        
    )
}

export default CreateRoomForm