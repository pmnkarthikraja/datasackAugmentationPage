import { EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiHorizontalRule, EuiImage, EuiPanel, EuiSkeletonCircle, EuiSkeletonLoading, EuiSkeletonRectangle, EuiSkeletonText, EuiSkeletonTitle, EuiSpacer, EuiText } from '@elastic/eui';
import emailJs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Fragment, FunctionComponent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../styles/BookingForm.module.css';
import { CuratedTechnologyData, technologies } from './Pricing';
import SuccessModal from './SuccessModal';
import Image from 'next/image';

const flattenTechnologyData = (curatedData: any, selectedData: any) => {
  const result = [];

  for (const mainCategory in curatedData) {
    const subcategories = [];

    for (const subCategory in curatedData[mainCategory]) {
      const items = curatedData[mainCategory][subCategory].filter((item: any) => selectedData[item] !== undefined);

      if (items.length > 0) {
        subcategories.push({
          subcategory: subCategory,
          items: items.map((item: any) => `${item} (${selectedData[item]})`).join(', '),
        });
      }
    }

    if (subcategories.length > 0) {
      result.push({
        mainCategory,
        subcategories,
      });
    }
  }
  return result;
};
interface EnquiryForm {
  industry: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  requirements: string;
  nda: boolean;
}

export interface BookingFormProps {
  selectedTechnologies?: CuratedTechnologyData;
  selectedRawTechData?: { [key: string]: number }
}

