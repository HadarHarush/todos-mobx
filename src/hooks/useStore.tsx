import { useContext } from 'react'
import { storeContext } from '../store.context'

export const useStore = () => {
  return useContext(storeContext)
}
