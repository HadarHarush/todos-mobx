import { autorun, makeObservable, observable } from 'mobx'
import RootStore from '../rootStore'

export default class GlobalView {
  @observable
  themeColor: string = 'blue'
  constructor(rootStore: RootStore) {
    makeObservable(this)
  }
}
