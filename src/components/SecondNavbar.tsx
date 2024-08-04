import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function SecondNavbar() {
  return (
    // <Navbar className="second_navbar justify-content-center">
    //   <Container>
    //     <Nav.Link className="navbar_item float-right" href="">
    //       Something_1
    //     </Nav.Link>
    //     <Nav.Link className="navbar_item" href="">
    //       Something_2
    //     </Nav.Link>
    //     <Nav.Link className="navbar_item" href="">
    //       Something_3
    //     </Nav.Link>
    //     <Nav.Link className="navbar_item" href="">
    //       Something_4
    //     </Nav.Link>
    //     <Nav.Link className="navbar_item" href="">
    //       Something_5
    //     </Nav.Link>
    //   </Container>
    // </Navbar>
    <div className="second_navbar justify-content-center">
      <div className="navbar_item float-right">Something_1</div>
      <div className="navbar_item">Something_1</div>
      <div className="navbar_item">Something_1</div>
      <div className="navbar_item">Something_1</div>
      <div className="navbar_item">Something_1</div>
    </div>
  );
}

export default SecondNavbar;
