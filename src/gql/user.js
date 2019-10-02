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

export const GDPR_MUTATION = gql`
  mutation updateTermsAndConditions($privacyPolicyAccepted: Boolean!) {
    updateTermsAndConditions(privacyPolicyAccepted: $privacyPolicyAccepted) {
      id
      privacyPolicyAccepted
    }
  }
`

export const COUPON_MUTATION = gql`
  mutation sendPromoCoupon($email: String!, $lang: PromoEmailLangEnum) {
    sendPromoCoupon(email: $email, lang: $lang) {
      success
    }
  }
`
