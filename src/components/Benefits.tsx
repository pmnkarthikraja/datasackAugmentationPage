"use client";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui"
import { FunctionComponent } from "react";

const benefitsSection1 = [
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
]

const benefitsSection2=[
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

const Benefits:FunctionComponent = () => {
    return <div className="benefit-section-wrapper" id="benefit-section">
            <div className="benefit-left-section">
                <h2>Benefits of <span style={{ color: 'orange' }}>IT Resource Augmentation</span> Services in Riyadh</h2>
                <p >IT Staff Augmentation Services Riyadh provided by Datasack Solutions are advantageous as they offer the following benefits.</p>
            </div>
            <div className="benefit-content-wrapper">
                <EuiFlexGroup  responsive={true} wrap>
                    {benefitsSection1.map((benefit,idx)=>(
                          <EuiFlexItem key={idx} className="custom-flex-item">
                          <article key={idx} className="card" >
                              <div key={idx}>
                                  <div key={idx} className="card__content--container | flow" >
                                      <h2 key={idx} className="card__title">{benefit.title}</h2>
                                      <p key={idx} className="card__description">
                                        {benefit.description}
                                      </p>
                                  </div>
                              </div>
                          </article>
                      </EuiFlexItem> 
                    ))}
                </EuiFlexGroup>

                {/* ----------------------next section--------------------- */}
                <div style={{ height: '50px' }}></div>
                <EuiFlexGroup responsive wrap>
                {benefitsSection2.map((benefit,idx)=>(
                          <EuiFlexItem key={idx} className="custom-flex-item">
                          <article key={idx} className="card" >
                              <div key={idx}>
                                  <div key={idx} className="card__content--container | flow" >
                                      <h2 key={idx} className="card__title">{benefit.title}</h2>
                                      <p key={idx} className="card__description">
                                        {benefit.description}
                                      </p>
                                  </div>
                              </div>
                          </article>
                      </EuiFlexItem> 
                    ))}
                </EuiFlexGroup>
            </div>
        </div>
}

export default Benefits