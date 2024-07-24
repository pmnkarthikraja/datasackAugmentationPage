import {
  EuiModal,
  EuiModalBody,
  EuiModalHeader,
  useGeneratedHtmlId
} from '@elastic/eui';
import { Fragment, FunctionComponent } from 'react';
import BookingForm from './BookingForm';
import { CuratedTechnologyData } from './Pricing';
import { CustomTech } from './CustomPricing';

export interface EnquiryModalProps {
  isOpen: boolean
  closeModal: (isClose: boolean) => void
  selectedTechnologies?: CuratedTechnologyData
  selectedRawTechData?: { [key: string]: number }
  customTechs: CustomTech[]
}

const EnquiryModal: FunctionComponent<EnquiryModalProps> = ({
  isOpen,
  closeModal,
  selectedTechnologies,
  selectedRawTechData,
  customTechs
}) => {
  const modalTitleId = useGeneratedHtmlId();


  return (
    <Fragment>
      {isOpen && (
        <EuiModal
          aria-labelledby={modalTitleId}
          onClose={() => closeModal(true)}
          style={{ minWidth: '80vw', minHeight: '90vh', marginTop: '100px' }}
        >
          <EuiModalHeader>
          </EuiModalHeader>
          <EuiModalBody >
            <BookingForm selectedTechnologies={selectedTechnologies} selectedRawTechData={selectedRawTechData} customTechs={customTechs} />
          </EuiModalBody>
        </EuiModal>
      )}
    </Fragment>
  );
};

export default EnquiryModal