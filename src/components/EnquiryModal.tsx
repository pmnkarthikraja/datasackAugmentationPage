import {
  EuiModal,
  EuiModalBody,
  EuiModalHeader,
  useGeneratedHtmlId
} from '@elastic/eui';
import { FunctionComponent } from 'react';
import BookingForm from './BookingForm';

export interface EnquiryModalProps {
  isOpen: boolean
  closeModal: (isClose: boolean) => void
  selectedTechnologies?:{ [key: string]: number }
}

const EnquiryModal: FunctionComponent<EnquiryModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const modalTitleId = useGeneratedHtmlId();

  return (
    <>
      {isOpen && (
        <EuiModal
          aria-labelledby={modalTitleId}
          onClose={() => closeModal(true)}
          style={{ minWidth: '80vw', minHeight: '90vh', marginTop: '100px' }}
        >
          <EuiModalHeader>
          </EuiModalHeader>
          <EuiModalBody >
            <BookingForm  />
          </EuiModalBody>
        </EuiModal>
      )}
    </>
  );
};

export default EnquiryModal