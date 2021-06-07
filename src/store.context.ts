import { createContext } from 'react'
import RootStore from './stores/rootStore'

export const storeContext = createContext<RootStore>({} as RootStore)
