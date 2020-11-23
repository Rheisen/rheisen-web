import React from 'react';
import Link from 'next/link';
import { Clipboard, BookOpen, CheckSquare } from 'react-feather';

import Layout from 'components/layout';
import SplashHeader from 'components/splash-header';
import InfoCardSection from 'components/info-card-section';

import ExperienceArticle from 'page-components/resume/experience-article';
import PositionSection from 'page-components/resume/position-section';

import styles from 'styles/pages/resume.module.scss';

const Resume: React.FC = () => {
  return(
    <Layout>
      <SplashHeader>
        <h2>Resume</h2>
      </SplashHeader>
      <InfoCardSection linkedin={true} git={true} resume={true}>
        <div className={styles.resumeWrapper}>
          <div className={styles.resumeHeaderContainer}>
            <Clipboard className={styles.headerIcon} size={28} />
          </div>

          <div className={styles.resumeSectionContainer}>
            <ExperienceArticle company={'Wellframe'}>
              <PositionSection title={'Software Engineering Intern'} timeframe={'Jun 2020 - Aug 2020'}>
                <p>
                  During this brief internship I worked with the Decision Engine team on an ongoing project to refactor
                  core application functionality from Ruby on Rails to Java Spring. I made modifications and
                  additions to controllers, models, and view layers in both frameworks. Additionally I worked to create
                  Internal Admin pages for new features using React, and modified project configuration scripts
                  using Python.
                </p>
              </PositionSection>
              <PositionSection title={'Software Engineering Co-op'} timeframe={'Jan 2019 - Aug 2019'}>
                <p>
                  Over the course of eight months I worked with numerous teams to develop production Ruby on Rails
                  & React features, and on proof-of-concept projects that were presented internally and externally
                  by company leaders at health tech conferences and to Google. I also improved code quality in the main
                  codebase by enforcing stricter linting, and refactored data models that allowed the data science
                  team to gain more insight into user behavior.
                </p>
                <p>
                  Notable proof-of-concept work included developing a prototype chatbot to show the viability of adding
                  app functionality to Google Home and other IoT devices. I worked directly with the VP of Engineering
                  and the Chief Medical Officer, and built the prototype with Firebase, DialogFlow, and React. The
                  end product was notable for its live-transfer feature, which allowed someone chatting with the bot
                  to request transfer to a representative, who could join the conversation from an internal messaging
                  dashboard.
                </p>
              </PositionSection>
            </ExperienceArticle>

            <ExperienceArticle company={'Khoury College @ NU'}>
              <PositionSection title={'Object Oriented Design TA'} timeframe={'Jan 2020 - May 2020'}>
                <p>
                  As a more experienced TA I led exam review sessions, proctored exam sessions, and helped to grade
                  more exams. I held office hours on weekends where I had a good attendance, and graded projects with
                  consideration and constructive feedback.
                </p>
              </PositionSection>
              <PositionSection title={'Object Oriented Design TA'} timeframe={'Sep 2018 - Dec 2018'}>
                <p>
                  My first time as a TA was a great learning experience. I graded projects and gained valuable
                  experience reading code and providing constructive feedback. I helped with exam review sessions and
                  created materials for the students in the class to help prepare them for the exams.
                </p>
              </PositionSection>
            </ExperienceArticle>

            <ExperienceArticle company={'Scout Studio'} timeframe={'Aug 2018 - Dec 2018'}>
              <PositionSection title={'Studio Software Developer'}>
                <p>
                  Working with Scout Studio (a Northeastern student-led design studio) taught me a lot about user
                  experience design and the design process. We worked with a Northeastern startup to create a brand
                  for an inclusive suncare product, which culminated in the development of a landing page and
                  packaging designs. I developed the landing page using React and a CMS, which allowed the creators
                  to change the text, images, etc. as needed when we handed off the project.
                </p>
              </PositionSection>
            </ExperienceArticle>

            <ExperienceArticle company={'Center for Open Science'} timeframe={'May 2017 - Aug 2017'}>
              <PositionSection title={'Software Engineering Intern'}>
                <p>
                  At CoS I optimized API tests across the entire application and reduced the test suite run time by
                  over 30%, which encouraged developers to run more tests locally before pushing features. I also
                  developed a few features for the Open Science Framework platform, which was built using Django and
                  Python. I presented at PyOhio some of the strategies used for transitioning test code from Nose
                  to PyTest.
                </p>
              </PositionSection>
            </ExperienceArticle>

            <ExperienceArticle company={'Seam'} timeframe={'Apr 2016 - Jan 2018'}>
              <PositionSection title={'Co-founder & Software Engineer'}>
                <p>
                  My friend Tyler Cosgrove and I became the youngest members accepted into the University of Virginia
                  iLab program after we pitched our idea for a social shopping platform with the ability to recommend
                  more accurate clothing sizes. For nearly a year we worked on the platform, which we developed using
                  Meteor and MongoDB in addition to a web scraping component built with Python.
                </p>
              </PositionSection>
            </ExperienceArticle>
          </div>

          <div className={styles.resumeHeaderContainer}>
            <BookOpen className={styles.headerIcon} size={28} />
          </div>

          <div className={styles.resumeSectionContainer}>
            <section className={styles.educationContainer}>
              <header>
                <h4>Northeastern University</h4>
                <span className={styles.timeframe}>Sep 2016 - Dec 2020</span>
              </header>
              <span className={styles.degree}><span>BS Computer Science & Entrepreneurship</span></span>
              <p>
                <span className={styles.bold}>Honors: </span>
                University Scholars Program, Honors Program
              </p>
              <p>
                <span className={styles.bold}>Courses: </span>
                Accelerated Fundamentals of Computer Science 1 & 2 (Racket & Java), Object Oriented Design (Java),
                Algorithms and Data, Database Design (MySQL), Computer Systems (C), Computer Networks and Distributed
                Systems (Rust), Software Development (TypeScript / React)
              </p>
              <p>
                <span className={styles.bold}>Activities: </span>
                Husky Startup Challenge, IDEA venture founder, Intramural Soccer
              </p>
            </section>

            <section className={styles.educationContainer}>
              <header>
                <h4>Albemarle High School</h4>
                <span className={styles.timeframe}>Sep 2012 - May 2016</span>
              </header>
              <span className={styles.degree}><span>Advanced High School Diploma</span></span>
              <p>
                <span className={styles.bold}>Activities / Awards: </span>
                Math Engineering Science Academy, Honor Roll, Robotics Team Captain, TomTom Youth Summit
                Representative, Entrepreneurship & Computer Science Club Founder
              </p>
            </section>
          </div>

          <div className={styles.resumeHeaderContainer}>
            <CheckSquare className={styles.headerIcon} size={28} />
          </div>

          <div className={styles.resumeSectionContainer}>
            <div className={styles.skillContainer}>
              <span className={styles.skillLanguage}>Java</span>
              <span className={styles.skillLanguage}>Ruby</span>
              <span className={styles.skillLanguage}>JavaScript / TypeScript</span>
              <span className={styles.skillLanguage}>Rust</span>
              <span className={styles.skillLanguage}>HTML</span>
              <span className={styles.skillLanguage}>CSS / SCSS</span>
              <span className={styles.skillFramework}>Ruby on Rails</span>
              <span className={styles.skillFramework}>Java Spring</span>
              <span className={styles.skillFramework}>React</span>
              <span className={styles.skillDatabase}>PostgreSQL</span>
              <span className={styles.skillTool}>Git</span>
              <span className={styles.skillTool}>Git Flow</span>
              <span className={styles.skillTool}>Vim</span>
              <span className={styles.skillTool}>JIRA</span>
            </div>
          </div>

          <div className={styles.endLinkContainer}>
            <Link href='/projects'>
              <a className={styles.resumeProjectsLink}><span>View Projects</span></a>
            </Link>
          </div>
        </div>
      </InfoCardSection>
    </Layout>
  );
};

export default Resume;
