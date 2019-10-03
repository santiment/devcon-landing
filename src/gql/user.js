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

export const EMAIL_LOGIN_MUTATION = gql`
  mutation($email: String!) {
    emailLogin(email: $email) {
      success
    }
  }
`

export const TRIAL_SUBSCRIPTION_MUTATION = gql`
  mutation {
    createPromoSubscription(couponCode: "#{coupon}") {
      plan {
        id
        name
        product {
          name
        }
      }
    }
  }
`

export const VERIFY_EMAIL_MUTATION = gql`
  mutation emailLoginVerify($email: String!, $token: String!) {
    emailLoginVerify(email: $email, token: $token) {
      token
      user {
        ...userDataFragment
      }
    }
  }

  ${userDataFragment}
`
