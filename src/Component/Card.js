import Card from 'react-bootstrap/Card'
import '../style/card.css';


const CardComponent = (props) => {
    console.log(props);
    return (
        <>
            <Card style={{ width: '11.5rem'}} onClick={props.onClick} className='cards'>
            <Card.Body>
                <Card.Title style={{paddingLeft: "17px"}}>{props.data.day}</Card.Title>
                <Card.Img variant="top" src={props.data.img} />
                <Card.Title  style={{paddingLeft: "17px"}}>{props.data.temp} <span>&#176; C</span></Card.Title>
                </Card.Body>
            </Card> 
        </>
    )

}

export default CardComponent;