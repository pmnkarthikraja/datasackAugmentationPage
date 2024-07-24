import { EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";
import { useEffect, useRef } from 'react';
import styles from '../styles/ManagedServices.module.css';

const ManagedServices = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.remove(styles.showDescription);
            } else {
              entry.target.classList.add(styles.showDescription);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      cardRefs.current.forEach(card => {
        if (card) observer.observe(card);
      });

      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        cardRefs.current.forEach(card => {
          if (card) observer.unobserve(card);
        });
      };
    }
  }, []);

  return (
    <div className={styles.page} id='managed-service-section'>
      <div className={styles.showBigTitle}>
        <EuiTitle>
          <h2 style={{ color: 'black', textAlign: 'center', fontSize: '45px' }}>
            Managed <span style={{ color: 'orange' }}>Services</span>
          </h2>
        </EuiTitle>
        <EuiSpacer />
        <EuiText>
          <p style={{ textAlign: 'center', fontSize: '20px' }}>
            DataSack assembles your dream team on-demand, providing expertise without the hassle of full-time hiring. Contract resources as needed for specific projects or skills.
          </p>
        </EuiText>
      </div>

      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />

      <EuiFlexGroup className={styles.container} responsive={true} wrap justifyContent="center" alignItems="center">
        {[
          { cardIndex: 0, title: '1. Talent Sourcing', description: 'Recruiting skilled individuals from our network, conducting interviews, and assessing qualifications.' },
          { cardIndex: 1, title: '2. Onboarding & Integration', description: 'Ensuring contracted resources understand your culture, goals, and expectations.' },
          { cardIndex: 2, title: '3. Performance Monitoring', description: 'Tracking resource performance throughout the contract to meet your expectations.' },
        ].map((card, index) => (
          <EuiFlexItem key={index}>
            <div ref={el => { cardRefs.current[card.cardIndex] = el; }} className={styles.card}>
              <div className={`${styles.face} ${styles.face1}`}>
                <div className={styles.content}>
                  <span className={styles.stars}></span>
                  <p className={styles.description} style={{ color: 'white', fontWeight: '300', fontSize: '18px' }}>{card.description}</p>
                </div>
              </div>
              <div className={`${styles.face} ${styles.face2}`}>
                <h2>{card.title}</h2>
              </div>
            </div>
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>
      <EuiSpacer size="xl" />
      <EuiFlexGroup className={styles.container} responsive={true} wrap justifyContent="center" alignItems="center">
        {[
          { cardIndex: 3, title: '4. Administrative Support', description: 'Managing payroll, benefits, work permits, logistics, and other HR-related tasks.' },
          { cardIndex: 4, title: '5. Problem Resolution', description: 'Addressing issues and resolving conflicts to ensure smooth communication.' },
          { cardIndex: 5, title: '6. Continuous Communication', description: 'Maintaining open communication with clients and contracted resources to promptly address issues and keep everyone aligned.' },
        ].map((card, index) => (
          <EuiFlexItem key={index}>
            <div ref={el => { cardRefs.current[card.cardIndex] = el; }} className={styles.card}>
              <div className={`${styles.face} ${styles.face1}`}>
                <div className={styles.content}>
                  <span className={styles.stars}></span>
                  <p className={styles.description} style={{ color: 'white', fontWeight: '300', fontSize: '18px' }}>{card.description}</p>
                </div>
              </div>
              <div className={`${styles.face} ${styles.face2}`}>
                <h2>{card.title}</h2>
              </div>
            </div>
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>
    </div>
  );
};

export default ManagedServices;
