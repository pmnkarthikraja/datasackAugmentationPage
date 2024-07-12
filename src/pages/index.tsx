import AnalyticsSlider from "@/components/Analytics_Slider";
import Benefits from "@/components/Benefits";
import BenefitsSlider from "@/components/Benefits_Slider";
import HeaderComponent from "@/components/Header";
import Pricing from "@/components/Pricing";
import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiImage, EuiPage, EuiPageBody } from "@elastic/eui";
import Head from "next/head";
import { Fragment, FunctionComponent } from "react";

const Home:FunctionComponent =() => {
  const analyticsIcons = [{
    id: 1,
    title: "2",
    description: 'weeks to allocate IT experts'
  },
  {
    id: 2,
    title: "8%",
    description: 'can join immediately'
  },
  {
    id: 3,
    title: "4.9/5",
    description: 'on Clutch'
  }
  ];

  return (
    <Fragment>
      <Head>
        <title>IT Staff Augmentation Services Riyadh | Fill Your Skill Gaps Fast</title>
        <meta title="title" content="IT Staff Augmentation Services Riyadh | Fill Your Skill Gaps Fast" />
        <meta name="description" content="Get the right talent at the right price. Find DataSack's IT Staff Augmentation Services Riyadh. Resolve skill shortages for project excellence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EuiPage style={{ background: 'black' }}>
        <EuiPageBody>
          <HeaderComponent />
          <div className="image-shadow">
          <EuiImage className="background-img" src="/Resources_crop.jpg" alt="backgorund" />
          </div>

          <p className="subtitle">Need Tech Talent Quickly?</p>
          <h1
            className="title"
          >Explore IT Staff Augmentation Services Riyadh</h1>

          <div className="analytics-section">
            <div style={{ paddingBottom: '50px' }}>
              <EuiCard hasBorder={false} title="Augment your software team with IT professionals via IT Team Augmentation Services Riyadh." />
            </div>

            <div id="window_view_analytics">
            <EuiFlexGroup gutterSize="l">
              {analyticsIcons.map((item, idx) => (<>
                <EuiFlexItem key={idx}>
                  <EuiCard
                    style={{ padding: '50px' }}
                    title={<span key={idx} style={{ fontSize: '2.3vw' }}>{item.title}</span>}
                    description={<span key={idx} style={{ fontSize: '1.2vw' }}>{item.description}</span>}
                  />
                </EuiFlexItem>
              </>))}
            </EuiFlexGroup>
            </div>

            <div id="mobile_view_analytics">
            <AnalyticsSlider />
            </div>

            <div id="benefit_mobile_view">
            <div className="benefit-left-section benefit-left-section-mobile">
                <h2  style={{ fontSize: '30px', paddingTop: '10px' }}>Benefits of <span style={{ color: 'orange' }}>IT Resource Augmentation </span>Services in Riyadh</h2>
                <p style={{ fontSize: '18px' }}>IT Staff Augmentation Services Riyadh provided by Datasack Solutions are advantageous as they offer the following benefits.</p>
           
            </div>
            <BenefitsSlider />
            </div>

            <div id="benefit_window_view">
            <Benefits />
            </div>

            <div id="window-pricing">
            <div className="benefit-left-section">
                <h2>Craft your own<span style={{ color: 'orange'}}> pricing</span></h2>
            </div>
            <Pricing />
            </div>
          </div>
        </EuiPageBody>
      </EuiPage>
    </Fragment>
  );
}

export default Home