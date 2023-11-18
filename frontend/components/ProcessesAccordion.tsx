import React from 'react'
import AccordionComponent from './common/Accordion'
import { AccordionSubComponentType } from './common/AccordionSubComponent'

function ProcessesAccordion() {
  const processes: AccordionSubComponentType[] = [
    { title: 'TITLE', details: 'DETAIL' },
    { title: 'TITLE', details: 'DETAIL' },
    { title: 'TITLE', details: 'DETAIL' },
  ]
  return <AccordionComponent accordionArr={processes} />
}

export default ProcessesAccordion
