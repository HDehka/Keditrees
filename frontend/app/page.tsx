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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="text-wrapper-4">Let’s initiate a good cause</p>
        <div className="description-action">
          <p className="with-forsttech-earn">
            With ForstTech, earn crypto tokens while saving the planet. Plant
            trees and and earn today!
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
      <div id="our impact" className="flex flex-row">
        <Image width={500} height={500} alt="Earth" src={earth} />
        <div className="content-2">
          <div className="label">
            <p className="text-wrapper-7">Our impact to the earth</p>
          </div>
          <p className="trees-act-as-natural">
            Trees act as natural carbon sinks, absorbing carbon dioxide from the
            atmosphere and helping to mitigate climate change.
          </p>
          <div className="frame-6">
            <div className="text-wrapper-8">23,014</div>
            <div className="text-wrapper-9">Projects completed</div>
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
            <div className="text-wrapper-10">Our processes</div>
          </div>
          <p className="text-wrapper-11">
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
