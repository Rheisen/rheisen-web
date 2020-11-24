import React from 'react';
import Link from 'next/link';
import { Clipboard, BookOpen, CheckSquare } from 'react-feather';

import Layout from 'components/layout';
import SplashHeader from 'components/splash-header';
import InfoCardSection from 'components/info-card-section';

import ExperienceArticle from 'page-components/resume/experience-article';
import ExperienceSection from 'page-components/resume/experience-section';

import styles from 'styles/pages/resume.module.scss';

const Resume: React.FC = () => {
  return(
    <Layout pageTitle='Rheisen X Dennis - Resume'>
      <SplashHeader>
        <h2>Resume</h2>
      </SplashHeader>
      <InfoCardSection linkedin={true} git={true} resume={true}>
        <div className={styles.resumeWrapper}>
          <div className={styles.resumeHeaderContainer}>
            <Clipboard className={styles.headerIcon} size={28} />
          </div>

          <div className={styles.resumeSectionContainer}>
            <ExperienceArticle org={'Wellframe'}>
              <ExperienceSection title={'Software Engineering Intern'} timeframe={'Jun 2020 - Aug 2020'}>
                <p>
                  During this brief internship I worked with the Decision Engine team on an ongoing project to refactor
                  core application functionality from Ruby on Rails to Java Spring. I made modifications and
                  additions to controllers, models, and view layers in both frameworks. Additionally, I worked to create
                  Internal Admin pages for new features with React, and modified Python project configuration scripts.
                </p>
              </ExperienceSection>
              <ExperienceSection title={'Software Engineering Co-op'} timeframe={'Jan 2019 - Aug 2019'}>
                <p>
                  Over the course of eight months I worked with numerous agile teams to develop production Ruby on
                  Rails API features, frontend React features, and proof-of-concept projects. I also improved code
                  quality in the Rails codebase by enforcing stricter linting and refactoring areas of legacy code. At
                  the end of my time I worked with one of the senior engineers in transitioning the Rails codebase from
                  Rails 4 to Rails 5.
                </p>
                <p>
                  Notable proof-of-concept work included developing a prototype chatbot to show the viability of adding
                  app functionality to Google Home and other IoT devices. I worked directly with the VP of Engineering
                  and the Chief Medical Officer, and built the prototype with Firebase, DialogFlow, and React. The
                  end product was notable for its live-transfer feature, which allowed someone chatting with the bot
                  to request transfer to a representative, who could join the conversation from an internal messaging
                  dashboard. This proof of concept was presented internally to the company by myself at one of the
                  "All Hands" meetings, and presented at health tech conferences by the company leadership team.
                </p>
              </ExperienceSection>
            </ExperienceArticle>

            <ExperienceArticle org={'Khoury College @ NU'}>
              <ExperienceSection title={'Object Oriented Design TA'} timeframe={'Jan 2020 - May 2020'}>
                <p>
                  As a more experienced TA I led exam review sessions, proctored exam sessions, and helped to grade
                  more exams. I held office hours on weekends where I had a good attendance, and graded projects with
                  consideration and constructive feedback.
                </p>
              </ExperienceSection>
              <ExperienceSection title={'Object Oriented Design TA'} timeframe={'Sep 2018 - Dec 2018'}>
                <p>
                  My first time as a TA was a great learning experience. I graded projects and gained valuable
                  experience with both reading code and providing constructive feedback. I helped with exam review
                  sessions and created study materials (in collaboration with other course TAs) to help prepare
                  students for the exams.
                </p>
              </ExperienceSection>
            </ExperienceArticle>

            <ExperienceArticle org={'Scout Studio'} timeframe={'Aug 2018 - Dec 2018'}>
              <ExperienceSection title={'Studio Software Developer'}>
                <p>
                  Working with Scout Studio (a Northeastern student-led design studio) taught me a lot about user
                  experience design and the design process. We worked with a Northeastern startup to create a brand
                  for an inclusive suncare product, which culminated in the development of a landing page and
                  packaging designs. I developed the landing page using React and Prismic (CMS), which allowed the
                  creators to change the text, images, etc. as needed when we handed off the project.
                </p>
              </ExperienceSection>
            </ExperienceArticle>

            <ExperienceArticle org={'Center for Open Science'} timeframe={'May 2017 - Aug 2017'}>
              <ExperienceSection title={'Software Engineering Intern'}>
                <p>
                  At CoS I optimized API tests across the entire application and reduced the test suite run time by
                  over 30%, which encouraged developers to run more tests locally before pushing features. I also
                  developed a few features for the Open Science Framework platform, which was built using Django and
                  Python. I presented at PyOhio some of the strategies used for transitioning test code from Nose
                  to PyTest.
                </p>
              </ExperienceSection>
            </ExperienceArticle>

            <ExperienceArticle org={'Seam'} timeframe={'Apr 2016 - Jan 2018'}>
              <ExperienceSection title={'Co-founder & Software Engineer'}>
                <p>
                  My friend Tyler Cosgrove and I became the youngest members accepted into the University of Virginia
                  iLab program after we pitched our idea for a social shopping platform with the ability to recommend
                  more accurate clothing sizes. For nearly a year we worked on the platform, which we developed using
                  Meteor and MongoDB in addition to a web scraping component built with Python.
                </p>
              </ExperienceSection>
            </ExperienceArticle>
          </div>

          <div className={styles.resumeHeaderContainer}>
            <BookOpen className={styles.headerIcon} size={28} />
          </div>

          <div className={styles.resumeSectionContainer}>
            <ExperienceArticle org={'Northeastern University'} timeframe={'Sep 2016 - Dec 2020'}>
              <ExperienceSection title={'BS Computer Science & Entrepreneurship'}>
                <p>
                  Over the duration of my time in University I pushed myself to take the hardest versions of courses,
                  challenged myself to take every opportunity to learn, and formed friendships with individuals who
                  continue to help make me a better person. In addition to growing as a software engineer and as a
                  student of computer science, I grew as a person through traveling abroad, studying abroad in
                  Madrid, and pursuing my interests with philosophy and spirituality. As a result of those interests
                  my courses in Entrepreneurship became centered around the formation of socially responsible
                  businesses and social enterprises.
                </p>
              </ExperienceSection>
            </ExperienceArticle>
            <section className={styles.educationContainer}>
              <p className={styles.reducedTopMargin}>
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

            <ExperienceArticle org={'Albemarle High School'} timeframe={'Sep 2012 - May 2016'}>
              <ExperienceSection title={'Advanced High School Diploma'}>
                <p>
                  My high school experience was a tumultuous one. I joined Albemarle knowing only two other students,
                  and spent my first two years struggling with problems at home and with bouts of escapism. With the
                  help of mentors and a gradual change in outlook, I was able to accomplish much in my last two years
                  of high school. My motivation shifted from being externally driven to internally driven, and as a
                  result I was able to establish a number of extracuricular activities related to computer science
                  and entrepreneurship that led to novel opportunities and formative experiences. An incredible debt
                  of gratitude is owed to Alexis Mason, Adarsh Ramakrishnan, Abby Baum, and Todd Menadier.
                </p>
              </ExperienceSection>
            </ExperienceArticle>
            <section className={styles.educationContainer}>
              <p className={styles.reducedTopMargin}>
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
