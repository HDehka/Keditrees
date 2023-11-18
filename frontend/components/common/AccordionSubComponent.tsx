import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export type AccordionSubComponentType = {
  title: string
  details: string
}

function AccordionSubComponent({ title, details }: AccordionSubComponentType) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{details}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionSubComponent
