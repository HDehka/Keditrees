import Logo from '@/app/assets/logo.png'
import { Avatar, Button, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function DashboardProfile() {
  return (
    <div id="profile" className="basis-1/4">
      <Paper className="dashboardCard" elevation={3}>
        <Avatar alt="Profile avatar" src="@/app/assets/avatar.jpeg" />
        <div>Hojjat Felani</div>
        <div>Berlin, Germany</div>
        <Button>Edit profile</Button>
      </Paper>
      <Paper className="dashboardCard" elevation={3}>
        <div className="flex flex-row">
          <Image src={Logo} alt="logo" width={30} height={30} />
          <Typography className="text-xl ml-3">Wallet</Typography>
        </div>
        <div className="my-10 flex flex-col justify-center items-center">
          <div className="text-2xl">100</div>
          <div className="text-xs">EXCHANGE RATE</div>
        </div>
        <div>PUBLIC ADDRESS</div>
      </Paper>
      <Button>Need help? Contact us</Button>
    </div>
  )
}

export default DashboardProfile
