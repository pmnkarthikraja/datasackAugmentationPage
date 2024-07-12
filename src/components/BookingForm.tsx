import { EuiHorizontalRule, EuiImage } from '@elastic/eui';
import { FunctionComponent } from 'react';
import styles from '../styles/BookingForm.module.css';


const BookingForm: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h2 style={{ fontSize: '35px', fontWeight: 'bold' }}><span style={{ color: 'orange' }}>Book</span> a Call</h2>
        <p style={{fontWeight:'bold'}}>
        Coffee Break with DataSack? Schedule a Call About Your Tech Needs!
        </p>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="industry">Select your industry</label>
            <select id="industry" name="industry">
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Corporate E-mail</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="date">Date & time</label>
            <input type="datetime-local" id="date" name="date" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="requirements">Please describe your project requirements</label>
            <textarea id="requirements" name="requirements"></textarea>
          </div>
          <div className={`${styles.formGroup} ${styles.formgroup_protect}`}>
          <label htmlFor="nda">I want to protect my data by signing an NDA.</label>
            <input type="checkbox" id="nda" name="nda" />
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit">Book</button>
          </div>
        </form>
      </div>
      <div className={styles.contactSection}>
        <div style={{ marginLeft: '0px' }}>
          <h3 >
          <span style={{fontWeight:'bold', fontSize:'25px',lineHeight:'1.5'}}>Free Consultation</span> - Level Up Your IT with DataSack Experts!
          </h3>
          <EuiHorizontalRule size='half' />
          <h3 className='contact-us'>Contact us</h3>
          <p>+966-34221121</p>
          <p className='email-link' >support@datasackSolution.in</p>
          <div style={{ height: '20px' }}></div>
          <h4>Customers who trust us</h4>
          <EuiImage src='/al_rajhi_bank.png' alt='samsung_logo' style={{ width: '100px', height: 'auto', padding: '10px', cursor: 'pointer' }} />
          <EuiImage src='/alinma.png' alt='samsung_logo' style={{ width: '100px', height: 'auto', padding: '10px', cursor: 'pointer' }} />
          <EuiImage src='/bank_albilad.png' alt='samsung_logo' style={{ width: '100px', height: 'auto', padding: '10px', cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
