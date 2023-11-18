'use client'
import earth from '@/app/assets/login-earth.png'
import { Button, Dialog, Slide } from '@mui/material'
import Image from 'next/image'
import { Fragment, forwardRef, useState } from 'react'
import Logo from '@/app/assets/logo.png'
import { TransitionProps } from '@mui/material/transitions'
import LoginDialog from './LoginDialog'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

function Topbar() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="flex flex-row p-10">
      <div className="basis-1/4">
        <Image width={50} height={50} alt="Logo" src={Logo} />
      </div>
      <div className="basis-1/2">
        <Button className="btn">Home</Button>
        <Button className="btn">Projects</Button>
        <Button className="btn">Blog</Button>
        <Button className="btn">Developers</Button>
        <Button className="btn">About us</Button>
      </div>
      <div className="basis-1/4">
        <Fragment>
          <Button className="btn" variant="outlined" onClick={handleClickOpen}>
            Connect
          </Button>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}>
            <LoginDialog handleClose={handleClose} />
          </Dialog>
        </Fragment>
      </div>
    </div>
  )
}

export default Topbar
