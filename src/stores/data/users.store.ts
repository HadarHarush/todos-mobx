import { makeObservable, observable } from 'mobx'
import RootStore from '../rootStore'

class User {}

export default class UsersStore {
  @observable
  list: User[] = []

  private rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeObservable(this)
    this.rootStore = rootStore
  }
}
