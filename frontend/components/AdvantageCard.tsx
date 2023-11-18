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
    <Paper className="w-max" elevation={3}>
      <div className="flex flex-row">
        {icon(iconName)}
        <div>{title}</div>
      </div>
      <Divider />
      <Typography
        className="w-max"
        variant="body2"
        style={{ wordWrap: 'break-word' }}>
        {detail}
      </Typography>
    </Paper>
  )
}

export default AdvantageCard
