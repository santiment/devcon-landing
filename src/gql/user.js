import gql from 'graphql-tag'

const userDataFragment = gql`
  fragment userDataFragment on User {
    id
    email
    username
    privacyPolicyAccepted
  }
`

export const CURRENT_USER_QUERY = gql`
  query {
    currentUser {
      ...userDataFragment
    }
  }
  ${userDataFragment}
`

export const COUPON_MUTATION = gql`
  mutation sendPromoCoupon($email: String!, $lang: PromoEmailLangEnum) {
    sendPromoCoupon(email: $email, lang: $lang) {
      success
    }
  }
`

export const EMAIL_LOGIN_MUTATION = gql`
  mutation($email: String!) {
    emailLogin(email: $email) {
      success
    }
  }
`
