import { createSelector } from 'reselect'

export const getLoading = createSelector(
  state => state.loading,
  loading => loading
)
