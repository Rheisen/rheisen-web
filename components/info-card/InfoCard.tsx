import React from 'react';
import { MapPin, GitHub, Gitlab, Mail, Linkedin, Download } from 'react-feather';

import styles from './infoCard.module.scss';

export interface InfoCardProps {
  location?: boolean,
  email?: boolean,
  git?: boolean,
  linkedin?: boolean,
  resume?: boolean,
}

const defaultProps: InfoCardProps = {
  location: true,
  email: true,
  git: false,
  linkedin: false,
  resume: false,
}

export const InfoCard: React.FC<InfoCardProps> = (props = defaultProps) => {
  return(
    <aside>
      <section className={styles.infoCard}>
        <img src={'/images/profile.jpg'} alt='Rheisen Dennis' />
        <div className={styles.fullLineBreak} />
        <div className={styles.partialLineBreak} />
        {
          props.location ? (
            <div className={styles.iconInfoContainer}>
              <MapPin className={styles.pinIcon} size={24} />
              <span>Boston, MA</span>
            </div>
          ) : null
        }
        {
          props.email ? (
            <div className={styles.iconInfoContainer}>
              <Mail className={styles.mailIcon} size={24} />
              <span>rheisen.dennis@protonmail.com</span>
            </div>
          ) : null
        }
        {
          props.linkedin ? (
              <div className={styles.iconInfoContainer}>
                <Linkedin className={styles.linkedinIcon} size={24} />
                <a href='https://linkedin.com/in/rheisen-dennis' target='_blank' rel='noopener noreferrer'>
                  linkedin.com/in/rheisen-dennis
                </a>
              </div>
          ) : null
        }
        {
          props.git ? (
            <React.Fragment>
              <div className={styles.iconInfoContainer}>
                <GitHub className={styles.githubIcon} size={24} />
                <a href='https://github.com/rheisen' target='_blank' rel='noopener noreferrer'>
                  github.com/rheisen
                </a>
              </div>
              <div className={styles.iconInfoContainer}>
                <Gitlab className={styles.gitlabIcon} size={24} />
                <a href='https://gitlab.com/rheisen' target='_blank' rel='noopener noreferrer'>
                  gitlab.com/rheisen
                </a>
              </div>
            </React.Fragment>
          ) : null
        }
        {
          props.resume ? (
            <a href='/documents/rheisen-dennis-resume.pdf' target='_blank' className={styles.buttonLink}>
              <Download className={styles.downloadIcon} size={24} />
              <span>Download Resume</span>
            </a>
          ) : null
        }
      </section>
    </aside>
  );
}
