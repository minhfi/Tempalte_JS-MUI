import { scrollToTop } from '@/util/helpers'
import { useEffect } from 'react'

export default function useScrollTop(dependency) {
  useEffect(() => {
    scrollToTop()
    return () => {
      scrollToTop()
    }
  }, [dependency])
}
