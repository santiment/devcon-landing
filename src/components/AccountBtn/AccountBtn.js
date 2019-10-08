import React from 'react'
import Icon from '@santiment-network/ui/Icon'
import Button from '@santiment-network/ui/Button'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../../gql/user'
import { tr } from '../../utils/translate'
import styles from './AccountBtn.module.scss'

const btnProps = {
  false: {
    accent: 'positive',
    border: true,
    className: styles.login,
    children: tr('cta.sign_up'),
    onClick: () => {
      window.gtag('event', 'login_action_call', {
        location: 'Navbar',
        text: 'Sign up',
      })
    },
  },
  true: { className: styles.account, children: <Icon type='profile' /> },
}

const AccountBtn = ({ isAccountPage }) => {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { currentUser } = {} }) => {
        const { children, ...props } = btnProps[Boolean(currentUser)]
        return (
          <Button
            as='a'
            href='https://app.santiment.net/account'
            variant='flat'
            isActive={isAccountPage}
            {...props}
          >
            {children}
          </Button>
        )
      }}
    </Query>
  )
}

export default AccountBtn
