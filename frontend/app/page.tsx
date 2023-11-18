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
    <main className="flex flex-col min-h-screen p-5 justify-between items-center">
      <div id="intro" className="z-10 max-w-5xl w-full">
        <div className="text-7xl text-white p-5">
          Let’s initiate a good cause
        </div>
        <div className="flex flex-col">
          <div className="text-2xl text-white">
            With ForstTech, earn crypto tokens while saving the planet.
            <br />
            Plant trees and and earn today!
          </div>
          <Button className="text-white bg-secondary border-r-4 ">
            Join the community
          </Button>
        </div>
        <Image
          width={500}
          height={500}
          alt="Join The Community"
          src={community}
        />
      </div>
      <div id="why us" className="section-5">
        <div className="">
          <div className="text-white text-5xl p-5">Why ForstTech?</div>
        </div>
        <div className="text-white text-3xl p-5">
          ForstTech provides tokens to fund reforestation projects worldwide,
          providing investors with an opportunity to support environment by
          simply planting trees.
        </div>
      </div>
      <div id="advantage cards" className="w-full flex flex-row">
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
      <div id="our impact" className="flex flex-row m-5">
        <Image width={2000} height={2000} alt="Earth" src={earth} />
        <div className="m-10">
          <div className="label">
            <p className="text-white text-5xl m-5">Our impact to the earth</p>
          </div>
          <p className="text-white text-2xl m-5">
            Trees act as natural carbon sinks, absorbing carbon dioxide from the
            atmosphere and helping to mitigate climate change.
          </p>
          <div className="frame-6">
            <div className="text-white text-5xl m-5">23,014</div>
            <div className="text-white text-2xl m-5">Projects completed</div>
          </div>
        </div>
      </div>
      <div id="fact cards" className="w-full flex flex-row">
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
      <div id="processes" className="w-full">
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
      <div id="contact us" className="w-max">
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
