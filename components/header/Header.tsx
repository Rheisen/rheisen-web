import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Folder, PenTool, Camera, FileText, Mail } from 'react-feather';

import styles from './header.module.scss';

const useNavigationDisplay = (initialVisibility: boolean) => {
  const [isNavigationVisible, setNavigationVisible] = useState(initialVisibility);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setNavigationVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  });

  return { ref, isNavigationVisible, setNavigationVisible };
};

export const Header: React.FC = () => {
  const { ref, isNavigationVisible, setNavigationVisible } = useNavigationDisplay(false);

  return (
    <>
      <header className={styles.headerWrapper}>
        <section className={styles.headerContainer}>
          <Link href="/" className={styles.homeLink}>
            <span className={styles.homeLink}>Rheisen X Dennis</span>
          </Link>

          {isNavigationVisible ? (
            <>
              <nav className={styles.navWrapper}>
                <div className={styles.navContainer} ref={ref}>
                  <Link href="/">
                      <span>Home</span>
                      <Home size={20} className={styles.linkIcon} />
                  </Link>
                  <Link href="/projects">
                      <span>Projects</span>
                      <Folder size={20} className={styles.linkIcon} />
                  </Link>
                  <a href="https://medium.com/@rheisen" target="_blank" rel="noopener noreferrer">
                    <span>Writings</span>
                    <PenTool size={20} className={styles.linkIcon} />
                  </a>
                  <Link href="/photography">
                      <span>Photography</span>
                      <Camera size={20} className={styles.linkIcon} />
                  </Link>
                  <Link href="/resume">
                      <span>Resume</span>
                      <FileText size={20} className={styles.linkIcon} />
                  </Link>
                  <Link href="/contact">
                      <span>Contact Me</span>
                      <Mail size={20} className={styles.linkIcon} />
                  </Link>
                </div>
              </nav>
              <X
                className={styles.exitIcon}
                size={28}
                aria-label="Exit Page Navigation"
                onClick={() => setNavigationVisible(false)}
              />
            </>
          ) : (
            <Menu
              className={styles.menuIcon}
              size={28}
              aria-label="Page Navigation Menu"
              onClick={() => setNavigationVisible(true)}
            />
          )}
        </section>
      </header>
      <div className={styles.pageBuffer}></div>
    </>
  );
};
