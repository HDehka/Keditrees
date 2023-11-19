import React from 'react'
import AccordionComponent from './common/Accordion'
import { AccordionSubComponentType } from './common/AccordionSubComponent'

function ProcessesAccordion() {
  const processes: AccordionSubComponentType[] = [
    {
      title: 'Investment',
      details:
        'Keditree is a platform that enables business entities as well as individuals to invest in tree plantations and benefit carbon credits beside the monetary incentive.',
    },
    {
      title: 'Token minting',
      details:
        'Carbon credits issued based on the amount of trees(existence) and the carbon sequestration capacity(effectiveness) are input to keditree DAO that mints tokens.',
    },
    {
      title: 'Security reserve',
      details:
        'DAO sets a fee in order to ensure there are tokens to be burnt in case of loss in value, ex: wildfire or etc.',
    },
  ]
  return <AccordionComponent accordionArr={processes} />
}

export default ProcessesAccordion
