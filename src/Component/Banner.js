import {useState } from "react";
import CardComponent from "./Card";
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import sun from '../Assets/sun.jpg';
import high from '../Assets/high.png';
import cloudy from '../Assets/cloudy.jpg';
import normal from '../Assets/normal.png';
import rainy from '../Assets/rainy.jpg';

import sunGraph from '../Assets/sunGraph.png';
import highGraph from '../Assets/highGraph.jpg';
import normalGraph from '../Assets/normalGraph.gif';
import cloudyGraph from '../Assets/cloudyGraph.jpg';
import rainyGraph from '../Assets/rainyGraph.png';
import normal1Graph from '../Assets/normal1graph.png';
import sun1Graph from '../Assets/sun1.jpg'
import '../style/card.css';
import '../style/banner.css'

const cardData = [
    { id: 0, day: "Monday", temp: 37 , type: "Sunny", img: sun, graph: sun1Graph },
    { id: 1, day: "Tuesday", temp: 40 , type: "Sunny (heatwave)", img: high, graph: highGraph },
    { id: 2, day: "Wednesday", temp: 35, type: "Sunny", img: sun, graph: sunGraph },
    { id: 3, day: "Thursday", temp: 29 , type: "Sunny and clear", img: normal, graph: normal1Graph },
    { id: 4, day: "Friday", temp: 24 , type: "Sunny and clear", img: normal, graph: normalGraph },
    { id: 5, day: "Saturday", temp: 21, type: "Cloudy", img: cloudy, graph: cloudyGraph },
    { id: 6, day: "Sunday", temp: 18 , type: "Rainy", img: rainy, graph: rainyGraph },
];

const Banner = () => {
    const [img, setImg] = useState(sun1Graph);
    const [day, setDay] = useState("Monday");
    const [weatherType, setWeathertype] = useState("Sunny");
    const [temp, setTemp] = useState(37)

    const cardClick = (data) => {
        setImg(data.graph);
        setDay(data.day);
        setWeathertype(data.type);
        setTemp(data.temp);
    }


    return (
        <>
            <br />
            <Container>
                <Row>
                    <Col>
                        <h2><Badge bg="primary">
                            {day} : {weatherType} weather.
                        </Badge>
                        </h2>
                    </Col>
                    <Col>
                        <h2><Badge bg="primary">
                         Tempreture : {temp} <span>&#176; C</span>
                        </Badge>
                        </h2>
                    </Col>

                </Row>
            </Container>

            <Container>
                <Row className="banner-image">
                    <Image
                        className="img"
                        src={img} />
                </Row>
            </Container>
            <br />
            <Container>
                <Row>
                    {
                        cardData.map((data) => {
                            return (
                                <CardComponent data={data} onClick={() => cardClick(data)} />

                            )
                        })

                    }
                </Row>
            </Container>


        </>
    )
}

export default Banner;