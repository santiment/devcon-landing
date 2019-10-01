import React, { useRef } from 'react'
import Icon from '@santiment-network/ui/Icon'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import styles from './Header.module.scss'
import AccountBtn from '../AccountBtn/AccountBtn'
import santimentSvg from '../../images/santiment.svg'

const Header = ({ isAccountPage, intl }) => {
  const toggle = useRef(null)

  const closeNav = () => {
    toggle.current.checked = false
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link className={styles.logo} to='/'>
            <img alt='Santiment' src={santimentSvg} />
          </Link>
          <h2 className={styles.devcon}>DEVCON5</h2>
        </div>
        <div>
          <Link className={styles.link} to='/#pricing' onClick={closeNav}>
            Products
          </Link>
          <a
            className={styles.link}
            href='mailto:support@santiment.net'
            onClick={closeNav}
          >
            {intl.formatMessage({ id: 'header.support' })}
          </a>
          <AccountBtn isAccountPage={isAccountPage} onClick={closeNav} />
        </div>
      </nav>
    </header>
  )
}
export default injectIntl(Header)
