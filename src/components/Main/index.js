import React from 'react'
import styles from './index.module.scss'

export default () => (
  <section className={styles.wrapper}>
    <div className={styles.top}>
      <h1 className={styles.title}>CRYPTO. SMARTER.</h1>
      <h3 className={styles.subtitle}>
        get a stable, reliable, all-inclusive source of targeted intelligence
        for Ethereum and 700+ ERC-20 tokens
      </h3>
    </div>
    <div className={styles.bottom}>
      <div className={styles.infos}>
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
              <a href='/' className={styles.info__link}>
                Sanbase
              </a>
              <a href='/' className={styles.info__link}>
                Sansheets
              </a>
              <a href='/' className={styles.info__link}>
                SanAPI
              </a>
              <a href='/' className={styles.info__link}>
                Sangraphs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
