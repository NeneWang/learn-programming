import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ask me anything',
    Svg: require('@site/static/img/ask-anything.svg').default,
    description: (
      <>
        Ask me <b>whatever</b> and as <b>many times</b> about something as you would like to. Your success is my #1 priority, feel free to ask me things outside of the class or to send me random things you found interesting!
      </>
    ),
  },
  {
    title: 'Resources',
    Svg: require('@site/static/img/resources.svg').default,
    description: (
      <>
        Access to the content taught in class even if you graduated years ago! 24/7. Remember you can print the pages by pressing <b>Ctrl+P</b>
      </>
    ),
  },
  {
    title: 'Live Examples',
    Svg: require('@site/static/img/live-example.svg').default,
    description: (
      <>
        I will provide as many examples and starter codes for your homeworks and personal projects! Feel free to request more resources and examples if you would like to! (At the moment there is not much here yet)
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
