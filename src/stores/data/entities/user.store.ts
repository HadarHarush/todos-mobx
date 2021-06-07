import { makeObservable, observable } from 'mobx'
import RootStore from '../../rootStore'

let runningId: number = 0

export default class User {
  id: number = runningId++
  @observable
  name: string = ''

  private rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeObservable(this)
    this.rootStore = rootStore
  }
}
