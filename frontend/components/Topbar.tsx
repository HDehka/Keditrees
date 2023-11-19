'use client'
import earth from '@/app/assets/login-earth.png'
import { Button, Dialog, Slide } from '@mui/material'
import Image from 'next/image'
import { Fragment, forwardRef, useContext, useEffect, useState } from 'react'
import Logo from '@/app/assets/logo.png'
import { TransitionProps } from '@mui/material/transitions'
import LoginDialog from './LoginDialog'
import Link from 'next/link'
import { UserContext } from '@/contexts/UserContext'
import { useRouter } from 'next/navigation'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

function Topbar() {
  const router = useRouter()
  const userContext = useContext(UserContext)
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
        <Link href="/">
          <Image width={50} height={50} alt="Logo" src={Logo} />
        </Link>
      </div>
      <div className="basis-1/2">
        <Link href="/">
          <Button className="btn">Home</Button>
        </Link>
        <Button className="btn">Projects</Button>
        <Button className="btn">Blog</Button>
        <Button className="btn">Developers</Button>
        <Button className="btn">About us</Button>
      </div>
      <div className="basis-1/4">
        <Fragment>
          <div className="flex flex-col justify-center items-end">
            <Button
              className="btn"
              variant="outlined"
              onClick={
                userContext.user && userContext.user !== ''
                  ? () => {
                      router.push('/')
                      userContext.setUser('')
                      handleClose
                    }
                  : handleClickOpen
              }>
              {userContext.user && userContext.user !== ''
                ? 'Disconnect'
                : 'Connect'}
            </Button>
          </div>
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
