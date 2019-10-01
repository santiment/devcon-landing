import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import Icon from '@santiment-network/ui/Icon'
import Button from '@santiment-network/ui/Button'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/Main'
import API from '../components/API'
import Discount from '../components/Discount'
import styles from './index.module.scss'

function onGetAccessClick() {
  window.gtag('event', 'login_action_call', {
    location: 'Main section',
    text: 'Get access',
  })
}

function onDocumentationClick() {
  window.gtag('event', 'documentation_clicked')
}

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Santiment's Neuro - Crypto’s Most Comprehensive API" />
    <Main />
    <API />
    <Discount />
  </Layout>
)

export default injectIntl(IndexPage)
