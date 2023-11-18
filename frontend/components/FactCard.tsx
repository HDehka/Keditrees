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
    <div className="flex">
      <div className="mx-5 p-2">{icon(iconName)}</div>
      <div className="flex-col">
        <Typography className="text-white text-3xl">{num}</Typography>
        <Typography className="text-white text-xl">{text}</Typography>
      </div>
    </div>
  )
}

export default FactCard
