import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap';
import '../style/card.css';


const CardComponent = (props) => {

    return (
        <>
            <Row >
                <Col style={{padding: "20px"}}>
                <Card onClick={props.onClick} className='cards'>
                    <Card.Body className='body'>

                        <Card.Title style={{ paddingLeft: "10px" }}>
                            <h6>{props.data.date}</h6>
                        </Card.Title>

                        <Card.Img
                            className='cards-img'
                            variant="top"
                            src={props.data.day.condition.icon} />

                        <Card.Text style={{ paddingLeft: "10px" }}>
                            Max. {props.data.day.maxtemp_c} <span>&#176;C</span><br />
                            Min. {props.data.day.mintemp_c} <span>&#176;C</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </>
    )

}

export default CardComponent;