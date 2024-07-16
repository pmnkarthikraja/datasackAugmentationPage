import React, { useState } from 'react';
import { EuiModal, EuiModalHeader, EuiModalBody, EuiModalFooter, EuiButton, EuiIcon, EuiFlexItem, EuiFlexGroup, EuiText } from '@elastic/eui';

interface ModalProps {
  onClose: () => void;
  isSuccess:boolean;
}

const SuccessModal: React.FC<ModalProps> = ({ onClose,isSuccess }) => {

  const closeModal = () => {
    onClose();
  };

  return (
    <EuiModal onClose={closeModal} initialFocus="[name=popswitch]">
      <EuiModalHeader>
        <EuiFlexGroup >
        {isSuccess && <EuiText >Thank you for contacting us!</EuiText>}
        {!isSuccess && <EuiText >Error Occured!</EuiText>}
        </EuiFlexGroup>
      </EuiModalHeader>

      <EuiModalBody>
     {isSuccess && <EuiFlexGroup >
        <EuiText>Your email has been sent successfully.</EuiText>
        <EuiIcon type="check" size="l" color="success"  />
        </EuiFlexGroup>}
    {!isSuccess && <EuiFlexGroup >
    <EuiText>Sending Email Failed. Please Try Again Later!</EuiText>
    <EuiIcon type="cross" size="l" color="danger"  />
    </EuiFlexGroup>}
      </EuiModalBody>

      <EuiModalFooter>
        <EuiButton onClick={closeModal} fill>
          Close
        </EuiButton>
      </EuiModalFooter>
    </EuiModal>
  );
};

export default SuccessModal;
