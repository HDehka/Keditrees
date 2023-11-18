import { Button, Divider, Paper } from '@mui/material'
import Image from 'next/image'
import community from '@/app/assets/joinTheCommunicity.png'
import earth from '@/app/assets/earth.png'

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
      {/* <div className="w-max flex flex-row">
        <Paper className="basis-1/3" elevation={3}>
          <div>
            Carbon
            <br />
            sequestration
          </div>
          <Divider />
          <p>
            Trees absorb CO2 from the atmosphere and store it in their wood and
            leaves, helping mitigate the effects of
            <br />
            climate change.
          </p>
        </Paper>
        <Paper className="basis-1/3" elevation={3}>
          <div>
            Air quality
            <br />
            improvement
          </div>
          <Divider />
          <p>
            Trees can help to reduce air pollution by absorbing harmful
            pollutants such as nitrogen dioxide, sulfur dioxide,
            <br />
            and ozone.
          </p>
        </Paper>
        <Paper className="basis-1/3" elevation={3}>
          <div>
            Biodiversity
            <br />
            conservation
          </div>
          <Divider />
          <p>
            Trees provide habitat and food
            <br />
            for a wide range of wildlife, helping to maintain biodiversity and
            <br />
            ecological balance.
          </p>
        </Paper>
      </div> */}
      <div>
        <Image width={500} height={500} alt="Earth" src={earth} />
        <div className="content-2">
          <div className="label">
            <p className="text-wrapper-7">Our impact to the earth</p>
          </div>
          <p className="trees-act-as-natural">
            Trees act as natural carbon sinks, absorbing carbon
            <br />
            dioxide from the atmosphere and helping to mitigate
            <br />
            climate change.
          </p>
          <div className="frame-6">
            <div className="text-wrapper-8">23,014</div>
            <div className="text-wrapper-9">Projects completed</div>
          </div>
        </div>
      </div>
      <div className="w-max flex flex-row">
        <div className="basis-1/4">
          <div className="frame-2"></div>
          <div className="frame-3">
            <div className="text-wrapper-5">7,300</div>
            <div className="text-wrapper-6">Trees</div>
          </div>
        </div>
        <div className="basis-1/4">
          <div className="frame-2"></div>
          <div className="frame-4">
            <div className="text-wrapper-5">214,000,23</div>
            <div className="text-wrapper-6">Co2 Stored</div>
          </div>
        </div>
        <div className="basis-1/4">
          <div className="quick-info-list-item-3">
            <div className="frame-2"></div>
            <div className="frame-4">
              <div className="text-wrapper-5">312</div>
              <div className="text-wrapper-6">Area Covered</div>
            </div>
          </div>
        </div>
        <div className="basis-1/4">
          <div className="quick-info-list-item-2">
            <div className="frame-2"></div>
            <div className="frame-4">
              <div className="text-wrapper-5">10,000,00</div>
              <div className="text-wrapper-6">Investors</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-4">
        <div className="content-3">
          <div className="label">
            <div className="text-wrapper-10">Our processes</div>
          </div>
          <p className="text-wrapper-11">
            The process of forestation involves selecting appropriate tree
            species, preparing the land, planting the trees.
          </p>
        </div>
        <div className="process-block">
          <div className="card">
            <div className="content-4">
              <div className="label-2">
                <div className="text-wrapper-12">01</div>
                <div className="text-wrapper-13">Title</div>
              </div>
            </div>
            <p className="text-wrapper-14">
              Description goes here Description goes here Description goes here
              Description goes here Description goes here Description goes here
              Description goes here Description goes here Description goes here
              Description goes here Description goes here Description goes here
              Description goes here Description goes here
            </p>
          </div>
          <div className="content-wrapper">
            <div className="content-4">
              <div className="label-2">
                <div className="text-wrapper-12">02</div>
                <div className="text-wrapper-13">Title</div>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content-4">
              <div className="label-2">
                <div className="text-wrapper-12">03</div>
                <div className="text-wrapper-13">Title</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-max">
        <div className="overlap-group">
          <p className="p">To stay connected with us</p>
          <p className="text-wrapper-3">
            Enter your email and always receive updates from our project!
          </p>
          <div className="overlap-2">
            {/* <Button
              buttonCoreSizeIconInfrontClassName="button-4"
              buttonCoreText="Send"
              buttonCoreTextClassName="design-component-instance-node"
              className="button-instance"
              hierarchy="primary-solid"
              icon="no"
              size="forty-eight"
              state="rest"
            /> */}
            <button className="button-core-wrapper">
              <div className="button-core-2">
                <div className="text-3">Your email address</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
