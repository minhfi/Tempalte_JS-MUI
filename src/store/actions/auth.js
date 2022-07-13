import * as TYPE from '@/store/type'

export const login = credentials => ({
  type: TYPE.LOGIN,
  value: credentials
})

export const logout = () => ({
  type: TYPE.LOGOUT
})

export default {
  login,
  logout
}
