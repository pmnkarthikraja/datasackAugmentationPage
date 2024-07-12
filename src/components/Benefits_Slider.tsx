"use client";
import {
    EuiPage,
    EuiPageBody
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


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

const benefits = [
    {
        title:"Strategic Hiring Efficiency",
        description:" Avoid excessive overhead costs by strategically hiring workers only when needed. This approach helps maintain financial efficiency and flexibility, ensuring you pay only for the necessary workforce during peak demands.",
    },
    {
        title:"Flexible Workforce",
        description:"IT team augmentation services Riyadh increases financial flexibility by converting fixed costs to variable costs, hiring workers for specific durations. This ensures optimal budget management, paying for necessary expertise.",
    },
    {
        title:"Precision Staffing",
        description:" Reduce staffing costs with just-in-time recruitment, ensuring resources deploy precisely when needed. This approach minimizes overheads tied to idle workforce capacity, enhancing financial flexibility and efficiency.",
    },
    {
        title:"Rapid Expansion",
        description:"Accelerate growth by scaling up IT staff augmentation services Riyadh to meet demand efficiently. This proactive approach ensures timely service delivery, enhancing customer satisfaction and seizing market opportunities.",
    },
    {
        title:"Core Focus",
        description:"Our IT resource augmentation services Riyadh optimize productivity by outsourcing non-core tasks to contingent workers, freeing resources for core business activities and enhancing operational efficiency for our clients.",
    },
    {
        title:"Onsite Efficiency",
        description:"Ensure rapid availability of consultants onsite by optimizing travel logistics and processes. This streamlines operations, ensuring prompt support delivery for enhanced client satisfaction and project efficiency.",
    },
    {
        title:"Smooth Visa Logistics",
        description:"Utilizing our expert team in logistics and visa processing, we collaborate closely to ensure an efficient and seamless experience for our clients. This approach streamlines operations and enhances client satisfaction.",
    },
    {
        title:'Resource Deployment',
        description:"IT staff augmentation services Riyadh deploy our resources in India to meet business needs. This strategic advantage ensures swift adaptation to market demands, enhancing operational agility and client satisfaction."
    }
]

const BenefitsSlider = () => (
    <EuiPage style={{ backgroundColor: 'transparent', overflow: 'hidden' }}>
        <EuiPageBody>
            <div className="benefit-slider">
                <Slider {...settings}>
                    {benefits.map((benefit, index) => (
                         <div key={index} className="benefit-card-wrapper">
                       <article className="card card-mobile benefit-card">
                       <img
                           className="card__background"
                           src="/benefit_img.jpg"
                           alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                           width="1920"
                           height="2193"
                       />
                       <div>
                           <div className="card__content--container | flow">
                               <h2 className="card__title" style={{fontSize:'4vw'}}>{benefit.title}</h2>
                               <p className="card__description">
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