import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/Main'
import Graphs from '../components/Graphs'
import TrendsAndSheets from '../components/TrendsAndSheets'
import API from '../components/API'
import Discount from '../components/Discount'

const IndexPage = ({ intl }) => (
  <Layout>
    <Discount />
    <SEO title='DEVCON5 | Santiment' />
    <Main />
    <Graphs />
    <TrendsAndSheets />
    <API />
    <Discount />
  </Layout>
)

export default injectIntl(IndexPage)
