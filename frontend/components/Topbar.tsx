'use client'
import {
  AppBar,
  Button,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import { Fragment, forwardRef, useState } from 'react'
import Logo from '@/app/assets/favicon.ico'
import { TransitionProps } from '@mui/material/transitions'
import CloseIcon from '@mui/icons-material/Close'
import earth from '@/app/assets/login-earth.png'

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
          <Button variant="outlined" onClick={handleClickOpen}>
            Connect
          </Button>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}>
            <div className="w-max flex flex-row">
              <Image
                width={500}
                height={500}
                alt="Join The Community"
                src={earth}
              />
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close">
                <CloseIcon />
              </IconButton>
              <div className="group-2">
                <div className="group-3">
                  <div className="group-4">
                    <div className="text-wrapper-2">Log in</div>
                    <div className="group-5">
                      <p className="p">If you don’t have an account register</p>
                      <p className="you-can-register">
                        <span className="span">You can </span>
                        <span className="text-wrapper-3">Register here!</span>
                      </p>
                    </div>
                  </div>
                  <div className="group-6">
                    <div className="group-7">
                      <div className="textfield-general">
                        <div className="label-field">
                          <div className="overlap-group">
                            <div className="field">
                              <div className="labels">
                                <input
                                  className="input"
                                  id="input-3"
                                  placeholder="so@gmail.com"
                                  type="email"
                                />
                              </div>
                            </div>
                            <div className="container-label">
                              <label className="label" htmlFor="input-3">
                                Email
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="label-field-wrapper">
                        <div className="label-field">
                          <div className="overlap-group">
                            <div className="field">
                              <div className="labels">
                                <div className="input-2">**********</div>
                              </div>
                            </div>
                            <div className="container-label">
                              <div className="label">Password</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="contained" color="success">
                      Success
                    </Button>
                  </div>
                </div>
                <div className="text-wrapper-4">or continue with</div>
                <div className="group-wrapper">
                  <div className="group-8">
                    {/* <Facebook1 className="facebook" />
                    <Apple className="apple-1" />
                    <Google className="google-1" /> */}
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </Fragment>
      </div>
    </div>
  )
}

export default Topbar
