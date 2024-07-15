import { FunctionComponent } from 'react'
import styles from '../styles/FabButton.module.css'

const FabButton:FunctionComponent = () =>{
    return    <a
    className={styles.fabButton}
    href="https://wa.me/+911234567788" 
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src='/whatsapp.png' alt="WhatsApp" /> 
  </a>
}

export default FabButton
