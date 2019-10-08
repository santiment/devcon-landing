import React from 'react'
import { Mutation } from 'react-apollo'
import Button from '@santiment-network/ui/Button'
import Input from '@santiment-network/ui/Input'
import { injectIntl } from 'gatsby-plugin-intl'
import Tooltip from './Tooltip'
import { EMAIL_LOGIN_MUTATION } from '../../gql/user'
import { NotificationsContext } from '../Notifications/Notifications'
import { focusEmailEvent, submitEmailEvent } from '../Discount/index'
import { tr, trStr } from '../../utils/translate'
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

export default injectIntl(({ intl }) => (
  <section className={styles.wrapper}>
    <div className={styles.top}>
      <Tooltip {...maker} />
      <Tooltip {...eth} />
      <h1 className={styles.title}>CRYPTO. SMARTER.</h1>
      <h3 className={styles.subtitle}>{tr('main.text', "Stable, reliable, all-inclusive source of targeted intelligence for Ethereum and 700+ ERC-20 tokens. Get instant free access to all Santiment products for 2 weeks.")}</h3>
      <NotificationsContext.Consumer>
        {({ add: addNot }) => (
          <Mutation mutation={EMAIL_LOGIN_MUTATION}>
            {(sendCoupon, { loading }) => (
              <form
                className={styles.form}
                onSubmit={e => {
                  e.preventDefault()
                  submitEmailEvent()
                  sendCoupon({
                    variables: {
                      email: e.currentTarget.email.value,
                    },
                  }).then(() => {
                    addNot({
                      type: 'success',
                      title: 'Trial link was sent to your email!',
                    })
                  })
                }}
              >
                <Input
                  className={styles.input}
                  type='email'
                  required
                  placeholder={trStr(intl, 'discount.placeholder')}
                  name='email'
                  onFocus={focusEmailEvent}
                />
                <Button
                  className={styles.btn}
                  variant='fill'
                  accent='positive'
                  isLoading={loading}
                >
                  {tr('discount.btn', "Get free trial")}
                </Button>
              </form>
            )}
          </Mutation>
        )}
      </NotificationsContext.Consumer>
    </div>
    <div className={styles.bottom}>
      <div id='products' className={styles.infos}>
        <div className={styles.info}>
          <h4 className={styles.info__title}>{tr('info.buidl', "Culture of BUIDLers")}</h4>
          <div className={styles.info__text}>{tr('info.buidl.text', "Santiment is for blockchain developers and software engineers who want high quality raw data about cryptocurrency markets. Help us change the world by building awesome crypto apps.")}</div>
        </div>
        <div className={styles.info}>
          <h4 className={styles.info__title}>{tr('info.products', "Products")}</h4>
          <div className={styles.info__text}>
            {tr('info.products.text', "See the growth of Ethereum, ERC-20 tokens... and even other major blockchains like BTC and EOS. Use a variety of ways to see and use the data.")}
            <div className={styles.info__links}>
              <a
                href='https://app.santiment.net/'
                className={styles.info__link}
              >
                {tr('products.sanbase', "Sanbase")}
              </a>
              <a
                href={trStr(intl, 'links.sheets')}
                className={styles.info__link}
              >
                {tr('products.sheets', "Sansheets")}
              </a>
              <a
                href={trStr(intl, 'links.neuro')}
                className={styles.info__link}
              >
                {tr('products.neuro', "Santiment API")}
              </a>
              <a
                href='https://santiment.net/dashboards'
                className={styles.info__link}
              >
                {tr('products.graphs', "Sangraphs")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
))
