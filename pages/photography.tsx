import React from 'react';

import Layout from 'components/layout';
import SplashHeader from 'components/splash-header';
import Photo from 'page-components/photography/photo';

import styles from 'styles/pages/photography.module.scss';

const Photography: React.FC = () => {
  return(
    <Layout>
      <SplashHeader>
        <h2>Photography</h2>
      </SplashHeader>

      <section className={styles.photographyWrapper}>
        <div>
          <Photo imageName='clocktower' alt='Porto Clocktower' />
          <Photo imageName='red-light' alt='Kabir in Red Light' />
          <Photo imageName='white-nike' alt='White Nikes' />
          <Photo imageName='fog' alt='Fog' />
          <Photo imageName='seaport-sunset' alt='Seaport Sunset' />
          <Photo imageName='ymca' alt='YMCA' />
          <Photo imageName='walk' alt='Walk' />
          <Photo imageName='lookout' alt='Lookout' />
        </div>
        <div>
          <Photo imageName='balance' alt='Balance' />
          <Photo imageName='crystal' alt='Crystal' />
          <Photo imageName='angel' alt='Angel' />
          <Photo imageName='incense' alt='Incense' />
          <Photo imageName='evening' alt='Evening' />
          <Photo imageName='bird' alt='Bird' />
          <Photo imageName='rastro' alt='Rastro' />
          <Photo imageName='fountain' alt='Fountain' />
        </div>
        <div>
          <Photo imageName='pik' alt='Pik' />
          <Photo imageName='shades' alt='Shades' />
          <Photo imageName='look' alt='Look' />
          <Photo imageName='morning' alt='Morning' />
          <Photo imageName='citgo' alt='Citgo' />
          <Photo imageName='palace' alt='Palace' />
          <Photo imageName='pepe' alt='Pepe' />
          <Photo imageName='headlights' alt='Headlights' />
        </div>
      </section>

    </Layout>
  );
};

export default Photography;
