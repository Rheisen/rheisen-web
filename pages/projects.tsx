import React from 'react';

import Layout from 'components/layout';
import SplashHeader from 'components/splash-header';
import InfoCardSection from 'components/info-card-section';

const Projects: React.FC = () => {
  return(
    <Layout>
        <SplashHeader>
          <h2>Projects</h2>
        </SplashHeader>
        <InfoCardSection git={true}>
          <p>Content coming soon! In the meantime, please check out my Github page!</p>
        </InfoCardSection>
    </Layout>
  );
};

export default Projects;
