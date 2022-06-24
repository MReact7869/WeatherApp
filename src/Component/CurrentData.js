import { Container, Row, Col, Card} from 'react-bootstrap';
import '../style/hourData.css'

const CurrentData = ({apiData}) => {
    return (
        <>
            {
                apiData && apiData.current && apiData.current.temp_c && (
                    <Container>
                        <Row>
                            <Col style={{padding: "20px"}}>
                                <Card style={{ width: '20rem' }}>

                                    <Card.Body>
                                        <Card.Title>
                                            Current Temperature :   &nbsp;
                                            {apiData.current.temp_c} <span>&#176; C</span>
                                            <hr />
                                        </Card.Title>                                     
                                        <Card.Text className='header'>
                                           {apiData.current.condition.text}
                                        </Card.Text>
                                        <Card.Img variant="top" src={apiData.current.condition.icon}
                                        style={{width: "70px",}}
                                        />

                                       
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                )}
        </>
    )
}

export default CurrentData;