import { Container, Navbar, Button } from "react-bootstrap"
import { useNavigate, Link } from "react-router-dom"
import AccountBoxIcon from '@mui/icons-material/AccountBox'

function Header({isLogedIn, setIsLogedIn}:any) {
  const navigate = useNavigate()
  const userName = localStorage.getItem('userName')

  function logOut(): any {
    localStorage.clear()
    setIsLogedIn(false)
    navigate('/')
  }

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="text-white text-decoration-none" to="/home"><h3>Games</h3></Link>
          </Navbar.Brand>
          {isLogedIn && (
            <div className="d-flex align-items-center">
              <div className="me-4 d-flex align-items-center">
                <AccountBoxIcon className="me-1" /> {userName}
              </div>
              <Button variant='secondary' onClick={logOut}>Log out</Button>
            </div>
          )}
        </Container>
      </Navbar>
  )
}

export default Header