import Check from '@/icons/Check'
import Tree from '@/icons/Tree'
import Bubble from '@/icons/Bubble'
import { Paper, Typography } from '@mui/material'

export enum Icon {
  check,
  tree,
  bubble,
}

const icon = (icon: Icon) => {
  switch (icon) {
    case Icon.check:
      return <Check />
    case Icon.tree:
      return <Tree />
    case Icon.bubble:
      return <Bubble />

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
  iconName: Icon
  className: string
  title: string
  value?: string
  change?: string
}) {
  return (
    <Paper className={className} elevation={3}>
      {icon(iconName)}
      <Typography className="text-sm">{title}</Typography>
      <Typography className="text-2xl mt-2">{value}</Typography>
      <Typography className="text-xs mt-2">{change}</Typography>
    </Paper>
  )
}

export default DashboardCard
