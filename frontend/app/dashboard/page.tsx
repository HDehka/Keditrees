import DashboardMain from '@/components/DashboardMain'
import DashboardProfile from '@/components/DashboardProfile'
import { Avatar, Button, Paper, Typography } from '@mui/material'

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen justify-between">
      <DashboardProfile />
      <DashboardMain />
    </div>
  )
}
