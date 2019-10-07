import React from 'react'
import Description from '../Description'
import MainCodePanel from '../CodePanel/MainCodePanel/MainCodePanel'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'
import trendsPng from './trends.png'

const trends = {
  product: tr('desc.trends.product'),
  title: tr('desc.trends.title'),
  text: tr('desc.trends.text'),
  links: [
    {
      href: 'https://app.santiment.net/labs/trends',
      children: tr('desc.trends.link'),
    },
  ],
}

const sheets = {
  product: tr('desc.sheets.product'),
  title: tr('desc.sheets.title'),
  text: tr('desc.sheets.text'),
  links: [
    {
      href: 'https://sheets.santiment.net/',
      children: tr('desc.sheets.link'),
    },
  ],
}

export default () => (
  <section className={styles.wrapper}>
    <div className={styles.container}>
      <Description inverse {...trends} className={styles.trends}>
        <img alt='Trends' src={trendsPng} className={styles.img} />
      </Description>
      <Description {...sheets}>
        <MainCodePanel />
      </Description>
    </div>
  </section>
)
