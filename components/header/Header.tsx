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
          <Link href="/">
            <a className={styles.homeLink}>Rheisen X Dennis</a>
          </Link>

          {isNavigationVisible ? (
            <>
              <X
                className={styles.exitIcon}
                size={28}
                aria-label="Exit Page Navigation"
                onClick={() => setNavigationVisible(false)}
              />
              <nav className={styles.navWrapper}>
                <div className={styles.navContainer} ref={ref}>
                  <Link href="/">
                    <a>
                      <span>Home</span>
                      <Home size={20} className={styles.linkIcon} />
                    </a>
                  </Link>
                  <Link href="/projects">
                    <a>
                      <span>Projects</span>
                      <Folder size={20} className={styles.linkIcon} />
                    </a>
                  </Link>
                  <a href="https://medium.com/@rheisen" target="_blank" rel="noopener noreferrer">
                    <span>Writings</span>
                    <PenTool size={20} className={styles.linkIcon} />
                  </a>
                  <Link href="/photography">
                    <a>
                      <span>Photography</span>
                      <Camera size={20} className={styles.linkIcon} />
                    </a>
                  </Link>
                  <Link href="/resume">
                    <a>
                      <span>Resume</span>
                      <FileText size={20} className={styles.linkIcon} />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a>
                      <span>Contact Me</span>
                      <Mail size={20} className={styles.linkIcon} />
                    </a>
                  </Link>
                </div>
              </nav>
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
