import {  Row, Col, Image, Card } from 'react-bootstrap';

const DetailCard = ({ loading, isLoading, weatherType, sunset, sunrise, temp, moonPhase, date, moonrise, moonset, img }) => {
    return (
        <>

            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            Temperature : &nbsp;
                            {isLoading &&
                                <img src={loading} style={{ width: "25px", height: "25px" }} alt='load'></img>}
                            {temp}
                            <span>&#176; C</span>
                        </Col>
                        <Col>
                            Date : &nbsp;
                            {isLoading &&
                                <img src={loading} style={{ width: "25px", height: "25px" }} alt='load'></img>}
                            {date}
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>

                                Weather: &nbsp;
                                {isLoading &&
                                    <img src={loading} style={{ width: "25px", height: "25px" }} alt='load'></img>}
                                {weatherType}

                            </Card.Title>
                        </Col>
                        <Col>
                          
                                <Image
                                    className='detail-img'
                                    src={isLoading ? loading : img} alt='load'/>
                          
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text>


                                Sunrise: &nbsp;
                                {isLoading &&
                                    <img src={loading} style={{ width: "25px", height: "25px" }} alt='load'></img>
                                }
                                {sunrise}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>
                                Sunset: &nbsp;
                                {isLoading &&
                                    <img src={loading} style={{ width: "25px", height: "25px" }} alt='load'></img>
                                }
                                {sunset}

                            </Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text>


                                Moonrise: &nbsp;
                                {isLoading &&
                                    <img src={loading} style={{ width: "25px", height: "25px" }} alt='load'></img>
                                }
                                {moonrise}
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>
                                Moonset: &nbsp;
                                {isLoading &&
                                    <img src={loading} style={{ width: "25px", height: "25px" }} alt='load'></img>
                                }
                                {moonset}

                            </Card.Text>
                        </Col>
                    </Row>
                    {/* <Card.Text>
                        Moon phase: &nbsp;
                        {isLoading &&
                            <img src={loading} style={{ width: "25px", height: "25px" }}></img>
                        }
                        {moonPhase}
                    </Card.Text> */}

                </Card.Body>
            </Card>

            {/* <Row class="d-flex flex-column">
                <Col>
                    <h2>
                        <Badge bg="warning" text="dark">
                            Temperature : &nbsp;
                            {isLoading &&
                                <img src={loading} style={{ width: "25px", height: "25px" }}></img>}

                            {temp} <span>&#176; C</span>
                        </Badge>
                    </h2>
                </Col>

                <Col>
                    <h2>
                        <Badge bg="warning" text="dark">
                            Sunrise: &nbsp;
                            {isLoading &&
                                <img src={loading} style={{ width: "25px", height: "25px" }}></img>
                            }
                            {sunrise}
                        </Badge>
                    </h2>
                </Col>


                <Col>
                    <h2>
                        <Badge bg="warning" text="dark">
                            Sunset: &nbsp;
                            {isLoading &&
                                <img src={loading} style={{ width: "25px", height: "25px" }}></img>
                            }
                            {sunset}
                        </Badge>
                    </h2>
                </Col>
                <Col>
                    <h2>
                        <Badge bg="warning" text="dark">
                            Weather: &nbsp;
                            {isLoading &&
                                <img src={loading} style={{ width: "25px", height: "25px" }}></img>
                            }
                            {weatherType}
                        </Badge>
                    </h2>
                </Col>

            </Row> */}

        </>
    )
}
export default DetailCard;