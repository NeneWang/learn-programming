import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


function getTitle(lessonClass, lessonNumber) {
  return `Go to ${lessonClass}'s Lecture ${lessonNumber.toUpperCase()}!`
}

function getLink(lessonClass, lessonNumber) {

  const to_link  = `/${lessonClass}/lesson-notes/lesson-${lessonNumber}`;
  return (<Link
    className="button button--secondary button--lg"
    to={to_link}>
    {getTitle(lessonClass, lessonNumber)}
  </Link>)
}


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {getLink('python', '2a')}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Resources for programming class">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
