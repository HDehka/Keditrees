import {
  AccordionSummary,
  Accordion,
  Typography,
  AccordionDetails,
} from '@mui/material'
import AccordionSubComponent, {
  AccordionSubComponentType,
} from './AccordionSubComponent'

function AccordionComponent({
  accordionArr,
}: {
  accordionArr: AccordionSubComponentType[]
}) {
  return (
    <div>
      {accordionArr.map((el: AccordionSubComponentType) => (
        <AccordionSubComponent
          key={el.title}
          title={el.title}
          details={el.details}
        />
      ))}
    </div>
  )
}

export default AccordionComponent
