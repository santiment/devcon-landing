import React from 'react'
import Title from '../Title/Title'
import Description from '../Description'
import styles from './index.module.scss'
import makerPng from './maker.png'

const description = {
  product: 'Sangraphs',
  title: 'DeFi/MakerDAO Project',
  text:
    'See examples of specialized data in action for one of the hottest projects in crypto. Santiment shows the full picture — from on-chain usage to social volume to revealing financial statistics.',
  links: [
    {
      href: 'https://graphs.santiment.net/makerdao',
      children: 'Explore MakerDAO on Sangraphs',
    },
  ],
}

export default () => (
  <section className={styles.wrapper}>
    <Title className={styles.title}>Santiment data in action</Title>
    <div className={styles.content}>
      <Description {...description}>
        <img alt='Maker' src={makerPng} className={styles.img} />
      </Description>
    </div>
  </section>
)
