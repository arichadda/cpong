import React from 'react';
import {
  Button,
} from 'carbon-components-react';
import { InfoSection, InfoCard } from '../../components/Info';
import PhotoOne from './DSC01.jpg'
import PhotoTwo from './DSC02.jpg'
import PhotoThree from './DSC08.jpg'
import PhotoFour from './DSC05.jpg'
import PhotoFive from './DSC07.jpg'

function redirectFunction() {
  window.location.href = "https://medium.com/@pat.m.murphy.27/why-crypto-pong-b751073a44eb"
}

function redirectFunctionOS() {
  window.location.href = "https://opensea.io/collection/untitled-collection-92808344"
}

function redirectFunctionOne() {
  window.location.href = "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72688937085603843973544497565222681678600926416679765054993884138660014587905"
}

function redirectFunctionTwo() {
  window.location.href = "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72688937085603843973544497565222681678600926416679765054993884139759526215681"
}

function redirectFunctionThree() {
  window.location.href = "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72688937085603843973544497565222681678600926416679765054993884140859037843457"
}

function redirectFunctionFour() {
  window.location.href = "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72688937085603843973544497565222681678600926416679765054993884141958549471233"
}

function redirectFunctionFive() {
  window.location.href = "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72688937085603843973544497565222681678600926416679765054993884143058061099009"
}

function redirectFunctionOpenSea() {
  window.location.href = "https://opensea.io/CPong"
}

function redirectFunctionLinkedIn() {
  window.location.href = "https://www.linkedin.com/company/crypto-pong/"
}

function redirectFunctionInstagram() {
  window.location.href = "https://www.instagram.com/cryptopong/"
}

function redirectFunctionTwitter() {
  window.location.href = "https://twitter.com/cpong2021"
}

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <h1 className="landing-page__heading">
            Purchase the first NFT of the College
          </h1>
          <h1 className="landing-page__heading_two">
            <Button className="redirectButtonOS" kind="secondary" size="default" onClick={redirectFunctionOS}>Visit our OpenSea marketplace</Button>
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <h2 className="landing-page__subheading">
                    Why NFTs?
                  </h2>
                  <p className="landing-page__p">
                    NFTs, or non-fungible-tokens, are images, videos, gifs, and/or any form of digital file that cannot be duplicated. 
                    Built on blockchain technology, owners can easily confirm their proof of ownership via a digital certification of their purchase.  
                    Rather than exclusively selling art pieces through in-person galleries, creators can now also sell their work online as NFTs.
                    Once purchased, NFT owners can access their newfound pieces from anywhere in the world, giving works of art and creators/owners unparalleled access. 
                    Moreover, from 2018 to 2020, the market cap of NFTs rose from $41 million to a staggering $338 million, making them an incredible investment opportunity. 
                  </p>
                  <p className="landing-page__p">
                    At CRYPTO PONG, we believe in the power of community building through the future of decentralized technologies and ownership. 
                    Purchasing one of our NFTs will enable you to be a part of one of the fastest-growing ecosystems in the world.
                  </p>
                  <Button className="redirectButton" onClick={redirectFunction} kind="secondary">Learn more</Button>
                <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8"/>
              </div>
        </div>
      </div>
      <InfoSection heading="FOUNDER'S COLLECTION (Visit OpenSea purchase page by clicking image)" className="landing-page__r3">
        <InfoCard
          img_src={PhotoOne}
          price="0.2 WETH"
          link_func={redirectFunctionOne}
          heading="001: College on a Hill"
          body="The Founder's Collection includes the first-ever NFTs of the College. 001 is the center of campus and the first installment."
        />
        <InfoCard
          img_src={PhotoTwo}
          price="0.1 WETH"
          link_func={redirectFunctionTwo}
          heading="002: Vox Clamantis"
          body="The Founder's Collection includes the first-ever NFTs of the College. 002 is the voice in the woods and the second installment."
        />
        <InfoCard
          img_src={PhotoThree}
          price="0.1 WETH"
          link_func={redirectFunctionThree}
          heading="003: In Deserto"
          body="The Founder’s Collection includes the first-ever NFTs of the College. 003 is the hub of Hanover and the third installment."
        />
        <InfoCard
          img_src={PhotoFour}
          price="0.05 WETH"
          link_func={redirectFunctionFour}
          heading="004: A Hanover Spring"
          body="The Founder’s Collection includes the first-ever NFTs of the College. 004 is the cornerstone of campus and the fourth installment."
        />
        <InfoCard
          img_src={PhotoFive}
          price="0.05 WETH"
          link_func={redirectFunctionFive}
          heading="005: Homecoming"
          body="The Founder’s Collection includes the first-ever NFTs of the College. 005 is the celebration of the continuum and the fifth installment."
        />
     </InfoSection>
      <div className="gutter-page_banner">
        <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div className="bx--row landing-page__tab-content">
              <p style={{color: 'white'}}>
                Cryptopong is a completely student owned and student operated business. 
                We provide high quality NFTs of the College to alumni and fans. 
                After purchasing one of our premium images, one will be able to take a piece of the College wherever they may be. 
              </p>
              <div>
                <br/>
                <br/>
                <p onClick={redirectFunctionOpenSea} style={{color: 'white'}} margin-bottom='3px'>
                  <u>OpenSea</u>
                </p>  
                <p onClick={redirectFunctionInstagram} style={{color: 'white'}} display="inline-block" margin-bottom='3px'>
                  <u>Instagram</u>
                </p>  
                <p onClick={redirectFunctionLinkedIn} style={{color: 'white'}} display="inline-block" margin-bottom='3px'>
                  <u>LinkedIn</u>
                </p>  
                <p onClick={redirectFunctionTwitter} style={{color: 'white'}} display="inline-block" margin-bottom='3px'>
                  <u>Twitter</u>
                </p>  
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
