import React from 'react'
import { Link } from 'gatsby'
import { injectIntl } from 'gatsby-plugin-intl'
import cx from 'classnames'
import planetSvg from '../../images/planet.svg'
import santimentSvg from '../../images/santiment.svg'
import styles from './Footer.module.scss'

const langProps = [
  { link: '/ja', label: '日本語' },
  { link: '/', label: 'English' },
]

const isJapanese = () =>
  typeof window === 'undefined'
    ? false
    : window.location.pathname.includes('/ja')

const Footer = ({ intl }) => {
  const { link, label } = langProps[+isJapanese()]
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link className={styles.logo} to='/'>
            <img alt='Santiment' src={santimentSvg} />
          </Link>

          <Link to={link} className={cx(styles.text, styles.link)}>
            <img alt='planet' src={planetSvg} className={styles.planet} />
            {label}
          </Link>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://santiment.net/about-santiment/'
            className={cx(styles.text, styles.link)}
          >
            {intl.formatMessage({ id: 'footer.about' })}
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://santiment.net/about-santiment/contact/'
            className={cx(styles.text, styles.link)}
          >
            {intl.formatMessage({ id: 'footer.contact' })}
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://santiment.net/terms-conditions/'
            className={cx(styles.text, styles.link)}
          >
            {intl.formatMessage({ id: 'footer.terms' })}
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://app.santiment.net/privacy-policy'
            className={cx(styles.text, styles.link)}
          >
            {intl.formatMessage({ id: 'footer.privacy' })}
          </a>
        </div>
        <div className={cx(styles.text, styles.rights)}>
          {intl.formatMessage({ id: 'footer.rights' })}
        </div>
      </div>
    </footer>
  )
}

export default injectIntl(Footer)
