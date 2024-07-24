"use client";
import {
    EuiPage,
    EuiPageBody
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const settings: Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
};

const benefits = [
    {
        title: "Strategic Hiring Efficiency",
        description: " Avoid excessive overhead costs by strategically hiring workers only when needed. This approach helps maintain financial efficiency and flexibility, ensuring you pay only for the necessary workforce during peak demands.",
        backgroundImageUrl: '/benefits/1_Sstrategic_Hiring.jpg'
    },
    {
        title: "Flexible Workforce",
        description: "IT team augmentation services in Dammam and Riyadh increases financial flexibility by converting fixed costs to variable costs, hiring workers for specific durations. This ensures optimal budget management, paying for necessary expertise.",
        backgroundImageUrl: '/benefits/2_Flexible_Workforce.jpg'
    },
    {
        title: "Precision Staffing",
        description: " Reduce staffing costs with just-in-time recruitment, ensuring resources deploy precisely when needed. This approach minimizes overheads tied to idle workforce capacity, enhancing financial flexibility and efficiency.",
        backgroundImageUrl: '/benefits/3_Precision_staffing.jpg'
    },
    {
        title: "Rapid Expansion",
        description: "Accelerate growth by scaling up IT staff augmentation services in Dammam and Riyadh to meet demand efficiently. This proactive approach ensures timely service delivery, enhancing customer satisfaction and seizing market opportunities.",
        backgroundImageUrl: '/benefits/4_Rapid_Expansion.png'
    },
    {
        title: "Core Focus",
        description: "Our IT resource augmentation services in Dammam and Riyadh optimize productivity by outsourcing non-core tasks to contingent workers, freeing resources for core business activities and enhancing operational efficiency for our clients.",
        backgroundImageUrl: '/benefits/5_Core_Focus.png'
    },
    {
        title: "Onsite Efficiency",
        description: "Ensure rapid availability of consultants onsite by optimizing travel logistics and processes. This streamlines operations, ensuring prompt support delivery for enhanced client satisfaction and project efficiency.",
        backgroundImageUrl: '/benefits/6_Onsite_Efficiency.jpg'
    },
    {
        title: "Smooth Visa Logistics",
        description: "Utilizing our expert team in logistics and visa processing, we collaborate closely to ensure an efficient and seamless experience for our clients. This approach streamlines operations and enhances client satisfaction.",
        backgroundImageUrl: '/benefits/7_Smooth_Visa_Logistics.png'
    },
    {
        title: 'Resource Deployment',
        description: "IT staff augmentation services in Dammam and Riyadh deploy our resources in India to meet business needs. This strategic advantage ensures swift adaptation to market demands, enhancing operational agility and client satisfaction.",
        backgroundImageUrl: '/benefits/8_Resource_Deployment.png'
    }
]

const BenefitsSlider = () => (
    <EuiPage style={{ backgroundColor: 'transparent', overflow: 'hidden' }}>
        <EuiPageBody>
            <div className="benefit-slider">
                <Slider {...settings}>
                    {benefits.map((benefit, index) => (
                         <div key={index} className="benefit-card-wrapper-mobile">
                       <article className=" card-mobile benefit-card">
                       <Image width={200} height={150} className="card__background-mobile" src="/background_benefit_card.jpg" alt="Background_Benefit" />
                       <div>
                           <div >
                               <h3>{benefit.title}</h3>
                               <p>
                              {benefit.description}
                               </p>
                           </div>
                       </div>
                   </article>
                   </div>
                    ))}
                </Slider>
            </div>
        </EuiPageBody>
    </EuiPage>
);

export default BenefitsSlider;
