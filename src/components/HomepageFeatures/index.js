import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ask me anything',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Ask me <b>whatever</b> and as <b>many times</b> about something as you would like to Your success is my #1 priority, feel free to ask me things outside of the class!
      </>
    ),
  },
  {
    title: 'Resources',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Access to the content taught in class even if you have graduated years ago! 24/7. Remeber you can print the pages by pressing <b>Ctrl+P</b>
      </>
    ),
  },
  {
    title: 'Live Examples',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I will provide as many examples and starter codes for your homeworks and personal projects! Feel free to request more resources and examples if you would like to!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
