import React from 'react'
import cx from 'classnames'
import Subtitle from '../Subtitle/Subtitle'
import styles from './index.module.scss'

export default ({
  className,
  children,
  product,
  title,
  text,
  links,
  inverse,
}) => (
  <div className={cx(styles.wrapper, className)}>
    <h4 className={styles.product}>{product}</h4>
    <Subtitle className={styles.title}>{title}</Subtitle>
    <div className={cx(styles.window, inverse && styles.inverse)}>
      {children}
    </div>
    <p className={styles.text}>{text}</p>
    <div className={styles.links}>
      {links.map((link, i) => (
        <a
          key={i}
          className={styles.link}
          target='_blank'
          rel='noopener noreferrer'
          {...link}
        />
      ))}
    </div>
  </div>
)
