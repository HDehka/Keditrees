import { Avatar, Button, Paper, Typography } from '@mui/material'

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen justify-between">
      <div className="basis-1/4">
        <Paper elevation={3}>
          <Avatar alt="Remy Sharp" src="@/app/assets/avatar.jpeg" />
          <div>Hojjat Felani</div>
          <div>Berlin, Germany</div>
          <Button>Edit profile</Button>
        </Paper>
        <Paper elevation={3}>
          <div>Wallet</div>
          <div>100</div>
          <div>exchange rate</div>
          <div>public address</div>
        </Paper>
        <Paper elevation={3}>Need help? Contact us</Paper>
      </div>
      <div className="basis-3/4">
        <div className="flex flex-row">
          <div className="basis-1/4">
            <Paper elevation={3}>Dashboard content</Paper>
          </div>
          <div className="basis-1/4">
            <Paper elevation={3}>Dashboard content</Paper>
          </div>
          <div className="basis-2/4">
            <Paper elevation={3}>Dashboard content</Paper>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/3">
            <Paper elevation={3}>Dashboard content</Paper>
          </div>
          <div className="basis-1/3">
            <Paper elevation={3}>Dashboard content</Paper>
          </div>
          <div className="basis-1/3">
            <Paper elevation={3}>Dashboard content</Paper>
          </div>
        </div>
      </div>
    </div>
  )
}
