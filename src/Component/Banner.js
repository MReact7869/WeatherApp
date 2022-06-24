import {  useState } from "react";
import CardComponent from "./Card";
import ChartExample from '../Component/ChartExample';
import { Container, Row, Col } from 'react-bootstrap';

import loading from '../Assets/load.gif';
import sun1Graph from '../Assets/sun1.jpg'
import '../style/card.css';
import '../style/banner.css'
import HourData from "./HourData";
import DetailCard from "./DetailCard";
import CurrentData from "./CurrentData";




const Banner = ({ apiData }) => {


    const [img, setImg] = useState(sun1Graph);
    const [weatherType, setWeathertype] = useState('');
    const [temp, setTemp] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [sunrise, setSunrise] = useState('');
    const [sunset, setSunset] = useState('');
    const [moonPhase, setMoonPhase] = useState('');
    const [date, setDate] = useState('')
    const [moonrise, setMoonrise] = useState('')
    const [moonset, setMoonset] = useState('')
    const [id, setId] = useState(0);
    

    const cardClick = (data, index) => {
        setId(index)
        setImg(data.day.condition.icon);
        setWeathertype(data.day.condition.text);
        setTemp(data.day.maxtemp_c);
        setIsLoading(false);
        setSunrise(data.astro.sunrise);
        setSunset(data.astro.sunset);
        setMoonPhase(data.astro.moon_phase)
        setMoonrise(data.astro.moonrise)
        setMoonset(data.astro.moonset)
        setDate(data.date);
    }



    return (
       
        <>
            <Container >
                <Row className="banner-image">
                    <Col className="col-lg-6 col-md-12 col-sm-12">
                        <DetailCard
                            loading={loading}
                            isLoading={isLoading}
                            sunset={sunset}
                            weatherType={weatherType}
                            temp={temp}
                            sunrise={sunrise}
                            moonPhase={moonPhase}
                            date={date}
                            moonrise={moonrise}
                            moonset={moonset}
                            img={img}
                        />
                    </Col>
                    <Col className="col-lg-6 col-md-12 col-sm-12">
                        {apiData && apiData.forecast && apiData.forecast.forecastday &&
                            apiData.forecast.forecastday[0] && (
                                <HourData apiData={apiData} id={id} />
                            )}
                    </Col>
                    <hr />
                    <br></br>
                    <Row >
                        <Col>
                            {
                                apiData && apiData.forecast && apiData.forecast.forecastday && (
                                    <ChartExample apiData={apiData} id={id} className="chart-area" />
                                )}
                        </Col>
                    </Row>
                </Row>

            </Container>
  
            <Container>
                <Row >
                    <Col className="cardComponent">
                        {
                            apiData && apiData.forecast && apiData.forecast.forecastday && (
                                apiData.forecast.forecastday.map((data, index) => {
                                    return (
                                        <CardComponent data={data} key={data.date} onClick={() => cardClick(data, index)} />
                                    )
                                })
                            )
                        }
                    </Col>
                    <Col>
                       <CurrentData apiData={apiData} />
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default Banner;