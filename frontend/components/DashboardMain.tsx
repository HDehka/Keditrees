import { Paper } from '@mui/material'
import React from 'react'
import DashboardCard, { Icon } from './DashboardCard'

function DashboardMain() {
  return (
    <div className="basis-3/4 ">
      <div className="flex flex-row h-1/2 mb-5">
        <div className="basis-1/4">
          <DashboardCard
            iconName={Icon.check}
            className="dashboardCard h-1/2"
            title="Total Projects"
            value="$53,00989"
            change="12% increase from last month"
          />
          <DashboardCard
            iconName={Icon.tree}
            className="dashboardCard h-1/2"
            title="Total Trees"
            value="1500"
            change="8% increase from last month"
          />
        </div>
        <div className="basis-1/4">
          <DashboardCard
            iconName={Icon.bubble}
            className="dashboardCard h-1/2"
            title="Area Covered"
            value="25,000"
            change="10% decrease from last month"
          />
          <DashboardCard
            className="dashboardCard h-1/2"
            title="CO2 Stored"
            value="25,000"
            change="2% increase from last month"
          />
        </div>
        <div className="basis-2/4">
          <DashboardCard className="dashboardCard h-full" title="Locations" />
        </div>
      </div>
      <div className="flex flex-row h-1/2">
        <div className="basis-1/3">
          <DashboardCard
            className="dashboardCard h-1/2"
            title="Total Available Tokens"
            value="923,623,252"
            change="8% increase from last month"
          />
        </div>
        <div className="basis-1/3">
          <DashboardCard
            className="dashboardCard h-1/2"
            title="Minted Tokens"
            value="923,623,252"
            change="8% increase from last month"
          />
        </div>
        <div className="basis-1/3">
          <Paper className="dashboardCard h-1/2" elevation={3}>
            Dashboard content
          </Paper>
        </div>
      </div>
    </div>
  )
}

export default DashboardMain
