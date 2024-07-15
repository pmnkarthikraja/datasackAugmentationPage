import { FunctionComponent } from 'react'
import styles from '../styles/FabButton.module.css'

const FabButton:FunctionComponent = () =>{
  const phoneNumber = +966560858596
  const message = encodeURIComponent(
    `
    Hi there, Explore IT Staff Augmentation Services in Riyadh

    Need Tech Talent Quickly?

    Discover the advantages of our IT Staff Augmentation Services:

    - Strategic Hiring Efficiency: Reduce costs by hiring as needed.
    - Flexible Workforce: Scale your team as demand fluctuates.
    - Precision Staffing: Optimize resources with just-in-time hiring.
    - Rapid Expansion: Grow efficiently to meet market demands.
    - Core Focus: Outsource non-core tasks for better focus.
    - Onsite Efficiency: Ensure prompt support with streamlined logistics.
    - Smooth Visa Process: Expert handling for hassle-free operations.
    - Resource Deployment: Agile deployment to match business needs.

      Contact us to learn more (https://www.datasack.in)! 
    `
  );


  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;


  return    <a
    className={styles.fabButton}
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src='/whatsapp.png' alt="WhatsApp" /> 
  </a>
}

export default FabButton
