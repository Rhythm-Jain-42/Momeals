import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Accordian = ({head,para}) => {
  return (
    <Accordion className='my-3'>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography style={{color:'blue', fontSize:"17px", fontWeight:'600', fontFamily:"Poppins"}}>{head}</Typography>
    </AccordionSummary>
    <AccordionDetails style={{fontFamily:"Poppins"}}>
      <Typography>
      {para}
      </Typography>
    </AccordionDetails>
  </Accordion>
  )
}
