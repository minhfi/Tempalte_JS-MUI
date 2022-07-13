import * as type from '../types'

export const login = credentials => ({
  type: type.LOGIN,
  value: credentials
})

export const logout = () => ({
  type: type.LOGOUT
})

export default {
  login,
  logout
}
