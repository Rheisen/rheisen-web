import React from 'react';
import Image from 'next/image';
import { Terminal } from 'react-feather';

import Layout from 'components/layout';
import SplashHeader from 'components/splash-header';
import Tag from 'components/tag';

import styles from 'styles/pages/projects.module.scss';

const Projects: React.FC = () => {
  return (
    <Layout>
      <SplashHeader>
        <h2>Projects</h2>
      </SplashHeader>
      <div className={styles.projectsWrapper}>
        <section className={styles.projectContainer}>
          <aside className={styles.rheisenAside}>
            <h2>RD</h2>
          </aside>
          <article>
            <h4>Rheisen.me</h4>
            <div className={styles.tagContainer}>
              <Tag text="Next.js" />
              <Tag text="React" />
              <Tag text="TypeScript" />
              <Tag text="SCSS" />
            </div>
            <p>
              This website is a personal project of mine that I&apos;ve used to help learn about the Next.js framework
              and improve my understanding of React. Currently this project consists solely of a frontend, but I am
              excited to start work soon on a backend for the project that will help track analytics, gather newsletter
              signups, and provide a better interface for contacting me. Stay tuned!
            </p>
            <a href="https://github.com/Rheisen/rheisen-web" target="_blank" rel="noopener noreferrer">
              <span>View rheisen/rheisen-web on GitHub</span>
            </a>
          </article>
        </section>

        <div className={styles.lineBreak} />

        <section className={styles.projectContainer}>
          <aside className={styles.blackbearAside}>
            <div className={styles.imageContainer}>
              <Image src="/images/project-thumbnails/blackbear.png" layout="fill" alt="Blackbear Logo" />
            </div>
          </aside>
          <article>
            <h4>Blackbear.app</h4>
            <div className={styles.tagContainer}>
              <Tag text="Ruby on Rails" />
              <Tag text="API" />
              <Tag text="Postgres" />
              <Tag text="Next.js" />
              <Tag text="React" />
            </div>
            <p>
              I&apos;ve been working on Blackbear (under various names) for a few years. It is a passion project that
              has allowed me to experiment with numerous frameworks. Eventually I would like for it to help people
              interface with technology in a more healthy and productive way. Some of the features under development
              include messaging, calendars, tools for organizing personal relationships, and event discovery. Stay
              tuned!
            </p>
          </article>
        </section>

        <div className={styles.lineBreak} />

        <section className={styles.projectContainer}>
          <aside className={styles.xavierAside}>
            <Terminal size={60} className={styles.xavierIcon} />
          </aside>
          <article>
            <h4>Xavier Config</h4>
            <div className={styles.tagContainer}>
              <Tag text="Terminal" />
              <Tag text="ZSH" />
              <Tag text="Neovim" />
              <Tag text="Vim" />
              <Tag text="Tmux" />
            </div>
            <p>
              I started Xavier Config with the goal of being able to set up a uniform development environment between my
              personal computer and work computer. I also wanted to learn more about the terminal and improve my
              productivity with Vim. Xavier Config is the result of those goals. It is a set of instructions and
              resources to easily configure a uniform Terminal/Neovim/Tmux configuration on devices using MacOS. As I
              have learned more about Vim and explored more programming languages, this configuration has grown with me.
              I am excited to see this project continue to grow and evolve as I grow as a software engineer.
            </p>
            <a href="https://github.com/Rheisen/xavier-config" target="_blank" rel="noopener noreferrer">
              <span>View rheisen/xavier-config on GitHub</span>
            </a>
          </article>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
