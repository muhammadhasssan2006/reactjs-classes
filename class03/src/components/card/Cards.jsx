import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from '../card/Cards.module.css'

function Cardss() {
  return (

    <Card className={style.card   }  style={{ width: '18rem' }}>
      <Card.Img variant="top" className='style.cardimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDf0zMWywIUVUEoi7IAyTQD3NcsRAfwm_WA&s" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


     
    
  );
}

export default Cardss;