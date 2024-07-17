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
          style={{ padding: '50px',height:'150px' }}
          title={<span style={{ fontSize: '30px' }}>{item.title}</span>}
          description={<span style={{ fontSize: "20px" }}>{item.description}</span>}
        />
      </EuiFlexItem>
    );
  });


const settings: Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    cssEase: "linear",
};

const AnalyticsSlider = () => (
    <EuiPage style={{ backgroundColor: 'transparent', overflow: 'hidden' }}>
        <EuiPageBody>
            <div className="benefit-slider">
                <Slider {...settings}>
                    {cardNodes}
                </Slider>
            </div>
        </EuiPageBody>
    </EuiPage>
);

export default AnalyticsSlider;
