import { Typography } from '@mui/material'
import React from 'react'
import Trees from '@/icons/Trees'
import Share from '@/icons/Share'
import People from '@/icons/People'
import Pet from '@/icons/Pet'

export enum Icon {
  trees,
  share,
  pet,
  people,
}

const icon = (icon: Icon) => {
  switch (icon) {
    case Icon.trees:
      return <Trees />

    case Icon.share:
      return <Share />

    case Icon.people:
      return <People />

    case Icon.pet:
      return <Pet color="#FFC091" />

    default:
      break
  }
}

function FactCard({
  iconName,
  num,
  text,
}: {
  iconName: Icon
  num: string
  text: string
}) {
  return (
    <div>
      {icon(iconName)}
      <Typography>{num}</Typography>
      <Typography>{text}</Typography>
    </div>
  )
}

export default FactCard
