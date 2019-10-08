import React from 'react'
import Description from '../Description'
import MainCodePanel from '../CodePanel/MainCodePanel/MainCodePanel'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'
import trendsPng from './trends.png'

const trends = {
  product: tr('desc.trends.product', "Sanbase, SanAPI"),
  title: tr('desc.trends.title', "Social/Emerging Trends Study"),
  text: tr('desc.trends.text',"Spot tops and bottoms via swings in crowd mood with our unique emerging trends metrics. Spam — filtered and scanned over hundreds of channels for real content inside real conversations."),
  links: [
    {
      href: 'https://app.santiment.net/labs/trends',
      children: tr('desc.trends.link', "Try Social Trends on Sanbase"),
    },
  ],
}

const sheets = {
  product: tr('desc.sheets.product', "Sansheets"),
  title: tr('desc.sheets.title', "Powerful Sheets Templates"),
  text: tr('desc.sheets.text', "For spreadsheet developers and fans. Pull Santiment data into your Google sheets with our Sansheets add-on. Track tokens you’re interested in, evaluate risk and spot investment opportunities."),
  links: [
    {
      href: 'https://sheets.santiment.net/',
      children: tr('desc.sheets.link', "Learn more about Sansheets"),
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
