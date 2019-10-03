import React, { useState } from 'react'
import { Query } from 'react-apollo'
import { navigate } from 'gatsby'
import Panel from '@santiment-network/ui/Panel/Panel'
import Button from '@santiment-network/ui/Button'
import Checkboxes from '@santiment-network/ui/Checkboxes'
import {
  CURRENT_USER_QUERY,
  GDPR_MUTATION,
  TRIAL_SUBSCRIPTION_MUTATION,
} from '../gql/user'
import { client } from '../apollo/client'
import styles from './gdpr.module.scss'

const GDPRPage = () => {
  const [isGDPR, setGDPR] = useState(false)
  const toggleGDPR = () => setGDPR(!isGDPR)
  return (
    <div className={styles.page}>
      <Query query={CURRENT_USER_QUERY}>
        {({ data: { currentUser } = {}, loading }) => {
          if (!loading && (!currentUser || currentUser.privacyPolicyAccepted)) {
            navigate('/', { replace: true })
          }

          return (
            <Panel padding className={styles.wrapper}>
              <h2 className={styles.title}>
                Last step to your Santiment API key
              </h2>
              <p>
                Please accept our updated Privacy Policy to gain access to your
                API key
              </p>
              <Checkboxes
                className={styles.checkbox}
                labelOnRight
                options={['I have read and accept the ']}
                onSelect={toggleGDPR}
              />

              <a
                target='_blank'
                rel='noopener noreferrer'
                className={styles.link}
                href='https://app.santiment.net/privacy-policy'
              >
                Santiment Privacy Policy
              </a>

              <div className={styles.bottom}>
                <Button
                  disabled={!isGDPR}
                  variant='fill'
                  accent='positive'
                  onClick={() =>
                    client
                      .mutate({
                        mutation: GDPR_MUTATION,
                        variables: { privacyPolicyAccepted: true },
                      })
                      .then(() =>
                        client.mutate({
                          mutation: TRIAL_SUBSCRIPTION_MUTATION,
                        }),
                      )
                      .catch(console.error)
                  }
                >
                  I Agree
                </Button>
              </div>
            </Panel>
          )
        }}
      </Query>
    </div>
  )
}

export default GDPRPage
