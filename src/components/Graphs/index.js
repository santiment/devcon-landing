import React from 'react'
import Title from '../Title/Title'
import Description from '../Description'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'
import makerPng from './maker.png'

const description = {
  product: tr('desc.graphs.product'),
  title: tr('desc.graphs.title'),
  text: tr('desc.graphs.text'),
  links: [
    {
      href: 'https://graphs.santiment.net/makerdao',
      children: tr('desc.graphs.link'),
    },
  ],
}

export default () => (
  <section className={styles.wrapper}>
    <Title className={styles.title}>{tr('products.title')}</Title>
    <div className={styles.content}>
      <Description {...description}>
        <img alt='Maker' src={makerPng} className={styles.img} />
      </Description>
    </div>
  </section>
)
