import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeader,
  EuiImage,
  EuiButtonIcon,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiTitle,
  EuiText,
  useEuiMaxBreakpoint,
} from '@elastic/eui';
import styled from '@emotion/styled';
import { Fragment, FunctionComponent, useState } from 'react';
import EnquiryModal from './EnquiryModal';
import Image from 'next/image';

const HeaderComponent: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

  const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between; /* Space between logo and links */
    align-items: center;
    width: 100%;
    background-color: transparent;
    padding: 10px;
  `;

  const HeaderLink = styled.div`
    color: white;
    font-weight: light;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    padding: 10px;
    font-size: 14px;
    cursor:pointer;

    &:hover {
      background-color: rgba(143, 133, 200, 0.885);
    }
  `;

  const menuIcon = (
    <EuiButtonIcon
      iconType="menu"
      onClick={() => setIsFlyoutVisible(!isFlyoutVisible)}
      aria-label="Toggle menu"
      style={{ background: 'transparent', marginRight: '10px',color:'white' }}
    />
  );

  return (
    <Fragment>
      <EuiHeader style={{ background: ' rgba(0, 0, 0, 0.705)', border: 'none', height: '60px' }} position="fixed">
        <HeaderContainer>
          <EuiFlexItem grow={false} className="logo-item">
            <Image width={150} height={150}  className='logo-item' src='/logo.png' alt='logo' />
          </EuiFlexItem>
          <EuiFlexItem grow={false} className="nav-items">
            <EuiFlexGroup id='menu-icon' >
            <EuiFlexItem grow={false}>
                {menuIcon}
               {isFlyoutVisible&& <EuiFlyout
                  onClose={() => setIsFlyoutVisible(false)}
                  aria-labelledby="flyoutTitle"
                  size="xs"
                  id="menu-flyout"
                  hideCloseButton
                  style={{background:'black'}}
                >
                  <EuiFlyoutHeader >
                  </EuiFlyoutHeader>
                  <EuiFlyoutBody>
                    <EuiText>
                      <p><HeaderLink onClick={() => {
                        document.getElementById('window-pricing')?.scrollIntoView({ behavior: 'smooth' })
                      }}>Get Pricing</HeaderLink></p>
                      <p><HeaderLink onClick={() => {
                        document.getElementById('managed-service-section')?.scrollIntoView({ behavior: 'smooth' })
                      }}>Managed Services</HeaderLink></p>
                      <p><HeaderLink onClick={() => {
                        setIsModalOpen(true)
                        setIsFlyoutVisible(false)
                      }}>Call Us</HeaderLink></p>
                    </EuiText>
                  </EuiFlyoutBody>
                </EuiFlyout>}
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiFlexGroup responsive={false} wrap={true} justifyContent="flexEnd" id='menu-items'>
              <EuiFlexItem  grow={false}>
                <HeaderLink onClick={() => {
                  document.getElementById('window-pricing')?.scrollIntoView({ behavior: 'smooth' })
                }}>Get <span style={{color:'orange',fontWeight:'bold'}}>Pricing</span></HeaderLink>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <HeaderLink onClick={() => {
                  document.getElementById('managed-service-section')?.scrollIntoView({ behavior: 'smooth' })
                }}>Managed Services</HeaderLink>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <HeaderLink onClick={() => {
                  setIsModalOpen(true)
                }}>Call Us</HeaderLink>
              </EuiFlexItem>
            
            </EuiFlexGroup>
          </EuiFlexItem>
        </HeaderContainer>
      </EuiHeader>

      <EnquiryModal isOpen={isModalOpen} closeModal={(isClosed) => { setIsModalOpen(!isClosed) }} customTechs={[]} />
    </Fragment>
  );
};

export default HeaderComponent;
