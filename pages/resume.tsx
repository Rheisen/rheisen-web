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
  return (
    <Layout pageTitle="Rheisen X Dennis - Resume">
      <SplashHeader>
        <h2>Resume</h2>
      </SplashHeader>
      <InfoCardSection linkedin={true} git={true} resume={true}>
        <div className={styles.resumeWrapper}>
          <div className={styles.resumeHeaderContainer}>
            <Clipboard className={styles.headerIcon} size={28} />
          </div>

          <div className={styles.resumeSectionContainer}>
            <ExperienceArticle org={'ABB'}>
              <ExperienceSection title={'Principle Software Engineer'} timeframe={'Jan 2025 - Present'}>
                <p>
                  Lumin was acquired by ABB in January of 2025. My first project post-acquisition was an integrations
                  cloud service that builds on concepts developed three years prior, allowing for secure and stable
                  connections with third party device APIs by acting as a connection proxy for our IoT devices. Notably,
                  this enabled the rollout of additional cloud integrations without requiring any changes or software
                  deployments on IoT devices.
                </p>
                <p>
                  Building on the first project, my second project was writing a connection adapter leveraging the
                  authorization and device APIs of our hub product to enable multi-hub systems. Multi-hub systems
                  leverage the local network and mDNS to permit one software system to control and monitor circuits from
                  up to four local hub hardware devices (over 48 single poll circuits).
                </p>
              </ExperienceSection>
            </ExperienceArticle>
            <ExperienceArticle org={'Lumin'}>
              <ExperienceSection title={'Senior Software Engineer'} timeframe={'Jan 2023 - Jan 2025'}>
                <p>
                  I was promoted to Senior Software Engineer as we started working on a transition to a new software
                  stack. My first project was creating the scaffold for our new hub software application, and an
                  internal service within it for managing connections to the hub hardware and eventually third party
                  devices. During this time I also developed wrappers around logging and tracing packages for increased
                  observability and debugging of backend software code. These wrappers are now part of the standard
                  service build template, along with many of the patterns developed in organizing this repo. I also
                  brought NATS and SQLite into the tech stack to better track quickly moving and slow moving local data.
                </p>
                <p>
                  In the process of bringing in NATS, due to my past experiences with Kafka I created my second internal
                  library, a library that serves as an abstraction over eventing. The library at the time of this
                  writing now has adapters now for around four different streaming platforms. It has allowed us to use
                  the same logic for writing and reading events locally as we do for writing and reading events in many
                  cloud services.
                </p>
                <p>
                  After working on the skeleton of the hub software application and passing that to other team members,
                  I worked on standing up a number of core micro services in the cloud, working closely with another
                  software engineer on the microgrid platform team. The most important of which likely being a
                  fine-grained authorization model (third internal library) and authorization service. This library
                  features a cool mechanism that generate test cases based on the authorization schema, which automates
                  the process of fine-grained authorization test cases (of which there are many). We also brought in
                  first class support for organization users of our cloud API services.
                </p>
                <p>
                  I also worked on much of the authorization middleware services, and worked closely to develop a
                  caching middleware that allows slow changing data on IoT devices to be captured and made available by
                  our cloud API.
                </p>
                <p>
                  Additionally, I led the development of a new micro service for managing device software, built on the
                  concepts used for the internal CLI / API written a few years back. The new service includes additional
                  features for automatic software deployments and tracking software versions for devices with different
                  product requirements.
                </p>
              </ExperienceSection>
              <ExperienceSection title={'Backend Software Engineer'} timeframe={'Jan 2021 - Jan 2023'}>
                <p>
                  I joined Lumin as its 4th engineer. At the time when I joined, the backend services were under a lot
                  of stress, and our data pipelines and data sinks were struggling to keep up with increasing traffic
                  due to a lack of scalability dimensions. In my first few months I worked with our devops engineer and
                  built a data pipeline on top of Apache Kafka. I implemented an adaptable, horizontally scalable Golang
                  micro service that now handles over five billion requests per day, collecting readings from IoT
                  devices across the country and landing data in a variety of data sinks. Over the past four years, the
                  service has scaled and operated with a 99.9999% uptime, remaining cost efficient.
                </p>
                <p>
                  After working to stabilize the data pipeline, I spent time reviewing time-series data stores and
                  worked with the engineering team to transition from OpenTSDB to Timescale Cloud for our product facing
                  time-series data. After making the transition and tuning our time series table models, the switch
                  improved queries for our in-app data browser across the board, and in some instances by an order of
                  magnitude. The service also led to a sharp reduction in data storage costs when combined with the
                  adoption of Apache Iceberg.
                </p>
                <p>
                  In addition to the time-series database switch, I worked at this time on a few cloud API features, and
                  began working with the software services on our IoT device (the Lumin LSP). I worked with my direct
                  manager to implement improved automations for the panel, and created my first internal library for
                  managing connections with third party APIs.
                </p>
                <p>
                  My experiences working with software on our IoT devices led me to create an internal CLI / HTTP API
                  for managing device software deployments. At a company hackathon I expanded upon that tool so that
                  information from across a variety of services could be aggregated and used to make software deployment
                  decisions and filters (e.g. filtering deployments based on some criteria that previously was not
                  co-located). We’ve now used that tool for device deployments for the past two/three years.
                </p>
              </ExperienceSection>
            </ExperienceArticle>
            <ExperienceArticle org={'Wellframe'}>
              <ExperienceSection title={'Software Engineering Intern'} timeframe={'Jun 2020 - Aug 2020'}>
                <p>
                  During this brief internship I worked with the Decision Engine team on an ongoing project to refactor
                  core application functionality from Ruby on Rails to Java Spring. I made modifications and additions
                  to controllers, models, and view layers in both frameworks. Additionally, I worked to create Internal
                  Admin pages for new features with React, and modified some Python project configuration scripts.
                </p>
              </ExperienceSection>
              <ExperienceSection title={'Software Engineering Co-op'} timeframe={'Jan 2019 - Aug 2019'}>
                <p>
                  Over the course of eight months I worked with numerous agile teams to develop production Ruby on Rails
                  API features, frontend React features, and proof-of-concept projects. I also improved code quality in
                  the Rails codebase by enforcing stricter linting and refactoring areas of legacy code. At the end of
                  my time I worked with one of the senior engineers in transitioning the Rails codebase from Rails 4 to
                  Rails 5.
                </p>
                <p>
                  The most interesting proof-of-concept project that I worked on during this time was the creation of a
                  prototype chatbot, which showcased the potential features we could provide through integrations with
                  Google Home and other IoT devices. I worked directly with the VP of Engineering and the Chief Medical
                  Officer, and built the prototype with Firebase, DialogFlow, and React. The end product was notable for
                  its live-transfer feature, which allowed someone chatting with the bot to request transfer to a
                  representative, who could then join the conversation from an internal messaging dashboard. I presented
                  this project internally at one of the &quot;All Hands&quot; meetings, and it was presented at health
                  tech conferences by the company leadership team.
                </p>
              </ExperienceSection>
            </ExperienceArticle>

            <ExperienceArticle org={'Khoury College @ NU'}>
              <ExperienceSection title={'Object Oriented Design TA'} timeframe={'Jan 2020 - May 2020'}>
                <p>
                  In my second time as a TA for this course I focused on improving the feedback I gave to students on
                  their projects and providing a better experience for the students who came to my office hours. I also
                  took on additional responsibilities in leading exam review sessions and proctoring exam sessions. Some
                  of the resources I provided to help students prepare for the first exam can be found{' '}
                  <a
                    href="https://docs.google.com/presentation/d/1mb1vyeIew9ygwrBAD-NPH-43A6EdyqciDgbd0_CLwKk/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
              </ExperienceSection>
              <ExperienceSection title={'Object Oriented Design TA'} timeframe={'Sep 2018 - Dec 2018'}>
                <p>
                  My first time as a TA was a great learning experience. I graded projects and gained valuable
                  experience with both reading code and providing constructive feedback. I helped with exam review
                  sessions and created study materials (in collaboration with other course TAs) to help prepare students
                  for the exams.
                </p>
              </ExperienceSection>
            </ExperienceArticle>

            <ExperienceArticle org={'Scout Studio'} timeframe={'Aug 2018 - Dec 2018'}>
              <ExperienceSection title={'Studio Software Developer'}>
                <p>
                  Working with Scout Studio (a Northeastern student-led design studio) taught me a lot about user
                  experience design and the design process. We worked with a Northeastern startup to create a brand for
                  an inclusive suncare product, which culminated in the development of a landing page and packaging
                  designs. I developed the landing page using React and Prismic (CMS), which allowed the creators to
                  change the text, images, etc. as needed after we handed off the project.
                </p>
              </ExperienceSection>
            </ExperienceArticle>

            <ExperienceArticle org={'Center for Open Science'} timeframe={'May 2017 - Aug 2017'}>
              <ExperienceSection title={'Software Engineering Intern'}>
                <p>
                  At CoS I optimized API tests across the entire application and reduced the test suite run time by over
                  30%, which encouraged developers to run more tests locally before pushing features. I also developed a
                  few features for the Open Science Framework platform, which was built using Django and Python. I
                  presented at PyOhio some of the strategies used for transitioning test code from Nose to PyTest.
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
                  From my first year in university through my last, I challenged myself to take the courses where I
                  would be pushed to learn the most. Having been a self-taught developer before entering college, I was
                  amazed by how much I didn&apos;t know, and thrilled to be able to put names to some of the practices
                  and patterns I had been using for years. I learned a great deal about different types of programming
                  languages and their trade-offs, how to read and critique code, and how to work effectively in pair
                  programming environments. Getting to see how computer systems and networks are constructed at the
                  lowest level gave me an immense appreciation for higher-level languages and a deep understanding of
                  the structures underlying applications of all stripes. Although I learned a great deal about computer
                  science and software engineering in university, I realize that there is still so much to learn, and
                  I&apos;m very excited about that.
                </p>
                <p>
                  The second part of my degree was in business and entrepreneurship, which carried over from my
                  interests in high school. After studying more philosophical and spiritual movements I tailored my
                  entrepreneurial interests into the formation of socially responsible businesses and social
                  enterprises.
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
                  Throughout high school I was interested in computer science and entrepreneurship, and started the
                  first computer science and entrepreneurship clubs at Albemarle in my first three years with the help
                  of mentors and faculty. Being in close proximity to the University of Virginia, we were able to tap
                  into the computer science and entrepreneurship programs at the university to provide guest lectures
                  and networks for students interested in computer science and/or entrepreneurship. In my final years at
                  Albemarle this network would become invaluable in creating novel opportunities and formative
                  experiences for me as I worked in the UVA iLab and at HackCville with both young and experienced
                  entrepreneurs. I am very grateful to have had the support and guidance of Alexis Mason, Adarsh
                  Ramakrishnan, Rick Kulow, Abby Baum, and Todd Menadier.
                </p>
              </ExperienceSection>
            </ExperienceArticle>
            <section className={styles.educationContainer}>
              <p className={styles.reducedTopMargin}>
                <span className={styles.bold}>Activities / Awards: </span>
                Math Engineering Science Academy, Honor Roll, Robotics Team Captain, TomTom Youth Summit Representative,
                Entrepreneurship & Computer Science Club Founder
              </p>
            </section>
          </div>

          <div className={styles.resumeHeaderContainer}>
            <CheckSquare className={styles.headerIcon} size={28} />
          </div>

          <div className={styles.resumeSectionContainer}>
            <div className={styles.skillContainer}>
              <span className={styles.skillFramework}>Kubernetes</span>
              <span className={styles.skillFramework}>Terraform</span>
              <span className={styles.skillFramework}>Docker</span>
              <span className={styles.skillFramework}>NATS</span>
              <span className={styles.skillFramework}>Kafka</span>
              <span className={styles.skillFramework}>OpenTelemetry</span>
              <span className={styles.skillFramework}>Grafana</span>
              <span className={styles.skillLanguage}>Java</span>
              <span className={styles.skillLanguage}>Ruby</span>
              <span className={styles.skillLanguage}>JavaScript / TypeScript</span>
              <span className={styles.skillLanguage}>Rust</span>
              <span className={styles.skillLanguage}>Go</span>
              <span className={styles.skillLanguage}>HTML</span>
              <span className={styles.skillLanguage}>CSS / SCSS</span>
              <span className={styles.skillFramework}>Ruby on Rails</span>
              <span className={styles.skillFramework}>React</span>
              <span className={styles.skillDatabase}>Postgres</span>
              <span className={styles.skillDatabase}>MySQL</span>
              <span className={styles.skillTool}>Git</span>
              <span className={styles.skillTool}>Git Flow</span>
              <span className={styles.skillTool}>Vim</span>
              <span className={styles.skillTool}>JIRA</span>
            </div>
          </div>

          <div className={styles.endLinkContainer}>
            <Link href="/projects" className={styles.resumeProjectsLink}>
              <span>View Projects</span>
            </Link>
          </div>
        </div>
      </InfoCardSection>
    </Layout>
  );
};

export default Resume;
