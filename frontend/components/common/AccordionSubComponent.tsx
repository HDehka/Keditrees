import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
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
      <Accordion className="bg-tertiary">
        <AccordionSummary
          className="bg-tertiary p-10 rounded-3xl"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className="text-white text-5xl">{title}</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails className="bg-secondary rounded-3xl">
          <Typography className="text-white">{details}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionSubComponent
