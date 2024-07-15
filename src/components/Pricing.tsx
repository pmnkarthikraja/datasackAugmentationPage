
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import {
    EuiButtonIcon,
    EuiButton,
    EuiPage,
    EuiPageBody,
    EuiText,
    EuiFlexGroup,
    EuiFlexItem,
    EuiPanel,
    EuiSpacer,
    EuiTitle,
} from '@elastic/eui';
import styles from '../styles/PricingMobile.module.css';

import EnquiryModal from './EnquiryModal';

export const technologies = {
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
        CMS: ['Dot Net DNN', 'WordPress', 'Alfresco', 'Drupal', 'Joomla'],
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


const PricingPage: FunctionComponent = () => {
    const [selectedTechnologies, setSelectedTechnologies] = useState<{ [key: string]: number }>({});
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [openCategory, setOpenCategory] = useState<string | null>(null);
    const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);
    const [isClient, setClient] = useState(false)
    const [paddingTop, setPaddingTop] = useState<number>(0);
    const slidingPanelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setClient(true)
    }, [])

    const toggleCategory = (category: string) => {
        setOpenCategory((prev) => (prev === category ? null : category));
        setOpenSubCategory(null);
    };

    const toggleSubCategory = (subcategory: string) => {
        setOpenSubCategory((prev) => (prev === subcategory ? null : subcategory));
    };

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

    const triggerEnquiryModal = () => {
        setIsModalOpen((prev) => !prev);
    };


    const hasSelectedTechnologies = Object.values(selectedTechnologies).some((quantity) => quantity > 0);

    useEffect(() => {
        if (slidingPanelRef.current) {
            console.log("sliding ref", slidingPanelRef)
            setPaddingTop(slidingPanelRef.current.clientHeight);
        }
    }, [hasSelectedTechnologies]);

    return (
        <EuiPage style={{ background: 'transparent' }}>
            <EuiPageBody>
                <div className="benefit-left-section" style={{ paddingTop: '50px', marginBottom: '-50px' }}>
                    <h2>Craft your own<span style={{ color: 'orange' }}> pricing</span></h2>
                </div>
                <div className={styles.pricing_web_view}>
                    {isClient && <EnquiryModal closeModal={triggerEnquiryModal} isOpen={isModalOpen} selectedTechnologies={selectedTechnologies} />}
                    <div style={{ alignItems: 'center' }}>
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
                                                <EuiPanel style={{ minHeight: '300px', backgroundColor: '#E8E6E0' }}>
                                                    {techList.map((tech, idx) => (
                                                        <EuiFlexGroup wrap={false} responsive={false} key={tech} alignItems="center" className={styles.tech_item} >
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
                </div>

                <div className={styles.pricing_mobile_view}>
                    {isModalOpen && <EnquiryModal closeModal={triggerEnquiryModal} isOpen={isModalOpen} selectedTechnologies={selectedTechnologies} />}
                    <div className={styles.pricingContainer}>
                        {Object.entries(technologies).map(([mainCategory, subCategories]) => (
                            <div key={mainCategory} className={styles.mainCategory}>
                                <div
                                    className={`${styles.categoryHeader} ${openCategory === mainCategory ? styles.active : ''}`}
                                    onClick={() => toggleCategory(mainCategory)}
                                >

                                    <h3>{mainCategory}</h3>
                                    <EuiButtonIcon
                                        aria-label={`toggle-${mainCategory}`}
                                        iconType={openCategory === mainCategory ? 'arrowDown' : 'arrowRight'}
                                        className={styles.downIcon}
                                    />
                                </div>
                                {openCategory === mainCategory && (

                                    <div className={styles.subCategory}>



                                        {Object.entries(subCategories).map(([category, techList]) => (
                                            <div key={category} className={styles.subCategoryWrapper}>
                                                <div
                                                    className={`${styles.subCategoryHeader} ${openSubCategory === category ? styles.active : ''
                                                        }`}
                                                    onClick={() => toggleSubCategory(category)}
                                                >

                                                    <p>{category}</p>

                                                    <EuiButtonIcon
                                                        aria-label={`toggle-${category}`}
                                                        iconType={openSubCategory === category ? 'arrowDown' : 'arrowRight'}
                                                        className={styles.downIcon}
                                                    />
                                                </div>
                                                {openSubCategory === category && (
                                                    <div className={styles.techList}>
                                                        {techList.map((tech) => (
                                                            <div key={tech} className={styles.techItem}>
                                                                <EuiText color="black" style={{ fontWeight: 'bold' }}>
                                                                    {tech}
                                                                </EuiText>
                                                                <div className={styles.quantityControls}>
                                                                    <EuiButtonIcon
                                                                        aria-label={`decrement-${tech}`}
                                                                        iconType={'minus'}
                                                                        size="s"
                                                                        onClick={() => decrementQuantity(tech)}
                                                                    />
                                                                    <EuiText className={styles.quantityDisplay}>
                                                                        {selectedTechnologies[tech] || 0}
                                                                    </EuiText>
                                                                    <EuiButtonIcon
                                                                        aria-label={`increment-${tech}`}
                                                                        iconType={'plus'}
                                                                        onClick={() => incrementQuantity(tech)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}



                                    </div>
                                )}
                            </div>

                        ))}
                    </div>
                </div>

                <div style={{ paddingTop: `${paddingTop * 1.25}px` }}>
                    <div ref={slidingPanelRef} className={`${styles.slidingPanel} ${hasSelectedTechnologies ? styles.show : ''}`}>
                        <div className={styles.slidingPanelHeader}>
                            <EuiText><h4>You have selected these items:</h4></EuiText>
                            <EuiButtonIcon aria-label='selectedTechs' iconType="cross" onClick={() => setSelectedTechnologies({})} />
                        </div>
                        <div style={{ display: 'flex', flexGrow: 'inherit', flexWrap: 'wrap', maxHeight: '200px', overflow: 'scroll' }}>
                            {Object.entries(selectedTechnologies).map(
                                ([tech, quantity]) => quantity > 0 && (
                                    <div key={tech} className={styles.selectedItem}>
                                        <p style={{ padding: '10px' }}>{tech}: {quantity}</p>
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

    );
};

export default PricingPage;






