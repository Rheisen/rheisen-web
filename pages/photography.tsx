import React from 'react';

import Layout from 'components/layout';
import SplashHeader from 'components/splash-header';
import Photo from 'page-components/photography/photo';

import styles from 'styles/pages/photography.module.scss';

const Photography: React.FC = () => {
  return (
    <Layout>
      <SplashHeader>
        <h2>Photography</h2>
      </SplashHeader>

      <section className={styles.photographyWrapper}>
        <div>
          <Photo name="clocktower" width={5737} height={3825} alt="Evening picture of a clocktower in Porto" />
          <Photo name="red-light" width={4000} height={6000} alt="Kabir in a black t-shirt in red lighting" />
          <Photo name="white-nike" width={1982} height={2048} alt="White Nike shoes in black and white" />
          <Photo name="fog" width={6000} height={4000} alt="Vermont mountains in Fall blanketed with morning fog" />
          <Photo name="seaport-sunset" width={6000} height={4000} alt="Sunset at Boston seaport with Kabir and Gabe" />
          <Photo name="ymca" width={5737} height={4000} alt="YMCA sign behind tree branches in black and white" />
          <Photo name="walk" width={6000} height={4000} alt="Pedestrian walk sign caught between walk and stop" />
          <Photo name="lookout" width={2501} height={2840} alt="Gabe and Kabir looking out over the water at sunset" />
        </div>
        <div>
          <Photo name="balance" width={1400} height={2100} alt="Petros balancing on a foothold in black and white" />
          <Photo name="crystal" width={2026} height={1350} alt="Crystal chandelier behind glass with diffuse clouds" />
          <Photo name="angel" width={2743} height={3807} alt="Statue of an angel in Retiro park" />
          <Photo
            name="incense"
            width={4140}
            height={2760}
            alt="Candle turned into an incense holder bathed in warm light"
          />
          <Photo name="evening" width={6000} height={4000} alt="String lights in Porto under a purple evening sky" />
          <Photo name="bird" width={1305} height={1305} alt="Bird captured up close with dark blue eyes" />
          <Photo name="rastro" width={5215} height={3477} alt="Behind a storefront at El Rastro market in Madrid" />
          <Photo name="fountain" width={5974} height={3983} alt="High contrast fountain with statues in Retiro park" />
        </div>
        <div>
          <Photo name="pik" width={3520} height={3711} alt="Nik in front of leaves at golden hour" />
          <Photo name="shades" width={2484} height={3222} alt="Gabe resting with a neck pillow and shades indoors" />
          <Photo
            name="look"
            width={4394}
            height={4000}
            alt="Gabe and Kabir moving on the rocks by the water at sunset"
          />
          <Photo
            name="morning"
            width={5906}
            height={3937}
            alt="Vermont fall trees and mountain covered in morning fog"
          />
          <Photo
            name="citgo"
            width={2048}
            height={1572}
            alt="Dakila putting up a peace sign walking towards the Citgo sign"
          />
          <Photo name="palace" width={5961} height={3721} alt="Glass palace at sunset in Retiro park" />
          <Photo name="pepe" width={4589} height={3703} alt="Tio Pepe sign in Sol at night" />
          <Photo
            name="headlights"
            width={2048}
            height={1892}
            alt="Dakila walking past blurry car headlights in black and white"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Photography;
