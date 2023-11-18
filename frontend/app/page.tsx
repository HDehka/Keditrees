import { Button } from '@mui/material'
import Image from 'next/image'
import community from '@/app/assets/joinTheCommunicity.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="text-wrapper-4">Let’s initiate a good cause</p>
        <div className="description-action">
          <p className="with-forsttech-earn">
            With ForstTech, earn crypto tokens while saving the planet.
            <br />
            Plant trees and and earn today!
          </p>
          <Button>Join the community</Button>
          <Image
            width={500}
            height={500}
            alt="Join The Community"
            src={community}
          />
        </div>
      </div>
      <div className="section-5">
        <div className="content-5">
          <div className="label-3">
            <div className="text-wrapper-15">Why ForstTech?</div>
          </div>
          <p className="text-wrapper-11">
            ForstTech provides tokens to fund reforestation projects worldwide,
            providing investors with an opportunity to support environment by
            simply planting trees.
          </p>
        </div>
      </div>
      <div className="w-max">w-max</div>
    </main>
  )
}
