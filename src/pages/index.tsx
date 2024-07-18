import AnalyticsSlider from "@/components/Analytics_Slider";
import Benefits from "@/components/Benefits";
import BenefitsSlider from "@/components/Benefits_Slider";
import FabButton from "@/components/FabButton";
import Footer from "@/components/Footer";
import HeaderComponent from "@/components/Header";
import ManagedServices from "@/components/ManagedServices";
import PricingPage from "@/components/Pricing";
import { EuiButton, EuiCard, EuiFlexGroup, EuiFlexItem, EuiGlobalToastList, EuiImage, EuiPage, EuiPageBody, EuiSpacer } from "@elastic/eui";
import Head from "next/head";
import Image from "next/image";
import { Fragment, FunctionComponent, useEffect, useState } from "react";

const Home: FunctionComponent = () => {
  const [toasts, setToasts] = useState<Array<{ id: string, title: string, text: React.ReactNode }>>([]);

  useEffect(() => {
    const showToast = setTimeout(() => {
      setToasts([{
        id: 'pricing-toast',
        title: 'Do you want to know pricing?',
        text: <EuiButton onClick={() => document.getElementById('window-pricing')?.scrollIntoView({ behavior: 'smooth' })}>Get Pricing</EuiButton>
      }]);
    }, 10000);

    showToast
  }, []);

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
        <title>IT Staff Augmentation Services in Dammam and Riyadh | Fill Your Skill Gaps Fast</title>
        <meta title="title" content="IT Staff Augmentation Services Riyadh | Fill Your Skill Gaps Fast" />
        <meta name="description" content="Get the right talent at the right price. Find DataSack's IT Staff Augmentation Services in Dammam and Riyadh. Resolve skill shortages for project excellence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="IT Staff Augmentation Services in Dammam and Riyadh | Fill Your Skill Gaps Fast" />
        <meta property="og:description" content="Get the right talent at the right price. Find DataSack's IT Staff Augmentation Services in Dammam and Riyadh. Resolve skill shortages for project excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="IT Staff Augmentation Services in Dammam and Riyadh | Fill Your Skill Gaps Fast" />
        <meta property="og:locale" content="en_US" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_CV View.webp" as="image" type="image/webp" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_Work force.webp" as="image" type="image/webp" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_precision staffing.webp" as="image" type="image/webp" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_Rapid Expansion.webp" as="image" type="image/webp" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_Core Focus.webp" as="image" type="image/webp" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_onsite.webp" as="image" type="image/webp" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_Visa.webp" as="image" type="image/webp" />
        <link rel="preload" href="/benefits-webp-1000x684/DSS-Website-Elements_Resource Deployment.webp" as="image" type="image/webp" />
        <link rel="preload" href="/background_vector.webp" as="image" type="image/webp" />
      </Head>
      <EuiPage >
        <EuiPageBody>
          <HeaderComponent />
          <div>
            <FabButton />
          </div>

          <div>
            <div className="image-container">
              <Image priority width={200} height={400} className="background-img" src="/background_vector.webp" alt="background" />
              <div className="image-overlay"></div>
            </div>
            <div className="title-wrap">
              <p className="subtitle">Need Tech Talent Quickly?</p>
              <h1 className="title">Explore IT Staff Augmentation Services in Dammam and Riyadh</h1>
            </div>
            <EuiGlobalToastList
              toasts={toasts}
              dismissToast={() => setToasts([])}
              toastLifeTimeMs={1000000}
            />
          </div>


          <div id="analytics-section" className="analytics-section">
            <div style={{ paddingBottom: '50px' }}>
              <EuiCard hasBorder={false} title="Augment your software team with IT professionals via IT Team Augmentation Services in Dammam and Riyadh." />
            </div>

          
          <div id="window_view_analytics">
              <EuiFlexGroup gutterSize="l"  key={12}>
                {analyticsIcons.map((item, idx) => (
                  <EuiFlexItem key={idx}>
                    <EuiCard
                      style={{ padding: '50px' }}
                      title={<span key={idx} style={{ fontSize: '2.3vw' }}>{item.title}</span>}
                      description={<span key={idx} style={{ fontSize: '1.2vw' }}>{item.description}</span>}
                    />
                  </EuiFlexItem>))}
              </EuiFlexGroup>
              </div>

            <div id="mobile_view_analytics">
              <AnalyticsSlider />
            </div>

            <div id="benefit_mobile_view">
              <div className="benefit-left-section benefit-left-section-mobile">
                <h2 style={{ fontSize: '30px', paddingTop: '10px' }}>Benefits of <span style={{ color: 'orange' }}>IT Resource Augmentation </span>Services in Dammam and Riyadh</h2>
                <p style={{ fontSize: '18px' }}>IT Staff Augmentation Services in Dammam and Riyadh provided by Datasack Solutions are advantageous as they offer the following benefits.</p>
              </div>
              <BenefitsSlider />
            </div>

            <div id="benefit_window_view">
              <Benefits />
            </div>

            {/* <div className="image-container"> */}
            {/* <EuiTitle><h2 style={{color:'black', textAlign:'center', fontSize:'3px',paddingTop: '10px'}}>Managed <span style={{color:'orange'}}>Services</span></h2></EuiTitle>
        <p >IT Staff Augmentation Services in Dammam and Riyadh provided by Datasack Solutions are advantageous as they offer the following benefits.</p> */}
          <EuiSpacer size="l"/>
          <div id="benefit_mobile_view">
         <div className="benefit-left-section benefit-left-section-mobile">
         <h2 style={{ fontSize: '30px', paddingTop: '10px' }}>Managed <span style={{ color: 'orange' }}>Services </span></h2>
         <p style={{ fontSize: '18px' }}>IT Staff Augmentation Services in Dammam and Riyadh provided by Datasack Solutions are advantageous as they offer the following benefits.</p>
          </div>
          </div>
            <ManagedServices />



            <div id="window-pricing">
              <PricingPage />
            </div>
          </div>

          <Footer />
        </EuiPageBody>
      </EuiPage>
    </Fragment>
  );
}

export default Home