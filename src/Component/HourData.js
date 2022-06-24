import { Row, Col, Carousel, Card } from 'react-bootstrap';
import '../style/hourData.css';

const HourData = ({ apiData, id }) => {

    return (
        <>
            <Row>
                <Col>
                    <Carousel>
                        {
                            apiData.forecast.forecastday[id].hour.map((data) => {
                                return (
                                    <Carousel.Item key={data.time}>

                                        <Card>
                                            <Card.Header>
                                                <Row>
                                                    <Col>
                                                        Day : {data.time}
                                                    </Col>
                                                    <Col>
                                                        <span >Temperature: </span>
                                                        <span>
                                                            {data.temp_c}</span> <span>&#176; C</span> / &nbsp;
                                                        <span>{data.temp_f} F</span>
                                                    </Col>
                                                </Row>
                                            </Card.Header>
                                            <Card.Body >
                                                <Row>
                                                    <Col>
                                                        <Card.Text >
                                                            <img src={data.condition.icon} alt='icon' />
                                                        </Card.Text>
                                                    </Col>
                                                    <Col >
                                                        <Card.Text >
                                                            <span className='header'>Condition</span>
                                                            <br />
                                                            <span>
                                                                {data.condition.text}</span>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Card.Text >
                                                            <span className='header'>Humidity </span>
                                                            <br />
                                                            <span>
                                                                {data.humidity}</span>
                                                        </Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Card.Text >
                                                            <span className='header'>Wind speed</span>
                                                            <br />
                                                            <span>
                                                                {data.wind_kph} kph</span>
                                                        </Card.Text>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                )
                            })}
                    </Carousel>
                </Col>
            </Row>
        </>
    )
}

export default HourData; 