import React from 'react';
import { Card, Container } from 'react-bootstrap';
import * as RiIcons from 'react-icons/ri';
import * as ImIcons from 'react-icons/im'
import * as FcIcons from 'react-icons/fc'
import './Review.css';

const Review = ({ review }) => {

  const { description, name, ratings,profession,img } = review;

  return (
      <Container>
      <Card style={{ 
      backgroundImage: `url("https://media.istockphoto.com/photos/white-abstract-marble-texture-silver-grey-light-background-wave-swirl-picture-id1277592603?b=1&k=20&m=1277592603&s=170667a&w=0&h=4-uL8pdN5DRnmaKKGzCX8QQ4BTFvnTQUhsQWJuYHgBk=")` ,height:'260px',width:'300px'}} className="container cardContainer">
        <div>
        <div className="cs">
          <div>
          <div className='d-flex align-items-center justify-content-center'>
          <Card.Img variant="top" style={{width:'50px',height:'50px',borderRadius:'50%'}} src={img} className="image-revw d-flex align-items-center justify-content-center" />
          </div>
            <h2 className='text-2xl'>{name}</h2>
            <Card.Text className="flex">
              <FcIcons.FcWorkflow/>{profession}
            </Card.Text>
            </div>
        </div>
          {
            ratings === '1' && <Card.Text className="items-center justify-center flex text-yellow-400">
              <ImIcons.ImStarFull
 />
            </Card.Text>
          }
          {
            ratings === '1.5' && <Card.Text className="items-center justify-center flex text-yellow-400">
            <ImIcons.ImStarFull/>
            <ImIcons.ImStarHalf />
            </Card.Text>
          }
          {
            ratings === '2' && <Card.Text className="items-center justify-center flex text-yellow-400">
              <ImIcons.ImStarFull/>
              <ImIcons.ImStarFull/>
            </Card.Text>
          }
          {
            ratings === '2.5' && <Card.Text className="items-center justify-center flex text-yellow-400">
            <ImIcons.ImStarFull/>
            <ImIcons.ImStarFull/>
            <ImIcons.ImStarHalf />
            </Card.Text>
          }
          {
            ratings === '3' && <Card.Text className="items-center justify-center flex text-yellow-400">
              <ImIcons.ImStarFull/>
              <ImIcons.ImStarFull/>
              <ImIcons.ImStarFull/>
            </Card.Text>
          }
          {
            ratings === '3.5' && <Card.Text className="items-center justify-center flex text-yellow-400">
                <ImIcons.ImStarFull/>
                <ImIcons.ImStarFull/>
                <ImIcons.ImStarFull/>
              <ImIcons.ImStarHalf />
            </Card.Text>
          }
          {
            ratings === '4' && <Card.Text className="items-center justify-center flex text-yellow-400">
              <ImIcons.ImStarFull/>
              <ImIcons.ImStarFull/>
              <ImIcons.ImStarFull/>
              <ImIcons.ImStarFull/>
            </Card.Text>
          }
          {
            ratings === '4.5' && <Card.Text className=" items-center justify-center flex text-yellow-400">
                <ImIcons.ImStarFull/>
                <ImIcons.ImStarFull/>
                <ImIcons.ImStarFull/>
                <ImIcons.ImStarFull/>
              <ImIcons.ImStarHalf />
            </Card.Text>
          }
          {
            ratings === '5' && <Card.Text className="items-center justify-center flex text-yellow-400">
              <ImIcons.ImStarFull
 />
              <ImIcons.ImStarFull
 />
              <ImIcons.ImStarFull
 />
              <ImIcons.ImStarFull
 />
              <ImIcons.ImStarFull
 />
            </Card.Text>
          }

          <Card.Text className="text-muted">
            <RiIcons.RiDoubleQuotesL className="quote" />{description?.slice(0, 120)}...<RiIcons.RiDoubleQuotesR className="quote" />
          </Card.Text>
        </div>
      </Card>
      </Container>


  );
};

export default Review;