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
  <div className={cx(styles.wrapper, className, inverse && styles.inverse)}>
    <div>
      <h4 className={styles.product}>{product}</h4>
      <Subtitle className={styles.title}>{title}</Subtitle>
      <p className={styles.text}>{text}</p>
      <div className={styles.links}>
        {links.map((link, i) => (
          <a key={i} href='/' className={styles.link} {...link} />
        ))}
      </div>
    </div>

    <div className={styles.window}>{children}</div>
  </div>
)
