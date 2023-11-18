import Pet from '@/icons/Pet'
import Wind from '@/icons/Wind'
import Cloud from '@/icons/Cloud'
import { Divider, Paper, SvgIconClasses, Typography } from '@mui/material'
import React, { ReactElement } from 'react'

export enum Icon {
  cloud,
  wind,
  pet,
}

const icon = (icon: Icon) => {
  switch (icon) {
    case Icon.cloud:
      return <Cloud />

    case Icon.wind:
      return <Wind />

    case Icon.pet:
      return <Pet color="#1BA476" />

    default:
      break
  }
}

function AdvantageCard({
  iconName,
  title,
  detail,
}: {
  iconName: Icon
  title: string
  detail: string
}) {
  return (
    <Paper className="w-11/12 p-5 bg-tertiary rounded-3xl" elevation={3}>
      <div className="flex flex-row py-5">
        {icon(iconName)}
        <div className="text-white text-xl">{title}</div>
      </div>
      <Divider className="bg-white" />
      <Typography className="py-5 text-white text-lg" variant="body2">
        {detail}
      </Typography>
    </Paper>
  )
}

export default AdvantageCard
