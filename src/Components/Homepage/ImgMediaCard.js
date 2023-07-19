import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../Homepage/ImgMediaCard.css';

import cardImg from "../Images/card-img.png";

const cardItems = [
  {
    id: 1,
    image: cardImg,
    copy: "5 ways to use your leftover food?",
    name:"Byname"
  },
  {
    id: 2,
    image: cardImg,
    copy: "How to store cooked food?",
    name:"Byname"
  },
  {
    id: 3,
    image: cardImg,
    copy: "How serious is the hunger problem in India?",
    name:"Byname"
  },
  {
    id: 4,
    image: cardImg,
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name:"Byname"
  },

  {
    id: 5,
    image: cardImg,
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name:"Byname"
  },
  {
    id: 6,
    image: cardImg,
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name:"Byname"
  },
];

function ImgMediaCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileView, setIsMobileView] = useState(true);

  const [isLoaded, setIsLoaded] = useState(true); // Add new state

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsLoaded(true); // Set isLoaded to true when isMobileView is updated
  }, [isMobileView]);

  const postsPerPage = isMobileView ? 1 : 3;
  const totalPosts = cardItems.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  const getVisibleCards = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
  
    if (isMobileView) {
      return cardItems.slice(startIndex, endIndex);
    } else {
      const isLastPage = currentPage === totalPages;
  
      if (isLastPage) {
        const remainingCards = postsPerPage - (totalPosts % postsPerPage);
        const visibleCards = cardItems.slice(startIndex).concat(cardItems.slice(0, remainingCards));
        return visibleCards;
      } else {
        return cardItems.slice(startIndex, endIndex);
      }
    }
  };
  

  const visibleCards = getVisibleCards();

  return (
    <div className='Img-card'>
      <div className="pre-btn p-2">
        <ArrowBackIosNewIcon onClick={goToPreviousPage} />
      </div>
      {isLoaded &&visibleCards.map((card) => (
            <Card className='img-cards' id="img-cards" key={card.id} sx={{ width: isMobileView ? '100%' : 300, margin: '0 30px', background: "#CFE1FF",position:"relative" }}>
          <CardMedia component="img" alt="green iguana" height="140" image={card.image} />
          <CardContent className="mb-3 "sx={{ fontFamily: 'Poppins', fontWeight: 400 }}>
            <Typography sx={{ fontWeight: 400,fontSize:24 ,
            '@media (max-width: 600px)': {
    fontSize: '15px',textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',fontWeight:'400',fontFamily: 'Arvo'
  }}}>{card.copy}</Typography>
            
          </CardContent>
        <div  className='mt-5' >
          <CardActions style={{ position: "absolute", bottom: "0px", right: "10px", }}>
            <Button size="small" sx={{ fontWeight: 400,fontSize:15 ,'@media (max-width: 600px)': {
    fontSize: '15px',textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',fontWeight:'400',fontFamily: 'Arvo'
  }}}>By name</Button>
          </CardActions>
          </div>
        </Card>
      ))}
      <div className="nxt-btn p-2">
  <ArrowForwardIosIcon onClick={goToNextPage} disabled={currentPage === totalPages} />
</div>

    </div>
  );
}

export default ImgMediaCard;
