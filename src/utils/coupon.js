const DEVCON_COUPON = 'DEVCON_COUPON'

export const setCoupon = (coupon = '') => {
  if (typeof window === 'undefined') {
    return
  }

  return localStorage.setItem(DEVCON_COUPON, coupon)
}

export const getCoupon = () => {
  if (typeof window === 'undefined') {
    return
  }

  return localStorage.getItem(DEVCON_COUPON)
}
