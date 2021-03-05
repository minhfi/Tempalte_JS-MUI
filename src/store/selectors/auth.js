/**
 * File name: src\store\selectors\auth.js
 * Created by Visual studio code
 * User: Danh Le / danh.le@dinovative.com
 * Date: 2020-03-31 12:02:39
 */
import { createSelector } from 'reselect'

export const getCredential = createSelector(
  state => state.auth,
  auth => auth.credentials
)

export const getIsAuthenticated = createSelector(
  state => state.auth,
  auth => auth.credentials.isAuthenticated
)

export default {
  getCredential,
  getIsAuthenticated
}
