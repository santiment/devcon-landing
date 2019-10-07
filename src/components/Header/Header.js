import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import { tr } from '../../utils/translate'
import styles from './Header.module.scss'
import AccountBtn from '../AccountBtn/AccountBtn'
import santimentSvg from '../../images/santiment.svg'

const Header = ({ isAccountPage, intl }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link className={styles.logo} to='/'>
            <img alt='Santiment' src={santimentSvg} />
          </Link>
          <h2 className={styles.devcon}>DEVCON5</h2>
        </div>
        <div className={styles.right}>
          <Link className={styles.link} to='/#products'>
            {tr('header.products')}
          </Link>
          <a className={styles.link} href='mailto:support@santiment.net'>
            {tr('header.support')}
          </a>
          <AccountBtn isAccountPage={isAccountPage} />
        </div>
      </nav>
    </header>
  )
}
export default injectIntl(Header)
