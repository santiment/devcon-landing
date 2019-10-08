import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Mutation } from 'react-apollo'
import Input from '@santiment-network/ui/Input'
import Button from '@santiment-network/ui/Button'
import { NotificationsContext } from '../Notifications/Notifications'
import { EMAIL_LOGIN_MUTATION } from '../../gql/user'
import Title from '../Title/Title'
import { tr, trStr } from '../../utils/translate'
import styles from './index.module.scss'

export const focusEmailEvent = () => {
  window.gtag('event', 'email_focus')
}

export const submitEmailEvent = () => {
  window.gtag('event', 'email_submitted')
}

export default injectIntl(({ intl }) => (
  <section className={styles.wrapper}>
    <div className={styles.container}>
      <Title>{tr('discount.title')}</Title>
      <h4 className={styles.subtitle}>{tr('discount.text')}</h4>
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
                  {tr('discount.btn')}
                </Button>
              </form>
            )}
          </Mutation>
        )}
      </NotificationsContext.Consumer>
    </div>
  </section>
))
