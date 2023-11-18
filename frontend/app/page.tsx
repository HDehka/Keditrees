import { Button, Divider, Paper } from '@mui/material'
import Image from 'next/image'
import community from '@/app/assets/joinTheCommunicity.png'
import earth from '@/app/assets/earth.png'
import AdvantageCard, {
  Icon as AdvantageCardIcon,
} from '@/components/AdvantageCard'
import FactCard, { Icon as FactCardIcon } from '@/components/FactCard'
import ProcessesAccordion from '@/components/ProcessesAccordion'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <div id="intro" className="z-10 max-w-5xl">
        <div className="text-7xl text-white p-5">
          Let’s initiate a good cause
        </div>
        <div className="flex flex-col justify-center items-center my-5">
          <div className="text-xl text-white">
            With ForstTech, earn crypto tokens while saving the planet.
          </div>
          <div className="text-xl text-white">
            Plant trees and and earn today!
          </div>
          <Button className="text-white bg-secondary mt-3 rounded-full p-5">
            Join the community
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center my-20">
          <Image
            width={400}
            height={400}
            alt="Join The Community"
            src={community}
          />
        </div>
      </div>
      <div id="why us" className="max-w-7xl my-10">
        <div className="">
          <div className="text-white text-5xl p-5">Why ForstTech?</div>
        </div>
        <div className="text-white text-3xl p-5">
          ForstTech provides tokens to fund reforestation projects worldwide,
          providing investors with an opportunity to support environment by
          simply planting trees.
        </div>
      </div>
      <div id="advantage cards" className="max-w-7xl flex flex-row">
        <div className="basis-1/3">
          <AdvantageCard
            iconName={AdvantageCardIcon.cloud}
            title="Carbon sequestration"
            detail="Trees absorb CO2 from the atmosphere and store it in their wood and
        leaves, helping mitigate the effects of climate change."
          />
        </div>
        <div className="basis-1/3">
          <AdvantageCard
            iconName={AdvantageCardIcon.wind}
            title="Air quality improvement"
            detail="Trees can help to reduce air pollution by absorbing harmful pollutants such as nitrogen dioxide, sulfur dioxide, and ozone."
          />
        </div>
        <div className="basis-1/3">
          <AdvantageCard
            iconName={AdvantageCardIcon.pet}
            title="Biodiversity conservation"
            detail="Trees provide habitat and food for a wide range of wildlife, helping to maintain biodiversity and ecological balance."
          />
        </div>
      </div>
      <div id="our impact" className="flex flex-row mt-36 w-full">
        <Image width={2000} height={2000} alt="Earth" src={earth} />
        <div className="m-10">
          <div className="label">
            <p className="text-white text-5xl m-5">Our impact to the earth</p>
          </div>
          <p className="text-white text-2xl m-5 my-10">
            Trees act as natural carbon sinks, absorbing carbon dioxide from the
            atmosphere and helping to mitigate climate change.
          </p>
          <div className="frame-6">
            <div className="text-white text-5xl m-5">23,014</div>
            <div className="text-white text-2xl m-5">Projects completed</div>
          </div>
        </div>
      </div>
      <div id="fact cards" className="max-w-7xl flex flex-row mt-10 mb-20">
        <div className="basis-1/4">
          <FactCard iconName={FactCardIcon.trees} num="7,300" text="Trees" />
        </div>
        <div className="basis-1/4">
          <FactCard
            iconName={FactCardIcon.share}
            num="214,000,23"
            text="Co2 Stored"
          />
        </div>
        <div className="basis-1/4">
          <FactCard iconName={FactCardIcon.pet} num="312" text="Area Covered" />
        </div>
        <div className="basis-1/4">
          <FactCard
            iconName={FactCardIcon.people}
            num="10,000,00"
            text="Investors"
          />
        </div>
      </div>
      <div id="processes" className="max-w-7xl">
        <div className="content-3">
          <div className="label">
            <div className="text-5xl text-white my-10">Our processes</div>
          </div>
          <p className="text-2xl text-white my-10">
            The process of forestation involves selecting appropriate tree
            species, preparing the land, planting the trees.
          </p>
        </div>
        <ProcessesAccordion />
      </div>
      <div id="contact us" className="max-w-3xl m-8 p-20">
        <div className="overlap-group">
          <p className="text-white text-5xl">To stay connected with us</p>
          <p className="text-white text-xl">
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
