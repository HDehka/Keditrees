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
          className="bg-tertiary p-8 rounded-3xl"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className="text-white text-3xl">{title}</Typography>
        </AccordionSummary>
        <Divider className="text-white" />
        <AccordionDetails className="bg-secondary rounded-3xl">
          <Typography className="text-white">{details}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionSubComponent
