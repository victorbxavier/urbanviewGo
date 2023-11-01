import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">UrbaNView</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Sobre nós</Nav.Link>
          <Nav.Link href="#features">Contato</Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Tópicos
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Serviços</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Noticias</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Artigos</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;