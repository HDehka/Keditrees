import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Logo from '@/app/assets/favicon.ico'

function Topbar() {
  return (
    <div className="flex flex-row">
      <div className="basis-1/4">
        <Image width={50} height={50} alt="Logo" src={Logo} />
      </div>
      <div className="basis-1/2">
        <Button>Home</Button>
        <Button>Projects</Button>
        <Button>Blog</Button>
        <Button>Developers</Button>
        <Button>About us</Button>
      </div>
      <div className="basis-1/4">
        <Button>Log in</Button>
        <Button>Register</Button>
      </div>
    </div>
  )
}

export default Topbar
