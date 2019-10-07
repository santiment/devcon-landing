import React from 'react'
import { Mutation } from 'react-apollo'
import Button from '@santiment-network/ui/Button'
import Input from '@santiment-network/ui/Input'
import { injectIntl } from 'gatsby-plugin-intl'
import Tooltip from './Tooltip'
import { tr } from '../../utils/translate'
import { EMAIL_LOGIN_MUTATION } from '../../gql/user'
import { NotificationsContext } from '../Notifications/Notifications'
import {focusEmailEvent, submitEmailEvent} from '../Discount/index'
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
      <h3 className={styles.subtitle}>{intl.formatMessage({ id: 'main.text'})}</h3>
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
                  placeholder={intl.formatMessage({ id: 'discount.placeholder' })}
                  name='email'
                  onFocus={focusEmailEvent}
                />
                <Button
                  className={styles.btn}
                  variant='fill'
                  accent='positive'
                  isLoading={loading}
                >
                  {intl.formatMessage({ id: 'discount.btn'})}
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
          <h4 className={styles.info__title}>{intl.formatMessage({ id: 'info.buidl'})}</h4>
          <div className={styles.info__text}>{intl.formatMessage({ id: 'info.buidl.text'})}</div>
        </div>
        <div className={styles.info}>
          <h4 className={styles.info__title}>{intl.formatMessage({ id: 'info.products'})}</h4>
          <div className={styles.info__text}>
            {intl.formatMessage({ id: 'info.products.text'})}
            <div className={styles.info__links}>
              <a
                href='https://app.santiment.net/'
                className={styles.info__link}
              >
                {intl.formatMessage({ id: 'products.sanbase'})}
              </a>
              <a
                href={intl.formatMessage({ id: 'links.sheets' })}
                className={styles.info__link}
              >
                {intl.formatMessage({ id: 'products.sheets'})}
              </a>
              <a
                href={intl.formatMessage({ id: 'links.neuro' })}
                className={styles.info__link}
              >
                {intl.formatMessage({ id: 'products.neuro'})}
              </a>
              <a
                href='https://santiment.net/dashboards'
                className={styles.info__link}
              >
                {intl.formatMessage({ id: 'products.graphs'})}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
))
