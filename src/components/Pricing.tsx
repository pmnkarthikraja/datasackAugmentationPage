import {
    EuiButtonIcon,
    EuiFlexGroup,
    EuiFlexItem,
    EuiPage,
    EuiPageBody,
    EuiPanel,
    EuiSpacer,
    EuiText,
    EuiTitle,
    EuiButton,
} from '@elastic/eui';
import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from '../styles/Pricing.module.css';
import EnquiryModal from './EnquiryModal';

const technologies = {
    'Development Technologies': {
        Web: ['HTML5', 'CSS3', 'JavaScript', 'AngularJS'],
        Mobile: ['Android', 'iOS', 'Xamarin'],
        '.NET': ['C#', 'ASP.NET', 'Entity Framework'],
        J2EE: ['Java', 'Spring', 'Hibernate'],
        LAMP: ['Linux', 'Apache', 'MySQL', 'PHP'],
    },
    'Data Management and Analytics': {
        Database: ['Microsoft SQL Server', 'Oracle', 'SQLite', 'PL/SQL'],
        'Big Data': ['Hadoop', 'MongoDB'],
        Analytics: ['Power BI', 'SSRS', 'Google Analytics'],
    },
    'Platforms and Systems': {
        ERP: ['Microsoft Navison', 'SAP'],
        CRM: ['Microsoft Dynamics CRM'],
        CMS: ['Dot Net Nuke', 'WordPress', 'Alfresco', 'Drupal', 'Joomla'],
        'Cloud Platforms': ['Azure', 'Amazon', 'AWS'],
    },
    'Architecture and Design': {
        Architecture: ['Enterprise Architect', 'Rational Software Architect', 'No Magic', 'Modelio', 'Archi'],
        UIDesigning: ['Infragistics', 'Telerik'],
    },
    'Business Solutions': {
        eCommerce: ['Magento', 'VevoCart', 'Shopify'],
        'Enterprise Social': ['Microsoft Yammer'],
    },
    'Quality Assurance and Project Management': {
        Testing: ['JMeter', 'JUnit', 'Mercury', 'Selenium', 'Regression Testing'],
        'Project Management': ['MS Project', 'SmartSheet'],
    },
};

const Pricing: FunctionComponent = () => {
    const [selectedTechnologies, setSelectedTechnologies] = useState<{ [key: string]: number }>({});
    const [isModalOpen,setIsModalOpen]=useState<boolean>(false)
    const [isClient, setClient] = useState(false)

    useEffect(() => {
        setClient(true)
    }, [])
    
    const incrementQuantity = (tech: string) => {
        setSelectedTechnologies((prev) => ({
            ...prev,
            [tech]: (prev[tech] || 0) + 1,
        }));
    };

    const decrementQuantity = (tech: string) => {
        setSelectedTechnologies((prev) => ({
            ...prev,
            [tech]: Math.max((prev[tech] || 0) - 1, 0),
        }));
    };

    const removeTechnology = (tech: string) => {
        setSelectedTechnologies((prev) => {
            const newSelectedTechnologies = { ...prev };
            delete newSelectedTechnologies[tech];
            return newSelectedTechnologies;
        });
    };

    const triggerEnquiryModal = () =>{
        setIsModalOpen(p=>!p)
    }

    const hasSelectedTechnologies = Object.values(selectedTechnologies).some(quantity => quantity > 0);
    return (
        <>
        <EuiPage style={{ background: 'transparent' }}>
            <EuiPageBody>
                {isClient && <EnquiryModal closeModal={triggerEnquiryModal} isOpen={isModalOpen} selectedTechnologies={selectedTechnologies} />}
                <div  style={{ alignItems: 'center' }}>
                    {Object.entries(technologies).map(([mainCategory, subCategories]) => (
                           <>
                           <EuiTitle size="l"><h1>{mainCategory}</h1></EuiTitle>
                            <EuiSpacer size="l" />
                           <EuiFlexGroup responsive wrap key={mainCategory}>
                            {Object.entries(subCategories).map(([category, techList]) => (
                                <EuiFlexGroup responsive key={category} direction="column" gutterSize="m" className={styles.category_group}>
                                    <EuiFlexItem>
                                        <EuiTitle size="m"><h2>{category}</h2></EuiTitle>
                                    </EuiFlexItem>
                                    <EuiFlexItem>
                                        <EuiPanel style={{ minHeight: '300px', backgroundColor: 'white' }}>
                                            {techList.map((tech,idx) => (
                                                <EuiFlexGroup wrap={false} responsive={false}  key={tech}  alignItems="center" className={styles.tech_item}>
                                                    <EuiFlexItem>
                                                        <EuiText color='black' style={{
                                                            fontWeight: 'bold'
                                                        }}>{tech}</EuiText>
                                                    </EuiFlexItem>
                                                    <EuiFlexItem>
                                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
                                                        <EuiButtonIcon aria-label='decreament' iconType={'minus'} size='s' onClick={() => decrementQuantity(tech)} />
                                                        <EuiText className="quantity-display">{selectedTechnologies[tech] || 0}</EuiText>
                                                        <EuiButtonIcon aria-label='increament' iconType={'plus'} onClick={() => incrementQuantity(tech)} />
                                                    </div>
                                                    </EuiFlexItem>
                                                </EuiFlexGroup>
                                            ))}
                                        </EuiPanel>
                                    </EuiFlexItem>
                                    <EuiSpacer size="m" />
                                </EuiFlexGroup>
                            ))}
                        </EuiFlexGroup>
                        </>
                    ))}
                </div>


                
                <div style={{paddingTop:"180px"}}>
                <div className={`${styles.slidingPanel} ${hasSelectedTechnologies ? styles.show : ''}`}>
                    <div className={styles.slidingPanelHeader}>
                        <EuiText><h4>You have selected these items:</h4></EuiText>
                        <EuiButtonIcon aria-label='selectedTechs' iconType="cross" onClick={() => setSelectedTechnologies({})} />
                    </div>
                    <div style={{display:'flex',flexGrow:'inherit',flexWrap:'wrap'}}>
                    {Object.entries(selectedTechnologies).map(
                        ([tech, quantity]) => quantity > 0 && (
                            <div key={tech} className={styles.selectedItem}>
                                <p style={{padding:'10px'}}>{tech}: {quantity}</p>
                                <EuiButtonIcon aria-label='removeTech' iconType="cross" onClick={() => removeTechnology(tech)} />
                            </div>
                        )
                    )}
                    </div>
                    <EuiButton aria-label='getPricing' color="warning" onClick={triggerEnquiryModal} >Get Pricing</EuiButton>
                </div>
                </div>
            </EuiPageBody>
        </EuiPage>
        </>
    );
};

export default Pricing;
