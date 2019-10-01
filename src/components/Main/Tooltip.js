import React from 'react'
import cx from 'classnames'
import styles from './Tooltip.module.scss'

export default ({ classes = {}, title, date, values }) => (
  <div className={cx(styles.wrapper, classes.wrapper)}>
    <div className={styles.top}>
      <h4 className={cx(styles.title, classes.title)}>{title}</h4>
      <h5 className={styles.date}>{date}</h5>
    </div>
    {values.map(({ value, label }) => (
      <div className={styles.metric} key={label}>
        <span className={styles.value}>{value}</span>
        <span className={styles.label}>{label}</span>
      </div>
    ))}
  </div>
)
