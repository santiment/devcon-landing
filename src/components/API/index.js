import React from 'react'
import Testimonials from '../Testimonials/Testimonials'
import Description from '../Description'
import { injectIntl } from 'gatsby-plugin-intl'
import { tr, trStr } from '../../utils/translate'
import styles from './index.module.scss'

const code = `#keyword[import] san

daa #keyword[=] san.get(
\t"daily_active_addresses/santiment",
\t#keyword[from_date=]"2018-06-01",
\t#keyword[to_date=]"2018-06-05",
\t#keyword[interval=]"1d"
)

prices #keyword[=] san.get(`

const lines = code.split(`\n`).map((line, i) => {
  const formatted = line
    .replace(/#keyword\[(.*)\]/g, '<span class="code__keyword">$1</span>')
    .replace(/\t/g, '<span class="code__tab"></span>')

  return `<span class="code__number">${i + 1}</span>${formatted}`
})

const description = {
  product: 'SanAPI',
  title: tr('desc.api.title', "MVRV, Dev Activity, 125+ metrics"),
  text: tr('desc.api.text', "Leverage visualizations and signals on Sanbase, or develop your own hybrid indicators from the vast suite of onchain, social, project and fundamental metrics."),
  links: [
    {
      href: 'https://app.santiment.net',
      children: tr('desc.api.link', "Sanbase"),
    },
    { href: 'https://neuro.santiment.net/', children: 'SanAPI' },
  ],
}

export default injectIntl(({ intl }) => (
  <>
    <section className={styles.wrapper}>
      <div>
        <Description inverse {...description}>
          <div className={styles.window}>
            <div className={styles.code}>
              <div className={styles.code__header}>
                <div className={styles.code__btn} />
                <div className={styles.code__btn} />
                <div className={styles.code__btn} />
              </div>
              <ol className={styles.source}>
                {lines.map((line, i) => (
                  <li
                    className={styles.source__line}
                    key={i}
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                ))}
              </ol>
            </div>

            <div className={styles.gathered}>
              <h3 className={styles.gathered__percent}>78.6 %</h3>
              <h4 className={styles.gathered__label}>
                {trStr(intl, 'main.data')}
              </h4>
            </div>
          </div>
        </Description>
      </div>
    </section>

    <Testimonials />
  </>
))
