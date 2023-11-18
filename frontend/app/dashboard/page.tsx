import { Paper } from '@mui/material'

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen justify-between">
      <div className="basis-1/4">
        <Paper elevation={3}>Profile</Paper>
        <Paper elevation={3}>Wallet</Paper>
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
