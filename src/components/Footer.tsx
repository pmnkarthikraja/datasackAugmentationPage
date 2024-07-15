import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiHeaderLink,
    EuiIcon,
    EuiLink,
    EuiSpacer,
    EuiText,
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <EuiFlexGroup id='footer-section' responsive wrap alignItems="center" justifyContent="spaceBetween">
                <EuiFlexItem grow={false} >
                    <div className={styles.footer_logo_item}>
                    <img src="/logo.png" alt="Company Logo" className={styles.footer_logo} />
                    </div>
                </EuiFlexItem>

                <EuiFlexItem grow={false} className={styles.footer_nav}>
                    <EuiFlexGroup>
                        <EuiFlexItem grow={false}>
                            <EuiText >
                                <p onClick={()=>{
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_links} style={{color:'orange'}}>Office</p>
                            </EuiText>
                            <EuiText >
                                <p onClick={()=>{
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_linkd} style={{fontWeight:'bold'}}>SAUDI ARABIA</p>
                            </EuiText>
                            <EuiText >
                                <p onClick={()=>{
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_link}>Building No. 2345, Ahmed Al Tamimi Al</p>
                            </EuiText>
                            <EuiText >
                                <p onClick={()=>{
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_link}>Malaz, Riyadh 12831, Saudi Arabia.</p>
                            </EuiText>
                            <EuiText >
                                <p onClick={()=>{
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_link}>Ph: +966 56 085 8596</p>
                            </EuiText>
                        </EuiFlexItem>

                        <EuiFlexItem grow={false}>
                            <EuiText >
                                <p onClick={()=>{
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_links} style={{color:'orange'}}>Office</p>
                            </EuiText>
                            <EuiText >
                                <p onClick={()=>{
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_linkd} style={{fontWeight:'bold'}}>INDIA</p>
                            </EuiText>
                            <EuiText >
                                <p onClick={()=>{
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_link}>Building No. 2345, Ahmed Al Tamimi Al</p>
                            </EuiText>
                            <EuiText >
                                <p onClick={()=>{
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_link}>Malaz, Riyadh 12831, Saudi Arabia.</p>
                            </EuiText>
                            <EuiText >
                                <p onClick={()=>{
                                    document.getElementById('services_section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className={styles.footer_link}>Ph: +966 56 085 8596</p>
                            </EuiText>
                        </EuiFlexItem>
                       
                    </EuiFlexGroup>
                </EuiFlexItem>

    

                <EuiFlexItem grow={false} className={styles.footer_contact}>
                    <EuiText>
                        <strong>Contact Us:</strong>
                        <br />
                        <EuiLink href="mailto:info@company.com" className={styles.footer_link}>info@company.com</EuiLink>
                        <br />
                        <EuiLink href="tel:+1234567890" className={styles.footer_link}>+966-560858596</EuiLink>
                    </EuiText>
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size='l'/>
        </div>
    );
};

export default Footer;