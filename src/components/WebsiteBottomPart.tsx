import SquareComponent from "./SquareComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function WebsiteBottomPart() {
  return (
    <Container className="bottom-part">
      <Row>
        <div className="top_of fw-bold">
          <span>
            The top of sales !!! <i class="bi bi-fire"></i>
          </span>
        </div>
      </Row>
      <Row>
        <SquareComponent
          title="Fishing Advice"
          information="Information about Square 1."
          isyoutube={false}
          youtube_link="https://www.youtube.com/embed/eI4an8aSsgw"
          button_id="fishing_advice_button"
        />

        <SquareComponent
          title="How to Catch"
          information="Information about Square 2."
          isyoutube={false}
          youtube_link="https://www.youtube.com/embed/MYaufaB9tNw"
          button_id="how_to_catch_button"
        />

        <SquareComponent
          title="Destinations"
          information="Information about Square 5."
          isyoutube={false}
          youtube_link=""
        />
      </Row>
    </Container>
  );
}

export default WebsiteBottomPart;
