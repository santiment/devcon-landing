import React from 'react'
import { Mutation } from 'react-apollo'
import Title from '../Title/Title'
import Input from '@santiment-network/ui/Input'
import Button from '@santiment-network/ui/Button'
import { EMAIL_LOGIN_MUTATION } from '../../gql/user'
import styles from './index.module.scss'

export default () => (
  <section className={styles.wrapper}>
    <div className={styles.container}>
      <Title>2 weeks trial</Title>
      <h4 className={styles.subtitle}>
        drop your email here and get a coupon you can apply to any Santiment
        plan
      </h4>
      <Mutation mutation={EMAIL_LOGIN_MUTATION}>
        {(sendCoupon, { loading }) => (
          <form
            className={styles.form}
            onSubmit={e => {
              e.preventDefault()
              sendCoupon({
                variables: {
                  email: e.currentTarget.email.value,
                },
              })
            }}
          >
            <Input
              className={styles.input}
              type='email'
              required
              placeholder='Write your email here'
              name='email'
            />
            <Button
              className={styles.btn}
              variant='fill'
              accent='positive'
              isLoading={loading}
            >
              Get a coupon
            </Button>
          </form>
        )}
      </Mutation>
    </div>
  </section>
)
