"use client";
import {
  EuiCard,
  EuiFlexItem,
  EuiPage,
  EuiPageBody
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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

const cardNodes = analyticsIcons.map(function (item, index) {
  return (
    <EuiFlexItem key={index}>
      <EuiCard
        key={index}
        style={{ padding: '0', height: '150px', alignItems: 'center', justifyItems: 'center', backgroundColor: '#CCCCCC' }}
        title=''
      >
        <div style={{ alignItems: 'center', justifyItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
          <h2 style={{ fontSize: '35px' }}>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      </EuiCard>
    </EuiFlexItem>
  );
});


const settings: Settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  cssEase: "linear",
  pauseOnFocus:true,
};

const AnalyticsSlider = () => (
  <div className="benefit-slider">
    <Slider {...settings}>
      {cardNodes}
    </Slider>
  </div>
);

export default AnalyticsSlider;
