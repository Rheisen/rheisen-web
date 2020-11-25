import React from 'react';
import { Send } from 'react-feather';

import Layout from 'components/layout';
import SplashHeader from 'components/splash-header';
import InfoCardSection from 'components/info-card-section';

import styles from 'styles/pages/contact.module.scss';

const Contact: React.FC = () => {
  return (
    <Layout pageTitle={'Rheisen X Dennis - Contact Me'}>
      <SplashHeader>
        <h2>Contact Me</h2>
      </SplashHeader>
      <InfoCardSection email={true} linkedin={true}>
        <div className={styles.sendIconContainer}>
          <Send className={styles.sendIcon} size={28} />
        </div>
        <p>
          Hey there! Getting in touch with me is pretty easy - just drop me an email and I&apos;ll try to respond within
          two days. If you would like to contact me more formally, feel free to reach out to me on LinkedIn. I
          don&apos;t use any other forms of social media at the moment, so I&apos;m afraid that&apos;s it for getting in
          touch with me. Hope to hear from you soon!
        </p>
      </InfoCardSection>
    </Layout>
  );
};

export default Contact;
