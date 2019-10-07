import React from 'react'
import { Mutation } from 'react-apollo'
import Title from '../Title/Title'
import Input from '@santiment-network/ui/Input'
import Button from '@santiment-network/ui/Button'
import { NotificationsContext } from '../Notifications/Notifications'
import { EMAIL_LOGIN_MUTATION } from '../../gql/user'
import styles from './index.module.scss'

const focusEmailEvent = () => {
  window.gtag('event', 'email_focus')
}

const submitEmailEvent = () => {
  window.gtag('event', 'email_submitted')
}

export default () => (
  <section className={styles.wrapper}>
    <div className={styles.container}>
      <Title>2 weeks trial</Title>
      <h4 className={styles.subtitle}>
        drop your email here and get <strong>instant free access</strong> to all Santiment products for two weeks
      </h4>
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
                  placeholder='Write your email here'
                  name='email'
                  onFocus={focusEmailEvent}
                />
                <Button
                  className={styles.btn}
                  variant='fill'
                  accent='positive'
                  isLoading={loading}
                >
                Get free trial
              </Button>
              </form>
            )}
          </Mutation>
        )}
      </NotificationsContext.Consumer>
    </div>
  </section>
)
