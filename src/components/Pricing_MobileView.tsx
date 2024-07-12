

import {
    EuiButton,
    EuiFlexGroup,
    EuiFlexItem,
    EuiPage,
    EuiPageBody,
    EuiPopover,
    EuiPopoverTitle,
    EuiSpacer,
    EuiText,
    EuiTitle,
    EuiFilterGroup,
    EuiFilterButton,
    EuiSelectable,
} from '@elastic/eui';
import React, { FunctionComponent, useEffect, useState } from 'react';

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
        Testing: ['JMeter', 'JUnit', 'Mercury', 'Selenium', 'SoapUI', 'Regression Testing'],
        'Project Management': ['MS Project', 'SmartSheet'],
    },
};

const PricingMobileView: FunctionComponent = () => {
    const [selectedTechnologies, setSelectedTechnologies] = useState<{ [key: string]: string[] }>({});
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isClient, setClient] = useState(false)

    console.log("selected technologies mobile: ",selectedTechnologies)

    useEffect(() => {
        setClient(true)
    }, [])

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setIsPopoverOpen(true);
    };

    const handleItemChange = (options: any) => {
        const selectedItems = options
            .filter((option: any) => option.checked === 'on')
            .map((option: any) => option.label);

        setSelectedTechnologies((prev) => ({
            ...prev,
            [selectedCategory!]: selectedItems,
        }));
    };

    const closePopover = () => {
        setIsPopoverOpen(false);
        setSelectedCategory(null);
    };

    return (
        <EuiPage style={{ background: 'transparent' }}>
            <EuiPageBody>
                {Object.entries(technologies).map(([mainCategory, subCategories]) => (
                    <EuiFlexGroup key={mainCategory} direction="column" gutterSize="m" className="category-group">
                        <EuiFlexItem>
                            <EuiTitle size="m"><h2>{mainCategory}</h2></EuiTitle>
                        </EuiFlexItem>
                       {isClient && <EuiFlexGroup direction="column" gutterSize="m">
                            {Object.entries(subCategories).map(([subCategory, techList]) => (
                                <EuiFlexItem key={subCategory}>
                                    <EuiPopover
                                        button={
                                            <EuiFilterGroup>
                                                <EuiFilterButton
                                                    iconType="arrowDown"
                                                    onClick={() => handleCategoryChange(subCategory)}
                                                    isSelected={selectedCategory === subCategory && isPopoverOpen}
                                                >
                                                    {subCategory}
                                                </EuiFilterButton>
                                            </EuiFilterGroup>
                                        }
                                        isOpen={selectedCategory === subCategory && isPopoverOpen}
                                        closePopover={closePopover}
                                        ownFocus
                                    >
                                        <div style={{ width: '300px' }}>
                                            <EuiPopoverTitle>Select {subCategory}</EuiPopoverTitle>
                                            <EuiSelectable
                                                searchable
                                                options={techList.map((tech) => ({
                                                    label: tech,
                                                    checked: selectedTechnologies[selectedCategory!]?.includes(tech)
                                                        ? 'on'
                                                        : undefined,
                                                }))}
                                                onChange={handleItemChange}
                                            >
                                                {(list) => list}
                                            </EuiSelectable>
                                        </div>
                                    </EuiPopover>
                                </EuiFlexItem>
                            ))}
                        </EuiFlexGroup>}
                    </EuiFlexGroup>
                ))}
                <EuiSpacer size="m" />
                <EuiButton color="warning">Get Pricing</EuiButton>
                <EuiSpacer size="m" />
                <EuiText>
                    <h4>Selected Technologies</h4>
                    {Object.entries(selectedTechnologies).map(([category, items]) =>
                        items.map((item) => <p key={item}>{item} ({category})</p>)
                    )}
                </EuiText>
            </EuiPageBody>
        </EuiPage>
    );
};

export default PricingMobileView;
