import "./squareStyle.css";
import Col from "react-bootstrap/Col";

function SquareComponent(props: any) {
  if (props.isyoutube) {
    return (
      <Col className="square">
        <h2 className="square_title">{props.title}</h2>
        <div className="youtube_square_video">
          <iframe src={props.youtube_link}></iframe>
        </div>
        <div className="next_videos float-right">
          <button
            id={props.button_id}
            type="button"
            className="btn btn-warning my_button"
          >
            Find more
          </button>
        </div>
      </Col>
    );
  } else {
    return (
      <Col className="square">
        <h2 className="square_title">{props.title}</h2>
        <p className="square_body">{props.information}</p>
        <div className="next_materials float-right">
          <button
            id={props.button_id}
            type="button"
            className="btn btn-warning my_button"
          >
            Find more <i className="bi bi-book-fill"></i>
          </button>
        </div>
      </Col>
    );
  }
}

export default SquareComponent;
