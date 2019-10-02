import React from 'react'
import Tooltip from './Tooltip'
import styles from './index.module.scss'

const maker = {
  title: 'Maker(MKR)',
  date: 'Jul 18, 2019',
  classes: { wrapper: styles.maker, title: styles.maker__title },
  values: [
    { value: '$473.44', label: 'Price' },
    { value: '$6,811,431,345.00', label: 'Volume' },
    { value: '96.00', label: 'Network Growth' },
  ],
}

const eth = {
  title: 'Ethereum',
  date: 'Jul 21, 2019',
  classes: { wrapper: styles.eth, title: styles.eth__title },
  values: [
    { value: '$473.44', label: 'Price' },
    { value: '$6,811,431,345.00', label: 'Volume' },
    { value: '2nd', label: 'Trending position' },
  ],
}

export default () => (
  <section className={styles.wrapper}>
    <div className={styles.top}>
      <Tooltip {...maker} />
      <Tooltip {...eth} />
      <h1 className={styles.title}>CRYPTO. SMARTER.</h1>
      <h3 className={styles.subtitle}>
        get a stable, reliable, all-inclusive source of targeted intelligence
        for Ethereum and 700+ ERC-20 tokens
      </h3>
    </div>
    <div className={styles.bottom}>
      <div id='products' className={styles.infos}>
        <div className={styles.info}>
          <h4 className={styles.info__title}>Culture of BUIDLers</h4>
          <div className={styles.info__text}>
            Santiment is for blockchain developers and software engineers who
            want high quality raw data about cryptocurrency markets. Help us
            change the world by building awesome crypto apps.
          </div>
        </div>
        <div className={styles.info}>
          <h4 className={styles.info__title}>Products</h4>
          <div className={styles.info__text}>
            See the growth of Ethereum, ERC-20 tokens... and even other major
            blockchains like BTC and EOS. Use a variety of ways to see and use
            the data.
            <div className={styles.info__links}>
              <a
                href='https://app.santiment.net/'
                className={styles.info__link}
              >
                Sanbase
              </a>
              <a
                href='https://sheets.santiment.net/'
                className={styles.info__link}
              >
                Sansheets
              </a>
              <a
                href='https://neuro.santiment.net/'
                className={styles.info__link}
              >
                Santiment API
              </a>
              <a
                href='https://santiment.net/dashboards'
                className={styles.info__link}
              >
                Sangraphs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
