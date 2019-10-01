import React from 'react'
import Description from '../Description'
import styles from './index.module.scss'

const trends = {
  product: 'Sanbase, SanAPI',
  title: 'Social/Emerging Trends Study',
  text:
    'Spot tops and bottoms via swings in crowd mood with our unique emerging trends metrics. Spam — filtered and scanned over hundreds of channels for real content inside real conversations.',
  links: [
    {
      href: '/',
      children: 'Try Social Trends on Sanbase',
    },
  ],
}

const sheets = {
  product: 'Sansheets',
  title: 'Powerful Sheets Templates',
  text:
    'For spreadsheet developers and fans. Pull Santiment data into your Google sheets with our Sansheets add-on. Track tokens you’re interested in, evaluate risk and spot investment opportunities.',
  links: [
    {
      href: '/',
      children: 'Learn more about Sansheets',
    },
  ],
}

export default () => (
  <section className={styles.wrapper}>
    <div className={styles.container}>
      <Description inverse {...trends} className={styles.trends} />
      <Description {...sheets} />
    </div>
  </section>
)
