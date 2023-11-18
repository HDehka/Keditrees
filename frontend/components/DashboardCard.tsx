import Check from '@/icons/Check'
import Tree from '@/icons/Tree'
import Bubble from '@/icons/Bubble'
import Share2 from '@/icons/Share2'
import Flash from '@/icons/Flash'
import world from '@/app/assets/world.png'

import { Paper, Typography } from '@mui/material'
import Image from 'next/image'

export enum Icon {
  check,
  tree,
  bubble,
  share2,
  flash,
  world,
}

const icon = (icon: Icon) => {
  switch (icon) {
    case Icon.check:
      return <Check />
    case Icon.tree:
      return <Tree />
    case Icon.bubble:
      return <Bubble />
    case Icon.share2:
      return <Share2 />
    case Icon.flash:
      return <Flash />
    case Icon.world:
      return (
        <Image width={500} height={500} alt="Join The Community" src={world} />
      )

    default:
      break
  }
}

function DashboardCard({
  iconName,
  className,
  title,
  value,
  change,
}: {
  iconName?: Icon
  className: string
  title: string
  value?: string
  change?: string
}) {
  return (
    <Paper className={className} elevation={3}>
      {iconName ? icon(iconName) : null}
      <Typography className="text-sm">{title}</Typography>
      <Typography className="text-2xl mt-2">{value}</Typography>
      <Typography className="text-xs mt-2">{change}</Typography>
    </Paper>
  )
}

export default DashboardCard
