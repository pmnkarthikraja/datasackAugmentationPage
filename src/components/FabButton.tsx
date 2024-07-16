import { FunctionComponent } from 'react';
import styles from '../styles/FabButton.module.css';

const FabButton:FunctionComponent = () =>{
  const phoneNumber = +966560858596
  const message = encodeURIComponent(
    `
    Hi there, Explore IT Staff Augmentation Services - in Dammam and Riyadh

    Check out our company - (https://www.datasack.in)

    Need Tech Talent Quickly? Kindly Fill up the details to touch with you.

    Industry     :
    Name         :
    Email        :
    Phone        :
    Requirements :

    Thank you, we will reach out you shortly!
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
