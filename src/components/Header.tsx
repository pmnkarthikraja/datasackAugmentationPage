"use client";
import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiHeader,
    EuiHeaderLink,
    EuiImage,
    useEuiMaxBreakpoint,
    useEuiMinBreakpoint
} from '@elastic/eui';
import styled from '@emotion/styled';
import { Fragment, FunctionComponent, useState } from 'react';
import EnquiryModal from './EnquiryModal';

const HeaderComponent: FunctionComponent = () => {
    const [isModalOpen,setIsModalOpen]=useState(false)

    const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    color:black;
    text-align:center;
    align-items:center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  `;

    const HeaderLink = styled(EuiHeaderLink)`
    color: white;
    font-weight: bolder;
    text-transform: uppercase;
    margin: 0 10px;
    border:none;
    transition: color 0.3s ease;
    padding-right:10px;
    background:rgba(143, 133, 200, 0.205);
    padding-left:10px;
    text-decoration:none;
    font-size:18px;

  &:hover {
    background-color:rgba(143, 133, 200, 0.885);
  }

     ${useEuiMaxBreakpoint('m')} {
      &{
        font-size:10px;
      }
    }

    ${useEuiMinBreakpoint('m')} {
     &{
        font-size:18px;
     }
    }
  `;
  
    return (
     <Fragment>
            <EuiHeader style={{ background: 'transparent',border:'none',height:'60px' }}  position="fixed" >
                <HeaderContainer>
                    <EuiFlexItem grow={false} className="logo-item">
                      <EuiImage className='logo-item' src='/logo.png' alt='logo' style={{width:'150px'}} />
                    </EuiFlexItem>
                    <EuiFlexItem className="nav-items">
                        <EuiFlexGroup responsive={false} wrap={false} justifyContent="flexEnd">
                        
                            <EuiFlexItem  grow={false}>
                                <HeaderLink  onClick={() => {
                                    document.getElementById('window-pricing')?.scrollIntoView({ behavior: 'smooth' })
                                }} >Get Pricing</HeaderLink>
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

            <EnquiryModal isOpen={isModalOpen} closeModal={(isClosed)=>{setIsModalOpen(!isClosed)}}/>
       </Fragment>
    );
};

export default HeaderComponent;
