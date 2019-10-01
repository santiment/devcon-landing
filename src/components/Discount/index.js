import React from 'react'
import Title from '../Title/Title'
import Input from '@santiment-network/ui/Input'
import Button from '@santiment-network/ui/Button'
import styles from './index.module.scss'

export default () => (
  <section className={styles.wrapper}>
    <div className={styles.container}>
      <Title>25% discount for developers</Title>
      <h4 className={styles.subtitle}>
        drop your email here and get a coupon you can apply to any Santiment
        plan
      </h4>
      <form className={styles.form}>
        <Input
          className={styles.input}
          type='email'
          required
          placeholder='Write your email here'
        />
        <Button className={styles.btn} variant='fill' accent='positive'>
          Get a coupon
        </Button>
      </form>
    </div>
  </section>
)