const BookingForm: FunctionComponent<BookingFormProps> = ({
  selectedTechnologies,
  selectedRawTechData
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<EnquiryForm>();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [isSuccess, setSuccess] = useState(false)
  const [isFailed, setIsFailed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const toggleCategory = (mainCategory: string) => {
    if (expandedCategories.includes(mainCategory)) {
      setExpandedCategories(expandedCategories.filter(cat => cat !== mainCategory));
    } else {
      setExpandedCategories([...expandedCategories, mainCategory]);
    }
  };

  const onSubmit: SubmitHandler<EnquiryForm> = async (data: EnquiryForm) => {
    const publicKey = "28Jy3xAgZVdVfJM4A"
    const serviceId = "service_w3n2h6s"
    const templateIdWithGreet = "template_l6jxhcz"
    const templateIdWithTechnologies = "template_fzbseij"

    const formData = {
      industry: data.industry,
      name: data.name,
      email: data.email,
      phone: data.phone,
      date: data.date,
      requirements: data.requirements,
      nda: data.nda ? 'Yes' : 'No',
    };

    try {
      if (selectedRawTechData) {
        setIsLoading(true)
        const technologyArray = flattenTechnologyData(technologies, selectedRawTechData)
        const templateParams = {
          ...formData,
          technologies: technologyArray,
        };
        await emailJs.send(serviceId, templateIdWithTechnologies, templateParams, {
          publicKey
        })
        setIsLoading(false)
        setSuccess(true)
      }
      else {
        setIsLoading(true)
        await emailJs.send(serviceId, templateIdWithGreet, formData, {
          publicKey
        })
        setIsLoading(false)
        setSuccess(true)
      }
    } catch (e: any) {
      setIsLoading(false)
      if (e instanceof EmailJSResponseStatus)
        setSuccess(false)
      setIsFailed(true)
      console.log("error on sending mail", e.text, e.status)
    }
  };

  const closeModal = () => {
    setSuccess(false);
    setIsFailed(false)
  };


  const brandLogos =[
    {brandUrl:"/al_rajhi_bank.png", alt:"al_rajhi"},
    {brandUrl:"/alinma.png", alt:"alinma"},
    {brandUrl:"/bank_albilad.png", alt:"bank_albilad"},
  ]


  return (

    <EuiSkeletonLoading
      isLoading={isLoading}
      contentAriaLabel="Demo loading section"
      loadingContent={
        <EuiPanel>
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiSkeletonCircle size="s" />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiSkeletonTitle size="l" />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="s" />
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiSkeletonText lines={5} />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiSkeletonRectangle width="100%" height={148} />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiSkeletonCircle size="s" />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiSkeletonTitle size="l" />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="s" />
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiSkeletonText lines={5} />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiSkeletonRectangle width="100%" height={148} />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiSkeletonCircle size="s" />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiSkeletonTitle size="l" />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="s" />
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiSkeletonText lines={5} />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiSkeletonRectangle width="100%" height={148} />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>
      }
      loadedContent={
        <div className={styles.container}>
          <div className={styles.formSection}>
            <h2 style={{ fontSize: '35px', fontWeight: 'bold' }}>
              <span style={{ color: 'orange' }}>Book</span> a Call
            </h2>
            <p style={{ fontWeight: 'bold' }}>
              Coffee Break with DataSack? Schedule a Call About Your Tech Needs!
            </p>

            {isSuccess && <SuccessModal isSuccess={true} onClose={closeModal} />}
            {isFailed && <SuccessModal isSuccess={false} onClose={closeModal} />}

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="industry">Select your industry</label>
                <select id="industry" {...register('industry', { required: 'Industry is required' })}>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                </select>
                {errors.industry && <label className={styles.error}>{errors.industry.message}</label>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <label className={styles.error}>{errors.name.message}</label>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Corporate E-mail</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: 'Email is required', pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'Invalid email address' } })}
                />
                {errors.email && <label className={styles.error}>{errors.email.message}</label>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { required: 'Phone is required' })}
                />
                {errors.phone && <label className={styles.error}>{errors.phone.message}</label>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="date">Date & time</label>
                <input
                  type="datetime-local"
                  id="date"
                  {...register('date', { required: 'Date and time are required' })}
                />
                {errors.date && <label className={styles.error}>{errors.date.message}</label>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="requirements">Please describe your project requirements</label>
                <textarea
                  id="requirements"
                  {...register('requirements', { required: 'Project requirements are required' })}
                ></textarea>
                {errors.requirements && <label className={styles.error}>{errors.requirements.message}</label>}
              </div>

              <div className={`${styles.formGroup} ${styles.formgroup_protect}`}>
                <div >
                  <input
                    type="checkbox"
                    id="nda"
                    {...register('nda')}
                  />
                  <label htmlFor="nda">I want to protect my data by signing an NDA.</label>
                  <span style={{ marginBottom: '5px' }} title="A Non-Disclosure Agreement (NDA) is a confidentiality agreement.">&#x1F6C8;</span>
                </div>
              </div>

              <div className={styles.buttonContainer}>
                <button type="submit">Book Now</button>
              </div>
            </form>
          </div>
          <div className={styles.contactSection}>
            <div style={{ marginLeft: '0px' }}>
              <h3 >
                <span style={{ fontWeight: 'bold', fontSize: '25px', lineHeight: '1.5' }}>Free Consultation</span> - Level Up Your IT with DataSack Experts!
              </h3>

              {selectedTechnologies && <Fragment>
                <h3>Selected Technologies:</h3>
                {Object.entries(selectedTechnologies).map(([mainCategory, subCategories]) => (
                  <div key={mainCategory} className={styles.categoryWrapper}>
                    <div onClick={() => toggleCategory(mainCategory)} className={styles.mainCategory}>
                      <h2>{mainCategory}</h2>
                      <EuiButtonIcon
                        aria-label={`Toggle ${mainCategory}`}
                        iconType={expandedCategories.includes(mainCategory) ? 'arrowDown' : 'arrowRight'}
                      />
                    </div>

                    {expandedCategories.includes(mainCategory) && (
                      <div className={''}>
                        {Object.entries(subCategories).map(([subCategory, count], index) => (
                          <div key={index} className={styles.subCategory}>
                            <EuiText size='xs'>{subCategory}: {count}</EuiText>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}</Fragment>}



              <EuiHorizontalRule size='half' />
              <h3 className='contact-us'>Contact us</h3>
              <p>+966-34221121</p>
              <p className='email-link' >sales@datasack.in</p>
              <div style={{ height: '20px' }}></div>
              <h4>Customers who trust us</h4>

                {brandLogos.map((logo,idx)=>(
              <Image width={100} height={80} src={logo.brandUrl} alt={logo.alt} key={idx}  style={{ width: '100px', height: 'auto', padding: '10px', cursor: 'pointer' }} />
                ))}
            </div>
          </div>
        </div>
      }
    />




  );
};

export default BookingForm;
